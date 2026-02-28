import ServicePlanPage, { Plan } from "@/components/ServicePlanPage";

const plans: Plan[] = [
  {
    name: "Dirt Plan",
    price: "₹98.00",
    ram: "2GB DDR4",
    cpu: "100%",
    disk: "5GB NVMe",
    features: ["2 Cloud Backups", "Mod Support", "24/7 Uptime", "DDoS Protection"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/minecraft",
  },
  {
    name: "Stone Plan",
    price: "₹198.00",
    ram: "4GB DDR4",
    cpu: "150%",
    disk: "10GB NVMe",
    features: ["3 Cloud Backups", "Mod Support", "24/7 Uptime", "DDoS Protection"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/minecraft",
  },
  {
    name: "Coal Plan",
    price: "₹298.00",
    ram: "6GB DDR4",
    cpu: "200%",
    disk: "15GB NVMe",
    features: ["4 Cloud Backups", "Mod Support", "24/7 Uptime", "DDoS Protection"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/minecraft",
  },
  {
    name: "Iron Plan",
    price: "₹398.00",
    ram: "8GB DDR4",
    cpu: "250%",
    disk: "20GB NVMe",
    popular: true,
    features: ["5 Cloud Backups", "Mod Support", "24/7 Uptime", "DDoS Protection"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/minecraft",
  },
  {
    name: "Gold Plan",
    price: "₹498.00",
    ram: "10GB DDR4",
    cpu: "300%",
    disk: "25GB NVMe",
    features: ["7 Cloud Backups", "Mod Support", "24/7 Uptime", "DDoS Protection"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/minecraft",
  },
  {
    name: "Diamond Plan",
    price: "₹598.00",
    ram: "12GB DDR4",
    cpu: "350%",
    disk: "30GB NVMe",
    features: ["9 Cloud Backups", "Mod Support", "24/7 Uptime", "DDoS Protection"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/minecraft",
  },
  {
    name: "Emerald Plan",
    price: "₹798.00",
    ram: "16GB DDR4",
    cpu: "400%",
    disk: "40GB NVMe",
    features: ["13 Cloud Backups", "Mod Support", "24/7 Uptime", "DDoS Protection"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/minecraft",
  },
  {
    name: "Netherite Plan",
    price: "₹998.00",
    ram: "20GB DDR4",
    cpu: "450%",
    disk: "45GB NVMe",
    features: ["16 Cloud Backups", "Mod Support", "24/7 Uptime", "DDoS Protection"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/minecraft",
  },
  {
    name: "Obsidian Plan",
    price: "₹1198.00",
    ram: "20GB DDR4",
    cpu: "450%",
    disk: "45GB NVMe",
    features: ["16 Cloud Backups", "Mod Support", "24/7 Uptime", "DDoS Protection"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/minecraft",
  },
];

const MinecraftHosting = () => (
  <ServicePlanPage
    title="Minecraft Hosting"
    subtitle="Reliable performance, instant setup, and full control panel access for your server."
    plans={plans}
    showSpecs
  />
);

export default MinecraftHosting;
