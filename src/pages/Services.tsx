import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Scale, 
  Briefcase, 
  Building2, 
  FileText, 
  Home, 
  Landmark, 
  FileSignature, 
  Users, 
  Coins, 
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const services = [
  {
    icon: Landmark,
    title: "Constitutional & Administrative Law",
    slug: "constitutional-administrative-law",
    description: "Expertise in judicial reviews, government litigation, and public law compliance.",
  },
  {
    icon: Briefcase,
    title: "Labour & Employment Law",
    slug: "labour-employment-law",
    description: "Comprehensive representation in the Industrial Court and employment disputes.",
  },
  {
    icon: Scale,
    title: "Civil Litigation",
    slug: "civil-litigation",
    description: "High-court representation for complex disputes and strategic litigation.",
  },
  {
    icon: Building2,
    title: "Commercial Law",
    slug: "commercial-law",
    description: "Corporate governance, procurement law, and regulatory advice for businesses.",
  },
  {
    icon: FileSignature,
    title: "Contract Law",
    slug: "contract-law",
    description: "Expert drafting, reviewing, and negotiation of all forms of legal agreements.",
  },
  {
    icon: Home,
    title: "Property & Conveyancing",
    slug: "property-conveyancing",
    description: "Property transfers, bond registrations, and smooth real estate transactions.",
  },
  {
    icon: Users,
    title: "Family Law",
    slug: "family-law",
    description: "Sensitive handling of divorce, custody matters, and matrimonial disputes.",
  },
  {
    icon: Coins,
    title: "Debt Collection & Recovery",
    slug: "debt-collection",
    description: "Lawful and professional recovery of outstanding commercial liabilities.",
  },
  {
    icon: TrendingUp,
    title: "Corporate Advisory",
    slug: "corporate-advisory",
    description: "Strategic legal advice for corporate entities, restructuring, and compliance.",
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
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Our Practice Areas
            </p>
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

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Link to={`/services/${service.slug}`} className="block h-full group">
                  <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 relative overflow-hidden">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary transition-colors duration-300" />
                    
                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h2 className="font-serif text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
                      {service.description}
                    </p>
                    
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-primary font-medium text-sm group-hover:underline underline-offset-4">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal py-24 text-center">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Legal Assistance?
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Contact us today to discuss your legal needs with our experienced team.
            </p>
            <Button variant="crimson" size="lg" className="rounded-full px-8 text-base" asChild>
              <Link to="/contact">
                Get In Touch
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
