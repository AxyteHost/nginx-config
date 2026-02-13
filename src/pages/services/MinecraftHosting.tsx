import ServicePlanPage, { Plan } from "@/components/ServicePlanPage";

const plans: Plan[] = [
  {
    name: "Dirt Plan",
    price: "$2.50",
    ram: "1GB",
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access"],
  },
  {
    name: "Sand Plan",
    price: "$5.00",
    ram: "2GB",
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access", "Modpack Support"],
  },
  {
    name: "Cobblestone",
    price: "$7.50",
    ram: "3GB",
    popular: true,
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access", "Modpack Support", "Plugin Manager"],
  },
  {
    name: "Iron Plan",
    price: "$10.00",
    ram: "4GB",
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access", "Modpack Support", "Plugin Manager", "Premium Support"],
  },
  {
    name: "Gold Plan",
    price: "$15.00",
    ram: "6GB",
    features: ["Instant Setup", "DDoS Protection", "Full FTP Access", "Modpack Support", "NVMe SSD"],
  },
  {
    name: "Diamond Plan",
    price: "$20.00",
    ram: "8GB",
    features: ["Everything Unlimited", "Priority Support", "Free Dedicated IP", "NVMe SSD Storage"],
  },
];

const MinecraftHosting = () => (
  <ServicePlanPage
    title="Minecraft Hosting"
    subtitle="Reliable performance, instant setup, and full control panel access for your server."
    plans={plans}
  />
);

export default MinecraftHosting;
