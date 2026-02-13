import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
            <span className="text-foreground font-bold text-lg hidden sm:inline">RenderByte</span>
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
                  <Link to="/about" className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">About Us</Link>
                  <Link to="/support" className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">Support</Link>
                  <Link to="/tos" className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">Terms of Service</Link>
                  <Link to="/privacy" className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">Privacy Policy</Link>
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
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
          <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold mt-2 text-center">Discord</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
