import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Scale, Briefcase, Building2, FileText, Home, Landmark, Calendar, Award, Globe, Shield, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  { icon: Landmark, title: "Constitutional Law", description: "Judicial reviews & public law compliance" },
  { icon: Briefcase, title: "Labour Law", description: "Industrial Court representation" },
  { icon: Scale, title: "Civil Litigation", description: "High-court dispute resolution" },
  { icon: Building2, title: "Commercial Law", description: "Corporate governance & advisory" },
  { icon: Home, title: "Conveyancing", description: "Property transfers & registrations" },
  { icon: FileText, title: "Debt Collection", description: "Professional liability recovery" },
];

const whyChooseUs = [
  { icon: Globe, title: "First Motswana CAS Arbitrator", description: "International recognition through the Court of Arbitration for Sport in Switzerland." },
  { icon: Users, title: "Client-Centered Approach", description: "Personalised legal strategies tailored to each client's unique circumstances." },
  { icon: Shield, title: "Ethical & Transparent Practice", description: "Upholding the highest standards of integrity and professional conduct." },
  { icon: Award, title: "Proven Track Record", description: "Consistently delivering successful outcomes across diverse legal disciplines." },
  { icon: CheckCircle, title: "Comprehensive Legal Solutions", description: "Full-spectrum legal services from litigation to advisory under one roof." },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroBg}
            alt="Rantao Attorneys Office"
            className="w-full h-full object-cover blur-[5px] scale-105"
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>

        <div className="relative z-10 container-wide text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Strategic Legal<br />
              <span className="text-primary">Representation</span> & Advisory
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Specializing in Constitutional, Administrative, and Commercial Jurisprudence. 
              Delivering excellence in legal practice from Gaborone, Botswana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request Consultation
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://wa.me/26771962581" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Credibility Bar */}
      <section className="bg-charcoal py-4">
        <div className="container-wide">
          <p className="text-center text-white/80 text-sm md:text-base font-medium tracking-wide">
            Home of the first Motswana Arbitrator for the Court of Arbitration for Sport (CAS) • Based in Gaborone CBD
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Legal <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services tailored to meet your unique needs with precision and professionalism.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group bg-card p-8 rounded-[20px] shadow-subtle card-hover border border-border hover:border-primary/20 flex flex-col h-full text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-[20px] flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-charcoal">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6 flex-1">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <Button variant="outline" size="sm" asChild className="hover:border-primary hover:text-primary">
                    <Link to="/services">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-14"
          >
            <Button variant="crimson" size="lg" asChild>
              <Link to="/services">
                View All Services
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-4">
              Why Choose <span className="text-primary">Rantao Attorneys</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A commitment to excellence, integrity, and results that sets us apart.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-card border border-border rounded-[20px] p-8 shadow-subtle card-hover hover:border-primary/20 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-[20px] flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-14"
          >
            <Button variant="crimson" size="lg" asChild>
              <Link to="/contact">
                Schedule a Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal py-24">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discuss Your Legal Matters?
            </h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto">
              Get in touch with our experienced team for professional legal advice and representation.
            </p>
            <Button variant="crimson" size="lg" asChild>
              <Link to="/contact">
                Schedule a Consultation
                <Calendar className="ml-2 h-5 w-5" />
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

export default Index;
