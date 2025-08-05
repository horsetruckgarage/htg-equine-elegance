import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "@/components/TranslationProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DemandeDevis from "./pages/DemandeDevis";
import NotFound from "./pages/NotFound";
import Camions from "./pages/Camions";
import Vans from "./pages/Vans";
import Remorques from "./pages/Remorques";
import Occasions from "./pages/Occasions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TranslationProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/devis" element={<DemandeDevis />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/camions" element={<Camions />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/remorques" element={<Remorques />} />
          <Route path="/occasions" element={<Occasions />} />
          <Route path="/neufs" element={<Index />} />
          <Route path="/expertise" element={<Index />} />
          <Route path="/financement" element={<Index />} />
          <Route path="/assurance" element={<Index />} />
          <Route path="/garantie" element={<Index />} />
          <Route path="/sav" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TranslationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
