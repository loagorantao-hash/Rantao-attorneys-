import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scale, Briefcase, Building2, FileText, Home, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const services = [
  {
    icon: Landmark,
    title: "Constitutional & Administrative Law",
    description: "Expertise in judicial reviews, government litigation, and public law compliance. We represent clients in matters involving constitutional rights, administrative decisions, and government accountability.",
    features: ["Judicial review applications", "Constitutional litigation", "Public law compliance advisory", "Government contract disputes"],
  },
  {
    icon: Briefcase,
    title: "Labour & Employment Law",
    description: "Comprehensive representation in the Industrial Court, disciplinary hearings, and employment contract matters. We protect both employer and employee rights with precision.",
    features: ["Industrial Court representation", "Disciplinary hearing defense", "Employment contract drafting", "Workplace dispute resolution"],
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    description: "High-court representation for complex disputes, liquidations, and debt recovery. Our litigation team handles cases with strategic precision and thorough preparation.",
    features: ["High Court representation", "Complex dispute resolution", "Liquidation proceedings", "Appeals and reviews"],
  },
  {
    icon: Building2,
    title: "Commercial & Advisory",
    description: "Corporate governance, procurement law, and regulatory advice for businesses of all sizes. We help organizations navigate complex commercial landscapes.",
    features: ["Corporate governance", "Procurement law advisory", "Regulatory compliance", "Commercial contract review"],
  },
  {
    icon: Home,
    title: "Conveyancing",
    description: "Property transfers, bond registrations, and sectional titles. We ensure smooth and legally compliant property transactions for our clients.",
    features: ["Property transfers", "Bond registrations", "Sectional title registrations", "Property due diligence"],
  },
  {
    icon: FileText,
    title: "Debt Collection",
    description: "Lawful and professional recovery of outstanding liabilities. We employ ethical and effective strategies to recover debts while maintaining professional relationships.",
    features: ["Commercial debt recovery", "Legal demand letters", "Litigation for recovery", "Judgment enforcement"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-off-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Our Practice Areas</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Legal <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technical expertise across multiple legal disciplines, delivering precise and effective 
              legal solutions for individuals and organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-[20px] overflow-hidden shadow-subtle card-hover hover:border-primary/30"
              >
                <div className="grid md:grid-cols-[auto_1fr] gap-0">
                  <div className="bg-primary/5 p-8 md:p-12 flex items-center justify-center md:w-48">
                    <div className="w-20 h-20 bg-primary/10 rounded-[20px] flex items-center justify-center">
                      <service.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Need Legal Assistance?
            </h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto">
              Contact us today to discuss your legal needs with our experienced team.
            </p>
            <Button variant="crimson" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
