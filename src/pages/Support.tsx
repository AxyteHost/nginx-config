import { motion } from "framer-motion";
import { MessageSquare, Mail, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Support = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold">
              How can we <span className="text-primary">help?</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team is ready to assist you with any questions or issues you might have. Here's how you can reach us:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="glow-card h-full">
                <div className="flex flex-col items-center text-center p-8 rounded-xl h-full">
                  <MessageSquare size={48} className="text-primary mb-6" />
                  <h2 className="text-2xl font-bold text-foreground mb-3">Join our Discord</h2>
                  <p className="text-muted-foreground mb-6">
                    For the fastest support, community help, and real-time announcements, join our Discord server.
                  </p>
                  <a
                    href="https://discord.gg/renderbyte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-lg border border-white/10 bg-secondary/50 text-foreground font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors text-center block mt-auto"
                  >
                    Join Discord Server
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glow-card h-full">
                <div className="flex flex-col items-center text-center p-8 rounded-xl h-full">
                  <Mail size={48} className="text-primary mb-6" />
                  <h2 className="text-2xl font-bold text-foreground mb-3">Official Support</h2>
                  <p className="text-muted-foreground mb-6">
                    For billing inquiries or formal support, please send us an email or open a support ticket.
                  </p>
                  <div className="w-full py-3 rounded-lg border border-white/10 bg-secondary/30 text-foreground font-medium text-sm text-center mt-auto">
                    Email: support@renderbyte.com
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AlertCircle size={40} className="text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Service Status</h2>
            <p className="text-muted-foreground">
              Experiencing issues? Check our{" "}
              <a href="#" className="text-primary hover:underline">Status Page</a>{" "}
              for any ongoing incidents.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
