import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TranslationProvider } from "@/components/TranslationProvider";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DemandeDevis from "./pages/DemandeDevis";
import NotFound from "./pages/NotFound";
import Camions from "./pages/Camions";
import Vans from "./pages/Vans";

import Occasions from "./pages/Occasions";
import VehicleDetail from "./pages/VehicleDetail";
import AdminDashboard from "./pages/AdminDashboard";
import Auth from "./pages/Auth";
import LegacyVehicleRedirect from "./components/LegacyVehicleRedirect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TranslationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Routes>
            {/* Redirect root to French */}
            <Route path="/" element={<Navigate to="/fr" replace />} />
            
            {/* Auth & Admin routes */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<AdminDashboard />} />
            
            
            {/* French routes */}
            <Route path="/fr" element={<Index />} />
            <Route path="/fr/camions-chevaux" element={<Camions />} />
            <Route path="/fr/vans-chevaux" element={<Vans />} />
            <Route path="/fr/remorques-chevaux" element={<Navigate to="/fr/vans-chevaux" replace />} />
            <Route path="/fr/a-propos" element={<About />} />
            <Route path="/fr/contact" element={<Contact />} />
            <Route path="/fr/demande-devis" element={<DemandeDevis />} />
            <Route path="/fr/occasions" element={<Occasions />} />
            <Route path="/fr/vehicule" element={<Navigate to="/fr/camions-chevaux" replace />} />
            <Route path="/fr/vehicule/:id" element={<VehicleDetail />} />
            
            {/* English routes */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/horse-trucks" element={<Camions />} />
            <Route path="/en/horse-vans" element={<Vans />} />
            <Route path="/en/horse-trailers" element={<Navigate to="/en/horse-vans" replace />} />
            <Route path="/en/about" element={<About />} />
            <Route path="/en/contact" element={<Contact />} />
            <Route path="/en/quote" element={<DemandeDevis />} />
            <Route path="/en/used-vehicles" element={<Occasions />} />
            <Route path="/en/vehicle" element={<Navigate to="/en/horse-trucks" replace />} />
            <Route path="/en/vehicle/:id" element={<VehicleDetail />} />
            
            {/* Spanish routes */}
            <Route path="/es" element={<Index />} />
            <Route path="/es/camiones-para-caballos" element={<Camions />} />
            <Route path="/es/furgonetas-para-caballos" element={<Vans />} />
            <Route path="/es/remolques-para-caballos" element={<Navigate to="/es/furgonetas-para-caballos" replace />} />
            <Route path="/es/acerca-de" element={<About />} />
            <Route path="/es/contacto" element={<Contact />} />
            <Route path="/es/presupuesto" element={<DemandeDevis />} />
            <Route path="/es/ocasiones" element={<Occasions />} />
            <Route path="/es/vehiculo" element={<Navigate to="/es/camiones-para-caballos" replace />} />
            <Route path="/es/vehiculo/:id" element={<VehicleDetail />} />
            
            {/* German routes */}
            <Route path="/de" element={<Index />} />
            <Route path="/de/pferdetransporter" element={<Camions />} />
            <Route path="/de/pferde-vans" element={<Vans />} />
            <Route path="/de/pferde-anhaenger" element={<Navigate to="/de/pferde-vans" replace />} />
            <Route path="/de/ueber-uns" element={<About />} />
            <Route path="/de/kontakt" element={<Contact />} />
            <Route path="/de/angebot" element={<DemandeDevis />} />
            <Route path="/de/gebrauchte" element={<Occasions />} />
            <Route path="/de/fahrzeug" element={<Navigate to="/de/pferdetransporter" replace />} />
            <Route path="/de/fahrzeug/:id" element={<VehicleDetail />} />
            
            {/* Legacy redirects (without language prefix) */}
            <Route path="/camions" element={<Navigate to="/fr/camions-chevaux" replace />} />
            <Route path="/vans" element={<Navigate to="/fr/vans-chevaux" replace />} />
            <Route path="/remorques" element={<Navigate to="/fr/vans-chevaux" replace />} />
            <Route path="/about" element={<Navigate to="/fr/a-propos" replace />} />
            <Route path="/contact" element={<Navigate to="/fr/contact" replace />} />
            <Route path="/devis" element={<Navigate to="/fr/demande-devis" replace />} />
            <Route path="/occasions" element={<Navigate to="/fr/occasions" replace />} />

            {/* Legacy vehicle redirect for wrong 'vehicule' segment in non-French locales */}
            <Route path=":lang/vehicule/:id" element={<LegacyVehicleRedirect />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </TranslationProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
