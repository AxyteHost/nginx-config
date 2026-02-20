import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Info, Headset, FileText, ShieldCheck, ReceiptText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DISCORD_LINK = "https://discord.gg/renderbyte";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="RenderByte" className="w-9 h-9" />
            <span className="text-lg font-bold hidden sm:inline"><span className="text-primary">Render</span><span className="text-foreground">Byte</span></span>
          </Link>

          <div className="hidden md:flex items-center bg-secondary/50 rounded-full px-1 py-1 border border-white/5">
            <Link to="/" className="px-5 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-full">Home</Link>
            <Link to="/services" className="px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full">Services</Link>
            <div ref={moreRef} className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center gap-1 px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                More <ChevronDown size={14} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-secondary border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                  <Link to="/about" className="flex items-center gap-2.5 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"><Info size={15} /> About Us</Link>
                  <Link to="/support" className="flex items-center gap-2.5 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"><Headset size={15} /> Support</Link>
                  <Link to="/tos" className="flex items-center gap-2.5 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"><FileText size={15} /> Terms of Service</Link>
                  <Link to="/privacy" className="flex items-center gap-2.5 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"><ShieldCheck size={15} /> Privacy Policy</Link>
                  <Link to="/refund" className="flex items-center gap-2.5 px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"><ReceiptText size={15} /> Refund Policy</Link>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              Discord
            </a>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-white/5 px-4 py-4 space-y-3">
          <Link to="/" className="block text-foreground font-medium py-2">Home</Link>
          <Link to="/services" className="block text-muted-foreground font-medium py-2">Services</Link>
          <Link to="/about" className="block text-muted-foreground font-medium py-2">About Us</Link>
          <Link to="/support" className="block text-muted-foreground font-medium py-2">Support</Link>
          <Link to="/tos" className="block text-muted-foreground font-medium py-2">Terms of Service</Link>
          <Link to="/privacy" className="block text-muted-foreground font-medium py-2">Privacy Policy</Link>
          <Link to="/refund" className="block text-muted-foreground font-medium py-2">Refund Policy</Link>
          <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold mt-2 text-center">Discord</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
