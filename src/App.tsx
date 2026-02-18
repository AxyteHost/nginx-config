import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import MinecraftHosting from "./pages/services/MinecraftHosting";
import DiscordHosting from "./pages/services/DiscordHosting";
import HytaleHosting from "./pages/services/HytaleHosting";
import About from "./pages/About";
import Support from "./pages/Support";
import TermsOfService from "./pages/TermsOfService";
import Privacy from "./pages/Privacy";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NewTicket from "./pages/dashboard/NewTicket";
import TicketDetail from "./pages/dashboard/TicketDetail";
import AdminPanel from "./pages/admin/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/minecraft" element={<MinecraftHosting />} />
          <Route path="/services/discord" element={<DiscordHosting />} />
          <Route path="/services/hytale" element={<HytaleHosting />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/tickets/new" element={<NewTicket />} />
          <Route path="/dashboard/tickets/:id" element={<TicketDetail />} />
          <Route path="/admin/*" element={<AdminPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
