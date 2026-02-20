import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Refund &amp; Cancellation Policy</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: January 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Overview</h2>
              <p>
                All RenderByte services are digital and activated instantly after successful payment. Because services are provisioned immediately, refunds are strictly limited and handled according to this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Eligibility and Timeframe</h2>
              <p>
                Refunds are allowed only within 24 hours of purchase. To request a refund you must contact us at the listed contact email with your order details within 24 hours of the transaction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Non-Refundable Situations</h2>
              <p className="mb-3">No refunds will be given for:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Service abuse or violations of the Terms of Service</li>
                <li>DDoS attacks or activity facilitating illegal conduct</li>
                <li>Resource overuse caused by the customer</li>
                <li>Accounts suspended or terminated for policy violations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Non-Refundable Services</h2>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>VPS, Dedicated Servers, and Proxy services are non-refundable once provisioned</li>
                <li>Setup fees, add-ons, licenses, and domain registrations are non-refundable</li>
                <li>Renewal payments are non-refundable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Processing</h2>
              <p>
                Approved refunds will be processed to the original payment method within 5–7 business days. Processing times depend on the payment provider and bank.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Chargebacks and Disputes</h2>
              <p>
                If a chargeback or payment dispute is filed, RenderByte reserves the right to immediately suspend the service until the dispute is resolved. Abuse of chargebacks may result in permanent account suspension.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Denial of Refunds</h2>
              <p>
                RenderByte reserves the right to deny refund requests at its sole discretion where we reasonably determine the request does not meet policy criteria.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
              <p>
                To request a refund, contact us at{" "}
                <a href="mailto:renderbytetech@gmail.com" className="text-primary hover:underline">
                  renderbytetech@gmail.com
                </a>{" "}
                with your order details within 24 hours of purchase.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
