
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ProgressProvider } from "./contexts/ProgressContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import ModulesPage from "./pages/ModulesPage";
import BonusesPage from "./pages/BonusesPage";
import { ContentPage } from "./components/ContentPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ProgressProvider>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            <Route path="/modules" element={
              <ProtectedRoute>
                <ModulesPage />
              </ProtectedRoute>
            } />
            <Route path="/bonuses" element={
              <ProtectedRoute>
                <BonusesPage />
              </ProtectedRoute>
            } />
            <Route path="/module/:id" element={
              <ProtectedRoute>
                <ContentPage />
              </ProtectedRoute>
            } />
            <Route path="/bonus/:id" element={
              <ProtectedRoute>
                <ContentPage />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
      </ProgressProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
