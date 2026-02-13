import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-muted-foreground italic mb-10">Last Updated: February 2025</p>

            <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
              <p>
                Please read these Terms of Service ("Terms") carefully before using the services operated by RenderByte ("us", "we", or "our").
              </p>
              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. By accessing or using the Service you agree to be bound by these Terms.
              </p>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">1. Services</h2>
                <p>
                  RenderByte provides game server hosting, bot hosting, VPS hosting, and related cloud infrastructure services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">2. Acceptable Use Policy</h2>
                <p>
                  You agree not to use the Service for any unlawful purpose. Prohibited activities include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>Distributed Denial of Service (DDoS) attacks</li>
                  <li>Hosting or distributing malware, phishing sites, or malicious content</li>
                  <li>Resource abuse (e.g., cryptocurrency mining) that impacts shared infrastructure</li>
                  <li>Violation of intellectual property rights</li>
                  <li>Storing or distributing illegal or adult content</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">3. Accounts</h2>
                <p>
                  When you create an account with us, you must provide accurate information. You are responsible for safeguarding your password and for any activities under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">4. Payments and Refunds</h2>
                <p>
                  All services are billed on a recurring basis unless otherwise specified. Payments are due in advance. We offer a 48-hour refund policy for new customers on their first service order.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">5. Termination</h2>
                <p>
                  We may terminate or suspend your account immediately for breach of these Terms. Upon termination, your right to use the Service will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
                <p>
                  In no event shall RenderByte be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-3">Contact Us</h2>
                <p>
                  If you have questions about these Terms, contact us at{" "}
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

export default TermsOfService;
