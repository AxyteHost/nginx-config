import { ReactNode } from "react";

interface HeroButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  href?: string;
}

const HeroButton = ({ children, variant = "primary", icon, href }: HeroButtonProps) => {
  const inner = (
    <>
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,hsl(200_100%_55%_/_0.6)_0%,hsl(200_100%_55%_/_0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className={`relative flex space-x-2 items-center z-10 rounded-full py-3 px-6 ring-1 ring-white/10 ${
        variant === "primary" ? "bg-zinc-950" : "bg-zinc-950/70 border border-white/20"
      }`}>
        <span>{children}</span>
        {icon && <div className="flex items-center">{icon}</div>}
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-transparent via-primary/90 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
    </>
  );

  const className = "no-underline group cursor-pointer relative shadow-lg shadow-zinc-900 rounded-full p-px font-semibold leading-6 text-foreground inline-block";

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  return <button className={className}>{inner}</button>;
};

export default HeroButton;
