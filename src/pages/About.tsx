import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl sm:text-6xl font-bold mb-8">
              About <span className="text-primary">RenderByte</span>
            </h1>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                RenderByte is a newly established web hosting provider founded in 2025. The company is led by an experienced industry veteran who previously operated a successful hosting business. With a team of skilled professionals, RenderByte aims to leverage this prior expertise to deliver reliable and trustworthy hosting services to the community.
              </p>
              <p>
                While RenderByte may be a relatively new name in the market, the founder's extensive background in the web hosting industry provides a solid foundation for the company's operations. The team is committed to providing top-notch services and building a reputation as a reliable and customer-focused hosting provider.
              </p>
              <p>
                Despite the lack of a long-standing history, the founders of RenderByte are excited about the opportunity to rebuild and expand their web hosting business. With a focus on quality, innovation, and customer satisfaction, the company is poised to quickly establish itself as a trusted partner for individuals and businesses seeking reliable hosting solutions.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Company Details</h2>
              <p className="text-muted-foreground">
                RenderByte is registered as a private limited company.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For any inquiries or support, you can reach us at:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href="mailto:support@renderbyte.com" className="text-primary hover:underline">
                    support@renderbyte.com
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Discord:</strong>{" "}
                  <a href="https://discord.gg/renderbyte" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Join our Server
                  </a>
                </li>
              </ul>
              <p className="text-muted-foreground mt-6">
                We look forward to the opportunity to serve you and demonstrate our commitment to providing high-quality hosting services.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
