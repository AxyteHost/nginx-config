import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-muted-foreground italic mb-10">Last Updated: February 2025</p>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p>
                RenderByte ("us", "we", or "our") operates the renderbyte.com website and provides hosting services (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. Information Collection and Use</h2>
                <p className="mb-3">We collect several types of information to provide and improve our Service:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Personal Data:</strong> Email address, name, and billing information.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> IP address, browser type, pages visited, and diagnostic data.</li>
                  <li><strong className="text-foreground">Service Data:</strong> Data stored on our services, accessed only for support or compliance.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Use of Data</h2>
                <p className="mb-3">RenderByte uses collected data for:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>To provide and maintain the Service</li>
                  <li>To notify you about changes</li>
                  <li>To provide customer support</li>
                  <li>To monitor usage</li>
                  <li>To detect and address technical issues</li>
                  <li>To process payments and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. Disclosure of Data</h2>
                <p className="mb-3">
                  RenderByte will not sell or rent your personal data. We will only disclose data when necessary to:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Comply with a legal obligation</li>
                  <li>Protect rights or property of RenderByte</li>
                  <li>Prevent or investigate wrongdoing</li>
                  <li>Protect personal safety of users or the public</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. Security of Data</h2>
                <p>
                  The security of your data is important to us. While we strive to use commercially acceptable means to protect your data, no method of transmission is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">5. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of changes by posting the new policy on this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Contact Us</h2>
                <p>
                  Questions about this Privacy Policy? Contact us at{" "}
                  <a href="mailto:support@renderbyte.com" className="text-primary hover:underline">support@renderbyte.com</a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
