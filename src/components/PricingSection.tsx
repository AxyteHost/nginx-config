import { Check, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DISCORD_LINK = "https://discord.gg/renderbyte";

const plans = [
  {
    name: "Bot Hosting",
    image: "/images/discord.png",
    startingPrice: "₹1.00",
    popular: true,
    link: "/services/discord",
    features: ["ECC Memory", "Fast Performance", "Low Latency", "Advanced security", "Managed services"],
  },
  {
    name: "Minecraft Servers",
    image: "/images/mc.jpg",
    startingPrice: "₹2.50",
    popular: false,
    link: "/services/minecraft",
    features: ["Instant deployment", "DDoS protection", "24/7 support", "Custom configurations", "Mod support"],
  },
  {
    name: "Hytale Hosting",
    image: "/images/hytale.jpg",
    startingPrice: "₹79",
    popular: false,
    link: "/services/hytale",
    features: ["Up to 32GB RAM", "DDoS protection", "NVMe SSD", "Full mod support", "Instant setup"],
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <h2 className="section-title mt-0">Pricing <span className="text-primary">Plans</span></h2>
            <p className="section-subtitle max-w-2xl">Choose the perfect plan for your needs. All plans include our core features with no hidden fees.</p>
          </div>
          <button className="bg-secondary border border-white/10 text-foreground font-semibold py-2 px-4 rounded-lg inline-flex items-center shrink-0">
            <span className="mr-2">$ USD - US Dollar</span>
            <ChevronDown size={20} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="list-none p-0 overflow-hidden h-full">
                <div className="glow-card">
                  <div className="relative flex flex-col h-full">
                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full z-20">
                        Most Popular
                      </div>
                    )}
                    <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${plan.image})` }}>
                      <div className="h-full w-full bg-background/50 flex items-end p-6">
                        <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-muted-foreground">Starting at</p>
                      <div className="text-5xl font-bold text-foreground my-2">{plan.startingPrice}<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                      <ul className="space-y-3 my-8">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-center text-muted-foreground">
                            <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={plan.link}
                        className="no-underline group cursor-pointer relative shadow-lg shadow-zinc-900 rounded-full p-px font-semibold leading-6 text-foreground inline-block w-full rounded-lg mt-auto"
                      >
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,hsl(200_100%_55%_/_0.6)_0%,hsl(200_100%_55%_/_0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full py-3 px-6 ring-1 ring-white/10 bg-zinc-950 justify-center">
                          <span>Start Now</span>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-transparent via-primary/90 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
