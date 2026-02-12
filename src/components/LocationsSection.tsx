import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const locations = [
  {
    name: "Singapore",
    specs: "AMD EPYC™ 9634 / Ampere Altra",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-8 h-8 rounded-full">
        <defs>
          <clipPath id="sgCircle">
            <circle cx="320" cy="240" r="240" />
          </clipPath>
        </defs>
        <g clipPath="url(#sgCircle)">
          <rect width="640" height="240" fill="#EF3340" />
          <rect y="240" width="640" height="240" fill="#FFFFFF" />
          <circle cx="200" cy="160" r="80" fill="#FFFFFF" />
          <circle cx="220" cy="160" r="65" fill="#EF3340" />
        </g>
      </svg>
    ),
    // Corrected position (Equator + Southeast Asia)
    dotPos: { top: "58%", left: "79%" },
  },
  {
    name: "India",
    specs: "AMD Ryzen™ 9 5900X / Intel® Xeon®",
    flag: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" className="w-8 h-8 rounded-full">
        <defs>
          <clipPath id="inCircle">
            <circle cx="320" cy="240" r="240" />
          </clipPath>
        </defs>
        <g clipPath="url(#inCircle)">
          <rect width="640" height="160" fill="#FF9933" />
          <rect y="160" width="640" height="160" fill="#FFFFFF" />
          <rect y="320" width="640" height="160" fill="#138808" />
          <circle
            cx="320"
            cy="240"
            r="40"
            fill="none"
            stroke="#000080"
            strokeWidth="8"
          />
        </g>
      </svg>
    ),
    // Slightly north-west of Singapore
    dotPos: { top: "52%", left: "72%" },
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
          <span className="section-badge flex items-center justify-center gap-2">
            <Globe size={14} />
            Global Infrastructure
          </span>

          <h2 className="section-title">
            Global <span className="text-primary">Locations</span>
          </h2>

          <p className="section-subtitle max-w-3xl mx-auto">
            Strategically positioned servers worldwide for optimal performance
            and minimal latency
          </p>
        </motion.div>

        {/* Location List */}
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

        {/* Map */}
        <motion.div
          className="relative w-full max-w-5xl mx-auto aspect-[2/1]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/map.svg"
            alt="Global Server Locations Map"
            className="absolute top-0 left-0 w-full h-full object-contain"
          />

          {locations.map((loc) => (
            <div key={loc.name} className="absolute" style={loc.dotPos}>
              <div className="relative flex justify-center items-center">
                <div className="absolute w-4 h-4 rounded-full bg-primary animate-ping opacity-75" />
                <div className="w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationsSection;
