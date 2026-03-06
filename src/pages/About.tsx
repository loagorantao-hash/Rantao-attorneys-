import { motion } from "framer-motion";
import { Shield, Users, BookOpen, Scale, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import teamMeeting from "@/assets/team-meeting.jpg";

const values = [
  { icon: Shield, title: "Professionalism", description: "We maintain the highest standards in everything we do." },
  { icon: Scale, title: "Integrity", description: "Honesty and transparency guide all our actions." },
  { icon: Users, title: "Client-Focus", description: "Every decision prioritizes the best interest of our clients." },
  { icon: BookOpen, title: "Confidentiality", description: "A trusted partner for sensitive legal matters." },
];

const differentiators = [
  "Experienced legal professionals with specialized expertise",
  "Commitment to continuous learning and professional development",
  "Strict adherence to ethical practice and professional standards",
  "Collaborative approach ensuring comprehensive legal solutions",
  "Track record of successful outcomes in complex cases",
];

const About = () => {
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
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">About Us</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              Who We <span className="text-primary">Are</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rantao Attorneys is a Botswana-based law firm committed to delivering high-quality legal services. 
              Our approach is built on strong legal knowledge, ethical practice, and clear communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Built on Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We understand that legal challenges can be complex and stressful. That's why we work closely 
                  with each client, offering tailored legal solutions that are practical, effective, and focused 
                  on achieving the best possible outcomes.
                </p>
                <p>
                  Whether you are an individual navigating a personal legal issue or a business seeking reliable 
                  legal counsel, we are here to assist with professionalism and dedication.
                </p>
                <p>
                  Our firm is proudly home to the first Motswana Arbitrator for the Court of Arbitration for 
                  Sport (CAS), reflecting our commitment to excellence and international recognition in legal practice.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={teamMeeting}
                alt="Rantao Attorneys Team in Boardroom"
                className="rounded-[20px] shadow-strong w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-[20px] shadow-medium hidden md:block">
                <p className="font-serif text-2xl font-bold">10+</p>
                <p className="text-sm text-white/80">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Core <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our practice and define our commitment to clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-[20px] text-center shadow-subtle card-hover border border-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-6">
                What Sets Us <span className="text-primary">Apart</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our commitment to excellence goes beyond standard legal practice. We combine deep expertise 
                with a client-centered approach to deliver results that matter.
              </p>
              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-charcoal p-10 rounded-[20px] text-white"
            >
              <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                To provide exceptional legal services that protect our clients' interests, uphold justice, 
                and contribute to the advancement of law in Botswana and beyond.
              </p>
              <div className="border-t border-white/20 pt-6">
                <h3 className="font-serif text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  To be recognized as a leading law firm in Botswana, known for excellence, integrity, 
                  and innovative legal solutions that make a meaningful difference.
                </p>
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

export default About;
