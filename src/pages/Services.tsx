import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rotatingWords = ["Game", "Bot", "VPS"];

const services = [
  {
    name: "Minecraft",
    image: "/images/mc.jpg",
    price: "₹29.00",
    link: "/services/minecraft",
    available: true,
  },
  {
    name: "Discord Bot",
    image: "/images/discord.png",
    price: "₹39.99",
    link: "/services/discord",
    available: true,
  },
  {
    name: "Hytale",
    image: "/images/hytale.jpg",
    price: "₹79",
    link: "/services/hytale",
    available: true,
  },
];

const Services = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
            <h1 className="text-5xl sm:text-6xl font-bold flex items-center justify-center gap-3">
              <span className="inline-block relative w-[140px] sm:w-[180px] h-[1.2em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    className="absolute inset-0 flex items-center justify-end text-gradient-blue"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="text-foreground">Hosting</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Premium performance for your servers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="glow-card h-full">
                  <div className="relative flex flex-col h-full rounded-xl overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                      {!service.available && (
                        <div className="absolute top-3 right-3 bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full uppercase">
                          Coming Soon
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-foreground">{service.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Starting at <span className="text-primary font-bold">{service.price}</span>/mo
                      </p>
                      <div className="mt-auto pt-4">
                        {service.available ? (
                          <Link
                            to={service.link}
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-white/10 bg-secondary/50 text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
                          >
                            Order Now <ArrowRight size={16} />
                          </Link>
                        ) : (
                          <button
                            disabled
                            className="w-full py-2.5 rounded-lg bg-muted text-muted-foreground font-semibold text-sm cursor-not-allowed"
                          >
                            Soon
                          </button>
                        )}
                      </div>
                    </div>
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

export default Services;
