import ServicePlanPage, { Plan } from "@/components/ServicePlanPage";

const plans: Plan[] = [
  {
    name: "Hytale 4GB",
    price: "₹79",
    ram: "4GB",
    cpu: "100%",
    disk: "10GB SSD",
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access"],
  },
  {
    name: "Hytale 8GB",
    price: "₹125",
    ram: "8GB",
    cpu: "200%",
    disk: "20GB SSD",
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access", "Mod Support"],
  },
  {
    name: "Hytale 12GB",
    price: "₹199",
    ram: "12GB",
    cpu: "300%",
    disk: "30GB SSD",
    popular: true,
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access", "Mod Support", "Auto Backups"],
  },
  {
    name: "Hytale 16GB",
    price: "₹255",
    ram: "16GB",
    cpu: "400%",
    disk: "40GB SSD",
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access", "Mod Support", "Auto Backups", "Priority Support"],
  },
  {
    name: "Hytale 24GB",
    price: "₹349",
    ram: "24GB",
    cpu: "500%",
    disk: "50GB SSD",
    features: ["Everything Included", "Priority Support", "NVMe SSD Storage", "Dedicated IP"],
  },
  {
    name: "Hytale 32GB",
    price: "₹455",
    ram: "32GB",
    cpu: "600%",
    disk: "80GB SSD",
    features: ["Everything Included", "Dedicated Resources", "Premium Support", "NVMe SSD", "Custom Domain"],
  },
];

const HytaleHosting = () => (
  <ServicePlanPage
    title="Hytale Hosting"
    subtitle="High-performance Hytale servers with instant deployment and full mod support."
    plans={plans}
    showSpecs
  />
);

export default HytaleHosting;
