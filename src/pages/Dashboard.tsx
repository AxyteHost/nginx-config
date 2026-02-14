import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Server, Ticket, Settings, LogOut, Plus, BarChart2, Users, Package, Tag, Shield, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import type { User } from "@supabase/supabase-js";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [tickets, setTickets] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      if (!session) {
        navigate("/login");
        return;
      }
      setUser(session.user);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/login");
        return;
      }
      setUser(session.user);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (!user) return;
    const fetchData = async () => {
      setLoading(true);
      const [profileRes, ordersRes, ticketsRes, roleRes] = await Promise.all([
        supabase.from("profiles").select("*").eq("user_id", user.id).single(),
        supabase.from("orders").select("*, products(name, category)").eq("user_id", user.id).order("created_at", { ascending: false }),
        supabase.from("tickets").select("*").eq("user_id", user.id).order("created_at", { ascending: false }),
        supabase.from("user_roles").select("role").eq("user_id", user.id),
      ]);
      setProfile(profileRes.data);
      setOrders(ordersRes.data || []);
      setTickets(ticketsRes.data || []);
      setIsAdmin(roleRes.data?.some((r: any) => r.role === "admin") || false);
      setLoading(false);
    };
    fetchData();
  }, [user]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  Welcome, <span className="text-primary">{profile?.display_name || "User"}</span>
                </h1>
                <p className="text-muted-foreground mt-1">{user?.email}</p>
              </div>
              <button onClick={handleLogout} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <LogOut size={16} /> Logout
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="glow-card">
                <div className="p-5 rounded-xl flex items-center gap-4">
                  <Server size={24} className="text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{orders.filter(o => o.status === "active").length}</p>
                    <p className="text-sm text-muted-foreground">Active Services</p>
                  </div>
                </div>
              </div>
              <div className="glow-card">
                <div className="p-5 rounded-xl flex items-center gap-4">
                  <Ticket size={24} className="text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{tickets.filter(t => t.status === "open").length}</p>
                    <p className="text-sm text-muted-foreground">Open Tickets</p>
                  </div>
                </div>
              </div>
              <div className="glow-card">
                <div className="p-5 rounded-xl flex items-center gap-4">
                  <Package size={24} className="text-primary" />
                  <div>
                    <p className="text-2xl font-bold text-foreground">{orders.length}</p>
                    <p className="text-sm text-muted-foreground">Total Orders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Services */}
              <div className="glow-card">
                <div className="p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-foreground">My Services</h2>
                    <Link to="/services" className="text-primary text-sm hover:underline flex items-center gap-1">
                      <Plus size={14} /> New Service
                    </Link>
                  </div>
                  {orders.length === 0 ? (
                    <p className="text-muted-foreground text-sm">No services yet. <Link to="/services" className="text-primary hover:underline">Get started!</Link></p>
                  ) : (
                    <div className="space-y-3">
                      {orders.slice(0, 5).map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-white/5">
                          <div>
                            <p className="text-foreground font-medium text-sm">{(order as any).products?.name || "Service"}</p>
                            <p className="text-muted-foreground text-xs capitalize">{(order as any).products?.category}</p>
                          </div>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            order.status === "active" ? "bg-green-500/20 text-green-400" :
                            order.status === "suspended" ? "bg-red-500/20 text-red-400" :
                            "bg-yellow-500/20 text-yellow-400"
                          }`}>
                            {order.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Tickets */}
              <div className="glow-card">
                <div className="p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-foreground">Support Tickets</h2>
                    <Link to="/dashboard/tickets/new" className="text-primary text-sm hover:underline flex items-center gap-1">
                      <Plus size={14} /> New Ticket
                    </Link>
                  </div>
                  {tickets.length === 0 ? (
                    <p className="text-muted-foreground text-sm">No tickets yet.</p>
                  ) : (
                    <div className="space-y-3">
                      {tickets.slice(0, 5).map((ticket) => (
                        <Link key={ticket.id} to={`/dashboard/tickets/${ticket.id}`} className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 border border-white/5 hover:bg-secondary/50 transition-colors block">
                          <div>
                            <p className="text-foreground font-medium text-sm">{ticket.subject}</p>
                            <p className="text-muted-foreground text-xs capitalize">{ticket.priority} priority</p>
                          </div>
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                            ticket.status === "open" ? "bg-green-500/20 text-green-400" :
                            ticket.status === "closed" ? "bg-red-500/20 text-red-400" :
                            "bg-yellow-500/20 text-yellow-400"
                          }`}>
                            {ticket.status}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Admin Panel Link */}
            {isAdmin && (
              <motion.div className="mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Link to="/admin" className="glow-card block">
                  <div className="p-6 rounded-xl flex items-center gap-4">
                    <Shield size={28} className="text-primary" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground">Admin Panel</h3>
                      <p className="text-muted-foreground text-sm">Manage users, products, orders, and settings</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
