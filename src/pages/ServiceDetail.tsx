import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

// Service details mapping
const serviceDetails: Record<string, { title: string; description: string; features: string[] }> = {
  "constitutional-administrative-law": {
    title: "Constitutional & Administrative Law",
    description: "Expertise in judicial reviews, government litigation, and public law compliance. We represent clients in matters involving constitutional rights, administrative decisions, and government accountability.",
    features: ["Judicial review applications", "Constitutional litigation", "Public law compliance advisory", "Government contract disputes"],
  },
  "labour-employment-law": {
    title: "Labour & Employment Law",
    description: "Comprehensive representation in the Industrial Court, disciplinary hearings, and employment contract matters. We protect both employer and employee rights with precision.",
    features: ["Industrial Court representation", "Disciplinary hearing defense", "Employment contract drafting", "Workplace dispute resolution"],
  },
  "civil-litigation": {
    title: "Civil Litigation",
    description: "High-court representation for complex disputes, liquidations, and debt recovery. Our litigation team handles cases with strategic precision and thorough preparation.",
    features: ["High Court representation", "Complex dispute resolution", "Liquidation proceedings", "Appeals and reviews"],
  },
  "commercial-law": {
    title: "Commercial Law",
    description: "Corporate governance, procurement law, and regulatory advice for businesses of all sizes. We help organizations navigate complex commercial landscapes.",
    features: ["Corporate governance", "Procurement law advisory", "Regulatory compliance", "Commercial contract review"],
  },
  "contract-law": {
    title: "Contract Law",
    description: "Expert drafting, reviewing, and negotiation of all forms of contracts and agreements to protect your interests and ensure legal enforceability.",
    features: ["Contract drafting", "Agreement negotiation", "Breach of contract claims", "Partnership agreements"],
  },
  "property-conveyancing": {
    title: "Property & Conveyancing",
    description: "Property transfers, bond registrations, and sectional titles. We ensure smooth and legally compliant property transactions for our clients.",
    features: ["Property transfers", "Bond registrations", "Sectional title registrations", "Property due diligence"],
  },
  "family-law": {
    title: "Family Law",
    description: "Sensitive and confidential handling of divorce proceedings, child custody matters, maintenance, and matrimonial property disputes.",
    features: ["Divorce proceedings", "Child custody and access", "Maintenance claims", "Matrimonial property advice"],
  },
  "debt-collection": {
    title: "Debt Collection & Recovery",
    description: "Lawful and professional recovery of outstanding liabilities. We employ ethical and effective strategies to recover debts while maintaining professional relationships.",
    features: ["Commercial debt recovery", "Legal demand letters", "Litigation for recovery", "Judgment enforcement"],
  },
  "corporate-advisory": {
    title: "Corporate Advisory",
    description: "Strategic legal advice for corporate entities, including restructuring, mergers and acquisitions, and compliance with company legislation.",
    features: ["Corporate restructuring", "Mergers and acquisitions", "Company registration", "Statutory compliance"],
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Default fallback if slug is not found
  const service = slug && serviceDetails[slug] 
    ? serviceDetails[slug] 
    : {
        title: "Legal Service",
        description: "Comprehensive legal services tailored to meet your unique needs with precision and professionalism.",
        features: ["Expert representation", "Strategic advice", "Client-focused approach", "Effective resolution"]
      };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{service.title} | Rantao Attorneys</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-off-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Link 
              to="/services" 
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              {service.title}
            </h1>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-4xl">
            {/* Main Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal mb-4">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our dedicated team of professionals possesses deep knowledge and extensive experience in handling matters related to {service.title.toLowerCase()}. We understand that every case is unique and requires a tailored approach to achieve the best possible outcome for our clients.
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal mb-4">Key Focus Areas</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-card border border-border rounded-xl shadow-subtle">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
