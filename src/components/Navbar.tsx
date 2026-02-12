import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10L80 80H20L50 10Z" fill="url(#logo-grad)" />
              <defs>
                <linearGradient id="logo-grad" x1="20" y1="80" x2="80" y2="10">
                  <stop stopColor="#FF4C00" />
                  <stop offset="1" stopColor="#FFA000" />
                </linearGradient>
              </defs>
            </svg>
          </a>

          {/* Center nav links */}
          <div className="hidden md:flex items-center bg-secondary/50 rounded-full px-1 py-1 border border-white/5">
            <a href="#" className="px-5 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full">Home</a>
            <a href="#pricing" className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full">Services</a>
            <a href="#features" className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full">More</a>
          </div>

          {/* Sign Up */}
          <div className="hidden md:block">
            <button className="bg-foreground text-background px-6 py-2 rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile menu */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/5 px-4 py-4 space-y-3">
          <a href="#" className="block text-foreground font-medium py-2">Home</a>
          <a href="#pricing" className="block text-muted-foreground font-medium py-2">Services</a>
          <a href="#features" className="block text-muted-foreground font-medium py-2">More</a>
          <button className="w-full bg-foreground text-background px-6 py-2 rounded-full text-sm font-semibold mt-2">Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
