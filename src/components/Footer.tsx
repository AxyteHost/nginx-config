import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/images/logo.png" alt="RenderByte" className="w-9 h-9 rounded" />
              <span className="text-lg font-bold"><span className="text-primary">Render</span><span className="text-foreground">Byte</span></span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Premium hosting solutions for Discord bots, game servers, and VPS. Lightning-fast and reliable.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://discord.gg/renderbyte" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>
              </a>
              <a href="https://youtube.com/@renderbytetech?si=YG9ZSRcL8T_s2BHe" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/minecraft" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Minecraft Hosting</Link></li>
              <li><Link to="/services/discord" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Discord Bot Hosting</Link></li>
              <li><Link to="/services/hytale" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Hytale Hosting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About Us</Link></li>
              <li><Link to="/support" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Support</Link></li>
              <li><a href="https://renderbyte.site/billing/index.php" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Client Area</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/tos" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Refund Policy</Link></li>
            </ul>
            <div className="mt-6 space-y-1">
              <p className="text-muted-foreground text-xs">📍 Mahadev Nagar Duttawadi,</p>
              <p className="text-muted-foreground text-xs">Nagpur 440023</p>
              <p className="text-muted-foreground text-xs mt-1">📞 <a href="tel:+919022889115" className="hover:text-primary transition-colors">+91 9022889115</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© 2025 RenderByte. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</Link>
            <Link to="/tos" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</Link>
            <Link to="/refund" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
