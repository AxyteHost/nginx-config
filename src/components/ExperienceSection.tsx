import { useState } from "react";
import { Zap, Cog, LayoutList, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import GlowCard from "./GlowCard";

const tabs = [
  { icon: Zap, title: "Shell Access", desc: "Manage your server directly via our own custom made Shell system. No need for any third party tools!", image: "/images/shell.png" },
  { icon: Cog, title: "Plugin Manager", desc: "Our developers worked hard to bring you the best experience when hosting your server. Install plugins in a single click.", image: "/images/shell.png" },
  { icon: LayoutList, title: "Mod Manager", desc: "Our developers worked hard to bring you the best experience when hosting your server. Install mods in a single click.", image: "/images/shell.png" },
  { icon: BarChart2, title: "Analytics", desc: "View your server analytics in 1 minute, giving you detailed logs and charts.", image: "/images/shell.png" },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center md:text-left mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Our Panel</span>
          <h2 className="section-title">Experience Our <span className="text-primary">Platform</span></h2>
          <p className="section-subtitle max-w-3xl md:mx-0 mx-auto">Discover the powerful features that make our platform the perfect choice for your needs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col space-y-4">
            {tabs.map((tab, i) => (
              <motion.div
                key={tab.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className={`relative list-none h-auto transition-colors duration-300 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer ${
                    activeTab !== i ? "hover:bg-secondary/50" : ""
                  }`}
                  onClick={() => setActiveTab(i)}
                >
                  <div className="relative flex items-center p-5 rounded-[inherit] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-[hsl(16,100%,20%)] to-transparent transition-opacity"
                      style={{ opacity: activeTab === i ? 1 : 0 }}
                    />
                    <div className="relative z-10 flex items-center w-full">
                      <tab.icon size={28} className="text-primary mr-4 flex-shrink-0" />
                      <div className="flex-grow">
                        <h3 className="font-semibold text-foreground text-lg">{tab.title}</h3>
                        <p className="text-muted-foreground text-sm">{tab.desc}</p>
                      </div>
                    </div>
                    {activeTab === i && (
                      <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary to-transparent" style={{ width: "50%" }} />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlowCard className="p-0">
              <div className="relative flex justify-center items-center h-[300px] md:h-[350px] rounded-xl overflow-hidden bg-secondary/50">
                <img
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-3 pt-5">
                <h3 className="text-3xl font-bold text-foreground mb-2">{tabs[activeTab].title}</h3>
                <p className="text-muted-foreground text-lg">{tabs[activeTab].desc}</p>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
