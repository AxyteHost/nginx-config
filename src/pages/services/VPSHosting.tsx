import ServicePlanPage, { Plan } from "@/components/ServicePlanPage";

const plans: Plan[] = [
  {
    name: "VPS Starter",
    price: "$5.00",
    memory: "1GB",
    cpu: "1 vCPU",
    features: ["Full Root Access", "SSD Storage", "99.9% Uptime", "1TB Bandwidth"],
  },
  {
    name: "VPS Standard",
    price: "$10.00",
    memory: "2GB",
    cpu: "2 vCPU",
    popular: true,
    features: ["Full Root Access", "NVMe SSD", "99.9% Uptime", "2TB Bandwidth", "DDoS Protection"],
  },
  {
    name: "VPS Pro",
    price: "$20.00",
    memory: "4GB",
    cpu: "4 vCPU",
    features: ["Full Root Access", "NVMe SSD", "99.9% Uptime", "Unlimited Bandwidth", "DDoS Protection", "Backup Included"],
  },
  {
    name: "VPS Enterprise",
    price: "$40.00",
    memory: "8GB",
    cpu: "6 vCPU",
    features: ["Full Root Access", "NVMe SSD", "99.99% Uptime", "Unlimited Bandwidth", "Advanced DDoS", "Daily Backups", "Priority Support"],
  },
];

const VPSHosting = () => (
  <ServicePlanPage
    title="VPS Hosting"
    subtitle="Full root access VPS with SSD storage and guaranteed uptime for any workload."
    plans={plans}
    showSpecs
  />
);

export default VPSHosting;
