import ServicePlanPage, { Plan } from "@/components/ServicePlanPage";

const plans: Plan[] = [
  {
    name: "Basic Custom",
    price: "$4.00",
    memory: "512MB",
    cpu: "50%",
    features: ["Custom Configuration", "24/7 Online", "Basic Support", "Git Integration"],
  },
  {
    name: "Standard Custom",
    price: "$8.00",
    memory: "1GB",
    cpu: "100%",
    popular: true,
    features: ["Custom Configuration", "24/7 Online", "Priority Support", "Git Integration", "Database Included"],
  },
  {
    name: "Pro Custom",
    price: "$15.00",
    memory: "2GB",
    cpu: "200%",
    features: ["Custom Configuration", "24/7 Online", "Priority Support", "Git Integration", "Database & Redis", "Custom Subdomain", "API Access"],
  },
];

const CustomHosting = () => (
  <ServicePlanPage
    title="Custom Hosting"
    subtitle="Flexible hosting solutions tailored to your specific needs. Run any application you want."
    plans={plans}
    showSpecs
  />
);

export default CustomHosting;
