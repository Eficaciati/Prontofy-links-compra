import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CookieConsent } from "@/components/CookieConsent";

const Apresentacao = lazy(() => import("./pages/Apresentacao"));
const ConfiguracaoSecretariaIA = lazy(() => import("./pages/ConfiguracaoSecretariaIA"));
const FormularioApresentacao = lazy(() => import("./pages/FormularioApresentacao"));
const FormularioLeads = lazy(() => import("./pages/FormularioLeads"));
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const SecretariaVirtual = lazy(() => import("./pages/SecretariaVirtual"));
const Telemedicina = lazy(() => import("./pages/Telemedicina"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CookieConsent />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-[#03060a]" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/apresentacao" element={<Apresentacao />} />
            <Route path="/apresentacao/formulario" element={<FormularioApresentacao />} />
            <Route path="/formulario" element={<FormularioLeads />} />
            <Route path="/secretaria-virutal" element={<Navigate to="/secretaria-virtual" replace />} />
            <Route path="/secretaria-virtual" element={<SecretariaVirtual />} />
            <Route path="/telemedicina" element={<Telemedicina />} />
            <Route path="/configuracao-secretaria-ia" element={<ConfiguracaoSecretariaIA />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
