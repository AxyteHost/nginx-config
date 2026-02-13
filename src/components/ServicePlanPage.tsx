import { motion } from "framer-motion";
import { Check, ShoppingCart, Zap, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DISCORD_LINK = "https://discord.gg/renderbyte";

export interface Plan {
  name: string;
  price: string;
  ram?: string;
  memory?: string;
  cpu?: string;
  features: string[];
  popular?: boolean;
}

interface ServicePlanPageProps {
  title: string;
  subtitle: string;
  plans: Plan[];
  showSpecs?: boolean; // show RAM/CPU spec rows like discord page
}

const ServicePlanPage = ({ title, subtitle, plans, showSpecs = false }: ServicePlanPageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-primary">{title.split(" ").slice(-1)}</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full z-10 uppercase tracking-wider">
                    {showSpecs ? "Best Value" : "Most Popular"}
                  </div>
                )}
                <div className="glow-card h-full">
                  <div className="relative flex flex-col h-full rounded-xl p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                      <div className="text-right">
                        <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground text-sm">/month</span>
                      </div>
                    </div>

                    {plan.ram && (
                      <p className="text-sm mb-4">
                        <span className="text-primary font-bold">{plan.ram}</span>{" "}
                        <span className="text-muted-foreground">RAM</span>
                      </p>
                    )}

                    {showSpecs && (
                      <div className="space-y-2 mb-4 border-t border-b border-white/10 py-3">
                        {plan.memory && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2 text-muted-foreground">
                              <Zap size={14} className="text-primary" /> Memory
                            </span>
                            <span className="text-foreground font-medium">{plan.memory}</span>
                          </div>
                        )}
                        {plan.cpu && (
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center gap-2 text-muted-foreground">
                              <Cpu size={14} className="text-primary" /> CPU
                            </span>
                            <span className="text-foreground font-medium">{plan.cpu}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <ul className="space-y-2.5 my-4 flex-grow">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mr-2.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={DISCORD_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-white/10 bg-secondary/50 text-foreground font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors mt-auto"
                    >
                      <ShoppingCart size={16} />
                      Buy Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePlanPage;
