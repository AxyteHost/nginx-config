import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const TicketDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [ticket, setTicket] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!id) return;
    const fetchTicket = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { navigate("/login"); return; }

      const [ticketRes, messagesRes] = await Promise.all([
        supabase.from("tickets").select("*").eq("id", id).single(),
        supabase.from("ticket_messages").select("*").eq("ticket_id", id).order("created_at", { ascending: true }),
      ]);

      if (ticketRes.error) { navigate("/dashboard"); return; }
      setTicket(ticketRes.data);
      setMessages(messagesRes.data || []);
      setLoading(false);
    };
    fetchTicket();
  }, [id, navigate]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setSending(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase.from("ticket_messages").insert({
      ticket_id: id!, user_id: user.id, message: newMessage.trim(),
    });

    if (error) {
      toast({ title: "Failed to send", description: error.message, variant: "destructive" });
    } else {
      setMessages(prev => [...prev, { id: Date.now(), ticket_id: id, user_id: user.id, message: newMessage.trim(), is_staff: false, created_at: new Date().toISOString() }]);
      setNewMessage("");
    }
    setSending(false);
  };

  if (loading) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Loader2 className="animate-spin text-primary" size={40} />
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground text-sm flex items-center gap-1 mb-4">
              <ArrowLeft size={14} /> Back to Dashboard
            </Link>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-foreground">{ticket.subject}</h1>
                <p className="text-muted-foreground text-sm capitalize">{ticket.priority} priority · {ticket.status}</p>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                ticket.status === "open" ? "bg-green-500/20 text-green-400" :
                ticket.status === "closed" ? "bg-red-500/20 text-red-400" :
                "bg-yellow-500/20 text-yellow-400"
              }`}>
                {ticket.status}
              </span>
            </div>

            <div className="glow-card mb-4">
              <div className="p-6 rounded-xl space-y-4 max-h-[500px] overflow-y-auto">
                {messages.map((msg) => (
                  <div key={msg.id} className={`p-4 rounded-lg ${msg.is_staff ? "bg-primary/10 border border-primary/20" : "bg-secondary/30 border border-white/5"}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-semibold ${msg.is_staff ? "text-primary" : "text-muted-foreground"}`}>
                        {msg.is_staff ? "Staff" : "You"}
                      </span>
                      <span className="text-xs text-muted-foreground">{new Date(msg.created_at).toLocaleString()}</span>
                    </div>
                    <p className="text-foreground text-sm whitespace-pre-wrap">{msg.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {ticket.status !== "closed" && (
              <form onSubmit={handleSend} className="flex gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  placeholder="Type your reply..."
                  maxLength={5000}
                />
                <button type="submit" disabled={sending} className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2">
                  {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default TicketDetail;
