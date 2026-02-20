import ServicePlanPage, { Plan } from "@/components/ServicePlanPage";

const plans: Plan[] = [
  {
    name: "Basic",
    price: "₹39.99",
    cpu: "50%",
    memory: "512MB DDR5",
    disk: "2GB NVMe",
    features: ["Unlimited Bandwidth", "24/7 Uptime", "Git Integration", "Basic Support"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/discord-bot-hosting/",
  },
  {
    name: "Premium",
    price: "₹69.99",
    cpu: "100%",
    memory: "1GB DDR5",
    disk: "6GB NVMe",
    popular: true,
    features: ["Unlimited Bandwidth", "24/7 Uptime", "Git Integration", "Priority Support"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/discord-bot-hosting/",
  },
  {
    name: "Ultra",
    price: "₹119.99",
    cpu: "200%",
    memory: "2GB DDR5",
    disk: "15GB NVMe",
    features: ["Unlimited Bandwidth", "24/7 Uptime", "Git Integration", "Priority Support", "Custom Subdomain"],
    buyLink: "https://renderbyte.site/billing/index.php?rp=/store/discord-bot-hosting/",
  },
];

const DiscordHosting = () => (
  <ServicePlanPage
    title="Discord Bot Hosting"
    subtitle="Host your Python, Node.js, or Java bots 24/7. No lag, full access."
    plans={plans}
    showSpecs
  />
);

export default DiscordHosting;
