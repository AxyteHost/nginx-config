import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How do I get started with game server hosting?", a: "Simply sign up for a free account, choose your server type, and you'll be up and running in under 60 seconds. Our intuitive control panel makes it easy to manage your server." },
  { q: "What kind of support do you provide?", a: "We offer 24/7 support through our Discord community, ticketing system, and live chat. Our expert team is always ready to help you with any issues." },
  { q: "Can I modify server settings and configurations?", a: "Yes! You have full control over your server settings, including custom configurations, mod installations, and plugin management through our control panel." },
  { q: "What payment methods do you accept?", a: "We accept major credit cards, PayPal, and cryptocurrency payments. All plans start for free with optional upgrades available." },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src="/images/faq.png" alt="AeroX FAQ Illustration" className="w-full h-auto max-w-md mx-auto" />
          </motion.div>

          <div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
                Frequently Asked<br />
                <span className="text-primary relative inline-block">
                  Questions
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full" />
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mt-4">Find answers to common questions about our game server hosting services.</p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="glow-card">
                    <div className="relative overflow-hidden rounded-xl">
                      <button
                        className="w-full flex justify-between items-center text-left p-5 focus:outline-none"
                        onClick={() => setOpenIdx(openIdx === i ? null : i)}
                      >
                        <div className="flex items-center">
                          <span className="text-primary font-bold mr-4 bg-secondary/50 px-3 py-1 rounded-md">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-semibold text-foreground">{faq.q}</span>
                        </div>
                        <ChevronRight
                          size={20}
                          className={`text-primary transition-transform duration-300 flex-shrink-0 ml-2 ${
                            openIdx === i ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openIdx === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 text-muted-foreground">{faq.a}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
