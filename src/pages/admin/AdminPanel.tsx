import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Users, Package, ShoppingCart, Ticket, Tag, Shield, Settings, BarChart2, Loader2, LogOut, Home } from "lucide-react";
import Navbar from "@/components/Navbar";

const AdminPanel = () => {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState({ users: 0, products: 0, orders: 0, tickets: 0 });
  const [activeTab, setActiveTab] = useState("overview");
  const [users, setUsers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [tickets, setTickets] = useState<any[]>([]);
  const [promoCodes, setPromoCodes] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { navigate("/login"); return; }
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", user.id);
      const admin = data?.some((r: any) => r.role === "admin") || false;
      if (!admin) { navigate("/dashboard"); return; }
      setIsAdmin(true);

      // Fetch all data
      const [profilesRes, productsRes, ordersRes, ticketsRes, promoRes] = await Promise.all([
        supabase.from("profiles").select("*"),
        supabase.from("products").select("*").order("sort_order"),
        supabase.from("orders").select("*, products(name, category), profiles!orders_user_id_fkey(display_name, email)"),
        supabase.from("tickets").select("*, profiles!tickets_user_id_fkey(display_name, email)"),
        supabase.from("promo_codes").select("*"),
      ]);

      setUsers(profilesRes.data || []);
      setProducts(productsRes.data || []);
      setOrders(ordersRes.data || []);
      setTickets(ticketsRes.data || []);
      setPromoCodes(promoRes.data || []);
      setStats({
        users: profilesRes.data?.length || 0,
        products: productsRes.data?.length || 0,
        orders: ordersRes.data?.length || 0,
        tickets: ticketsRes.data?.filter((t: any) => t.status === "open").length || 0,
      });
      setLoading(false);
    };
    check();
  }, [navigate]);

  if (loading) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="animate-spin text-primary" size={40} />
    </div>
  );

  if (!isAdmin) return null;

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart2 },
    { id: "users", label: "Users", icon: Users },
    { id: "products", label: "Products", icon: Package },
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "tickets", label: "Tickets", icon: Ticket },
    { id: "promos", label: "Promo Codes", icon: Tag },
    { id: "logs", label: "Security Logs", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-foreground">Admin <span className="text-primary">Panel</span></h1>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1">
              <Home size={14} /> Dashboard
            </Link>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/50 text-muted-foreground hover:text-foreground border border-white/5"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} key={activeTab}>
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Total Users", value: stats.users, icon: Users },
                  { label: "Products", value: stats.products, icon: Package },
                  { label: "Total Orders", value: stats.orders, icon: ShoppingCart },
                  { label: "Open Tickets", value: stats.tickets, icon: Ticket },
                ].map((s) => (
                  <div key={s.label} className="glow-card">
                    <div className="p-5 rounded-xl flex items-center gap-4">
                      <s.icon size={24} className="text-primary" />
                      <div>
                        <p className="text-2xl font-bold text-foreground">{s.value}</p>
                        <p className="text-sm text-muted-foreground">{s.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "users" && (
              <div className="glow-card">
                <div className="p-6 rounded-xl overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/10">
                      <th className="text-left py-3 text-muted-foreground font-medium">Name</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Email</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Joined</th>
                    </tr></thead>
                    <tbody>
                      {users.map((u) => (
                        <tr key={u.id} className="border-b border-white/5">
                          <td className="py-3 text-foreground">{u.display_name}</td>
                          <td className="py-3 text-muted-foreground">{u.email}</td>
                          <td className="py-3 text-muted-foreground">{new Date(u.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                      {users.length === 0 && <tr><td colSpan={3} className="py-6 text-center text-muted-foreground">No users yet</td></tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "products" && (
              <div className="glow-card">
                <div className="p-6 rounded-xl overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/10">
                      <th className="text-left py-3 text-muted-foreground font-medium">Name</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Category</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Price</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Status</th>
                    </tr></thead>
                    <tbody>
                      {products.map((p) => (
                        <tr key={p.id} className="border-b border-white/5">
                          <td className="py-3 text-foreground">{p.name}</td>
                          <td className="py-3 text-muted-foreground capitalize">{p.category}</td>
                          <td className="py-3 text-primary font-medium">${p.price}</td>
                          <td className="py-3"><span className={`text-xs px-2 py-1 rounded-full ${p.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>{p.is_active ? "Active" : "Inactive"}</span></td>
                        </tr>
                      ))}
                      {products.length === 0 && <tr><td colSpan={4} className="py-6 text-center text-muted-foreground">No products yet</td></tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="glow-card">
                <div className="p-6 rounded-xl overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/10">
                      <th className="text-left py-3 text-muted-foreground font-medium">User</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Product</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Amount</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Status</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Date</th>
                    </tr></thead>
                    <tbody>
                      {orders.map((o) => (
                        <tr key={o.id} className="border-b border-white/5">
                          <td className="py-3 text-foreground">{(o as any).profiles?.display_name || "Unknown"}</td>
                          <td className="py-3 text-muted-foreground">{(o as any).products?.name || "N/A"}</td>
                          <td className="py-3 text-primary font-medium">${o.amount}</td>
                          <td className="py-3"><span className={`text-xs px-2 py-1 rounded-full capitalize ${
                            o.status === "active" ? "bg-green-500/20 text-green-400" :
                            o.status === "suspended" ? "bg-red-500/20 text-red-400" :
                            "bg-yellow-500/20 text-yellow-400"
                          }`}>{o.status}</span></td>
                          <td className="py-3 text-muted-foreground">{new Date(o.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                      {orders.length === 0 && <tr><td colSpan={5} className="py-6 text-center text-muted-foreground">No orders yet</td></tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "tickets" && (
              <div className="glow-card">
                <div className="p-6 rounded-xl overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/10">
                      <th className="text-left py-3 text-muted-foreground font-medium">Subject</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">User</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Priority</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Status</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Date</th>
                    </tr></thead>
                    <tbody>
                      {tickets.map((t) => (
                        <tr key={t.id} className="border-b border-white/5">
                          <td className="py-3 text-foreground">{t.subject}</td>
                          <td className="py-3 text-muted-foreground">{(t as any).profiles?.display_name || "Unknown"}</td>
                          <td className="py-3 capitalize text-muted-foreground">{t.priority}</td>
                          <td className="py-3"><span className={`text-xs px-2 py-1 rounded-full capitalize ${
                            t.status === "open" ? "bg-green-500/20 text-green-400" :
                            t.status === "closed" ? "bg-red-500/20 text-red-400" :
                            "bg-yellow-500/20 text-yellow-400"
                          }`}>{t.status}</span></td>
                          <td className="py-3 text-muted-foreground">{new Date(t.created_at).toLocaleDateString()}</td>
                        </tr>
                      ))}
                      {tickets.length === 0 && <tr><td colSpan={5} className="py-6 text-center text-muted-foreground">No tickets yet</td></tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "promos" && (
              <div className="glow-card">
                <div className="p-6 rounded-xl overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/10">
                      <th className="text-left py-3 text-muted-foreground font-medium">Code</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Discount</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Uses</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Status</th>
                    </tr></thead>
                    <tbody>
                      {promoCodes.map((p) => (
                        <tr key={p.id} className="border-b border-white/5">
                          <td className="py-3 text-foreground font-mono">{p.code}</td>
                          <td className="py-3 text-primary">{p.discount_percent > 0 ? `${p.discount_percent}%` : `$${p.discount_amount}`}</td>
                          <td className="py-3 text-muted-foreground">{p.current_uses}/{p.max_uses || "∞"}</td>
                          <td className="py-3"><span className={`text-xs px-2 py-1 rounded-full ${p.is_active ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>{p.is_active ? "Active" : "Inactive"}</span></td>
                        </tr>
                      ))}
                      {promoCodes.length === 0 && <tr><td colSpan={4} className="py-6 text-center text-muted-foreground">No promo codes yet</td></tr>}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "logs" && (
              <div className="glow-card">
                <div className="p-6 rounded-xl text-center text-muted-foreground">
                  <Shield size={40} className="mx-auto mb-4 text-muted-foreground/50" />
                  <p>Security logs will appear here as actions are performed.</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
