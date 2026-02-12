import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  return (
    <div className="list-none h-full">
      <div className="glow-card">
        <div className={`relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-5 ${className}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default GlowCard;
