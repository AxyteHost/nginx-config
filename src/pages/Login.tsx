import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="glow-card">
            <div className="p-8 rounded-xl">
              <div className="text-center mb-8">
                <img src="/images/logo.png" alt="RenderByte" className="w-12 h-12 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
                <p className="text-muted-foreground text-sm mt-1">Sign in to your RenderByte account</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Password</label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary/50 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <a href="#" className="text-primary text-sm hover:underline">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  Sign In <ArrowRight size={16} />
                </button>
              </form>

              <p className="text-center text-muted-foreground text-sm mt-6">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary hover:underline">Sign Up</Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Login;
