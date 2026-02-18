import ServicePlanPage, { Plan } from "@/components/ServicePlanPage";

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹1.00",
    memory: "256MB",
    cpu: "50%",
    features: ["24/7 Online", "Git Integration", "Basic Support"],
  },
  {
    name: "Standard",
    price: "₹2.50",
    memory: "512MB",
    cpu: "100%",
    popular: true,
    features: ["24/7 Online", "Git Integration", "Priority Support", "MySQL Database"],
  },
  {
    name: "Pro",
    price: "₹4.50",
    memory: "1GB",
    cpu: "200%",
    features: ["24/7 Online", "Git Integration", "Priority Support", "MySQL & Redis", "Custom Subdomain"],
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
