import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";

const NewTicket = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("normal");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { navigate("/login"); return; }

    const { data: ticket, error } = await supabase.from("tickets").insert({
      user_id: user.id, subject: subject.trim(), priority,
    }).select().single();

    if (error || !ticket) {
      toast({ title: "Failed to create ticket", description: error?.message, variant: "destructive" });
      setLoading(false);
      return;
    }

    await supabase.from("ticket_messages").insert({
      ticket_id: ticket.id, user_id: user.id, message: message.trim(),
    });

    setLoading(false);
    toast({ title: "Ticket created!" });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl font-bold text-foreground mb-8">New Support <span className="text-primary">Ticket</span></h1>
            <div className="glow-card">
              <form className="p-6 rounded-xl space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Subject</label>
                  <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Brief description of your issue" maxLength={200} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Priority</label>
                  <select value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-white/10 text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="w-full px-4 py-2.5 rounded-lg bg-secondary/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none" placeholder="Describe your issue in detail..." maxLength={5000} />
                </div>
                <button type="submit" disabled={loading} className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <>Submit Ticket <ArrowRight size={16} /></>}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default NewTicket;
