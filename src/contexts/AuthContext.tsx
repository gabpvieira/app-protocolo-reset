
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AIRTABLE_ACCESS_TOKEN = import.meta.env.VITE_AIRTABLE_ACCESS_TOKEN;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

// Debug: Verificar se as variáveis de ambiente estão carregadas
console.log('🔧 Debug - Variáveis de ambiente:');
console.log('AIRTABLE_ACCESS_TOKEN:', AIRTABLE_ACCESS_TOKEN ? '✅ Carregado' : '❌ Não encontrado');
console.log('AIRTABLE_BASE_ID:', AIRTABLE_BASE_ID ? '✅ Carregado' : '❌ Não encontrado');
console.log('AIRTABLE_TABLE_NAME:', AIRTABLE_TABLE_NAME ? '✅ Carregado' : '❌ Não encontrado');

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se existe usuário salvo no localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    console.log('Tentando fazer login com email:', email);
    
    // Verificar se as variáveis de ambiente estão disponíveis
    if (!AIRTABLE_ACCESS_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
      console.error('❌ Erro: Variáveis de ambiente do Airtable não configuradas!');
      console.error('AIRTABLE_ACCESS_TOKEN:', AIRTABLE_ACCESS_TOKEN ? 'OK' : 'MISSING');
      console.error('AIRTABLE_BASE_ID:', AIRTABLE_BASE_ID ? 'OK' : 'MISSING');
      console.error('AIRTABLE_TABLE_NAME:', AIRTABLE_TABLE_NAME ? 'OK' : 'MISSING');
      setIsLoading(false);
      return false;
    }
    
    try {
      // Usar o nome correto da tabela e filtro ajustado
      const filterFormula = encodeURIComponent(`{Email}="${email}"`);
      const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}?filterByFormula=${filterFormula}`;
      
      console.log('URL da requisição:', url);
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });

      console.log('Status da resposta:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro na resposta da API:', errorData);
        throw new Error(`Erro ${response.status}: ${errorData.error?.message || 'Erro ao verificar usuário'}`);
      }

      const data = await response.json();
      console.log('Dados recebidos do Airtable:', data);
      
      if (data.records && data.records.length > 0) {
        const userRecord = data.records[0];
        console.log('Registro do usuário encontrado:', userRecord);
        
        const userData: User = {
          id: userRecord.id,
          email: userRecord.fields.Email,
          name: userRecord.fields.Nome || userRecord.fields.Name
        };
        
        console.log('Dados do usuário processados:', userData);
        
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsLoading(false);
        return true;
      } else {
        console.log('Nenhum usuário encontrado com este email');
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider');
  }
  return context;
};
