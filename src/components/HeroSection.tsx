import { useState, useEffect } from "react";
import { ArrowRight, ExternalLink, TerminalSquare, ShieldCheck, Clock, Headset } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlowCard from "./GlowCard";
import HeroButton from "./HeroButton";

const heroCards = [
  { icon: TerminalSquare, title: "Instant Setup", desc: "Get your server running in under 60 seconds" },
  { icon: ShieldCheck, title: "DDoS Protection", desc: "Enterprise-grade security for your servers" },
  { icon: Clock, title: "99.9% Uptime", desc: "Reliable hosting with guaranteed availability" },
  { icon: Headset, title: "24/7 Support", desc: "Expert help whenever you need it" },
];

const rotatingTexts = ["Discord Bot", "Minecraft Server", "Hytale Server"];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/banner-eiro.png" alt="Banner" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              Host your own<br />
              <span className="h-20 block relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingTexts[currentIndex]}
                    className="text-gradient-blue absolute"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -40, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    {rotatingTexts[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              Experience lightning-fast performance, unbeatable reliability, and 24/7 support for all your favorite games and applications.
            </p>
            <div className="mt-8 flex items-center space-x-6">
              <HeroButton href="https://renderbyte.site/billing" icon={<ArrowRight size={20} />}>Get Started</HeroButton>
              <HeroButton variant="secondary" href="#features" icon={<ExternalLink size={16} />}>Learn More</HeroButton>
            </div>
            <p className="mt-6 text-sm text-muted-foreground/60">··· Get started for free!</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {heroCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <GlowCard>
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <motion.div
                      className="w-fit rounded-lg p-2"
                      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                    >
                      <card.icon size={28} className="text-primary" />
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-lg font-semibold text-balance text-foreground md:text-xl">{card.title}</h3>
                      <p className="font-sans text-sm text-muted-foreground md:text-base">{card.desc}</p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
