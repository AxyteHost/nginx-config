import { Cpu, Zap, ShieldCheck, HeartPulse, Settings, BarChart, Globe } from "lucide-react";
import { motion } from "framer-motion";
import GlowCard from "./GlowCard";

const features = [
  { icon: Cpu, title: "High Performance", desc: "Powered by latest generation processors for performance", span: "col-span-1" },
  { icon: Zap, title: "Low Latency", desc: "Optimized network infrastructure for minimal lag and delay", span: "col-span-1" },
  { icon: ShieldCheck, title: "Advanced Security", desc: "Our system is protected by advanced, multi-layered security protocols designed to detect, isolate, and neutralize threats in real time.", span: "col-span-1 md:col-span-2" },
  { icon: HeartPulse, title: "Auto Recovery", desc: "Automatic server recovery and backup systems", span: "col-span-1" },
  { icon: Settings, title: "Full Control", desc: "Complete server control panel with advanced configuration options", span: "col-span-1" },
  { icon: BarChart, title: "Resource Scaling", desc: "Dynamic resource allocation based on server demands", span: "col-span-1" },
  { icon: Globe, title: "Global Network", desc: "Worldwide server locations for optimal connectivity", span: "col-span-1" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">We Won't Disappoint</span>
          <h2 className="section-title">Advanced <span className="text-primary">Features</span></h2>
          <p className="section-subtitle max-w-3xl">Everything you need for professional game server hosting</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              className={`${feat.span} row-span-1`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlowCard>
                <div className="relative flex flex-1 flex-col justify-between gap-3">
                  <div className="w-fit rounded-lg p-2">
                    <feat.icon size={28} className="text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans text-lg font-semibold text-balance text-foreground md:text-xl">{feat.title}</h3>
                    <p className="font-sans text-sm text-muted-foreground md:text-base">{feat.desc}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
