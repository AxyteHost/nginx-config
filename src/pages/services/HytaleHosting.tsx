import ServicePlanPage, { Plan } from "@/components/ServicePlanPage";

const plans: Plan[] = [
  {
    name: "Explorer",
    price: "$3.00",
    ram: "1GB",
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access"],
  },
  {
    name: "Adventurer",
    price: "$6.00",
    ram: "2GB",
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access", "Mod Support", "Auto Backups"],
  },
  {
    name: "Champion",
    price: "$9.00",
    ram: "4GB",
    popular: true,
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access", "Mod Support", "Auto Backups", "Priority Support"],
  },
  {
    name: "Legend",
    price: "$14.00",
    ram: "6GB",
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access", "Mod Support", "NVMe SSD", "Dedicated IP"],
  },
  {
    name: "Mythic",
    price: "$20.00",
    ram: "8GB",
    features: ["Everything Unlimited", "Priority Support", "Free Dedicated IP", "NVMe SSD Storage", "Custom Domain"],
  },
  {
    name: "Titan",
    price: "$30.00",
    ram: "16GB",
    features: ["Everything Unlimited", "Dedicated Resources", "Premium Support", "NVMe SSD", "Custom Domain", "API Access"],
  },
];

const HytaleHosting = () => (
  <ServicePlanPage
    title="Hytale Hosting"
    subtitle="High-performance Hytale servers with instant deployment and full mod support."
    plans={plans}
  />
);

export default HytaleHosting;
