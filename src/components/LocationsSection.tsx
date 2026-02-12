import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    name: "United States",
    specs: "AMD EPYC™ 9634 / Ampere Altra",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512" className="w-8 h-8 rounded-full">
        <mask id="us"><circle cx="256" cy="256" r="256" fill="#fff"/></mask>
        <g mask="url(#us)"><path fill="#eee" d="M256 0h256v64l-32 32 32 32v64l-32 32 32 32v64l-32 32 32 32v64l-256 32L0 448v-64l32-32-32-32v-64z"/><path fill="#d80027" d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z"/><path fill="#0052b4" d="M0 0h256v256H0Z"/><path fill="#eee" d="m187 243 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67zm162-81 57-41h-70l57 41-22-67zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Zm162-82 57-41h-70l57 41-22-67Zm-81 0 57-41H93l57 41-22-67zm-81 0 57-41H12l57 41-22-67Z"/></g>
      </svg>
    ),
    dotPos: { top: "35%", left: "18%" },
  },
  {
    name: "Netherlands",
    specs: "AMD Ryzen™ 9 5900X / Intel® Xeon®",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64" className="w-8 h-8 rounded-full">
        <path fill="#f30a21" d="M32 2C18.9 2 7.8 10.3 3.7 22h56.6C56.2 10.3 45.1 2 32 2"/><path fill="#0664f7" d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62"/><path fill="#fff" d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10z"/>
      </svg>
    ),
    dotPos: { top: "25%", left: "49%" },
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">
            <Globe size={14} />
            Global Infrastructure
          </span>
          <h2 className="section-title">Global <span className="text-primary">Locations</span></h2>
          <p className="section-subtitle max-w-3xl mx-auto">Strategically positioned servers worldwide for optimal performance and minimal latency</p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-x-12 gap-y-6 mb-12">
          {locations.map((loc) => (
            <motion.div
              key={loc.name}
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {loc.flag}
              <div>
                <h3 className="font-semibold text-foreground">{loc.name}</h3>
                <p className="text-sm text-muted-foreground">{loc.specs}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative w-full max-w-5xl mx-auto aspect-[2/1]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img src="/images/map.svg" alt="Global Server Locations Map" className="absolute top-0 left-0 w-full h-full object-contain" />
          {locations.map((loc) => (
            <div key={loc.name} className="absolute" style={loc.dotPos}>
              <div className="relative flex justify-center items-center">
                <div className="absolute w-4 h-4 rounded-full bg-primary animate-ping opacity-75" />
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
