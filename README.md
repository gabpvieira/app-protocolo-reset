# Reset Protocol Hub

Um aplicativo React moderno para gerenciamento do Protocolo Reset da Barriga.

## 🚀 Deploy no Vercel

### Pré-requisitos

1. Conta no [Vercel](https://vercel.com)
2. Repositório no GitHub com o código do projeto
3. Variáveis de ambiente configuradas

### Variáveis de Ambiente

Configure as seguintes variáveis de ambiente no Vercel:

```env
VITE_AIRTABLE_ACCESS_TOKEN=your_airtable_access_token_here
VITE_AIRTABLE_BASE_ID=your_airtable_base_id_here
VITE_AIRTABLE_TABLE_NAME=protocolo-reset
```

### Passos para Deploy

1. **Conectar Repositório**
   - Acesse [Vercel Dashboard](https://vercel.com/dashboard)
   - Clique em "New Project"
   - Conecte seu repositório GitHub

2. **Configurar Build**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Configurar Variáveis de Ambiente**
   - Na aba "Environment Variables"
   - Adicione as variáveis listadas acima

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde o processo de build e deploy

### Configurações Incluídas

- ✅ `vercel.json` configurado para SPA routing
- ✅ Build otimizado com code splitting
- ✅ Cache headers para assets estáticos
- ✅ Minificação com Terser
- ✅ Node.js 18 especificado via `.nvmrc`

---

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/e31d39e7-4fdd-4dbc-8df7-09b26f527174

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e31d39e7-4fdd-4dbc-8df7-09b26f527174) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/e31d39e7-4fdd-4dbc-8df7-09b26f527174) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
