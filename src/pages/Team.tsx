import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Award, Globe, Scale, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import teamMeeting from "@/assets/team-meeting.jpg";
import tshiamoRantao from "@/assets/tshiamo-rantao.jpg";

const credentials = [
  { icon: Globe, title: "CAS Arbitrator", description: "Court of Arbitration for Sport, Switzerland" },
  { icon: Award, title: "Chairperson", description: "Ticano SME Finance" },
  { icon: Scale, title: "Specialist", description: "Constitutional Law Practice" },
];

const teamMembers = [
  { name: "Pego Molokwe", title: "Associate Attorney" },
  { name: "Katlego Moeng", title: "Legal Associate" },
  { name: "Boipelo Dube", title: "Paralegal" },
  { name: "Onalenna Keabetswe", title: "Legal Secretary" },
];

const Team = () => {
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
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Our People</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-6">
              The <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced legal professionals dedicated to delivering excellence in every case. 
              Our team combines deep expertise with a client-focused approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Managing Attorney */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Managing <span className="text-primary">Attorney</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-[20px] overflow-hidden shadow-subtle"
            >
              <div className="grid md:grid-cols-[1fr_1.5fr]">
                <div className="bg-charcoal p-10 flex flex-col justify-center items-center text-center">
                  <img 
                    src={tshiamoRantao} 
                    alt="Tshiamo Rantao - Managing Attorney"
                    className="w-32 h-32 rounded-full object-cover object-top mb-6 border-4 border-primary/30"
                  />
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    Tshiamo Rantao
                  </h3>
                  <p className="text-white/70 text-sm mb-6">Managing Attorney</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                      Constitutional Law
                    </span>
                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                      Sports Law
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Tshiamo Rantao is the Managing Attorney at Rantao Attorneys, bringing extensive 
                    experience in constitutional law, commercial litigation, and sports law to the firm. 
                    He is distinguished as the first Motswana to serve as an Arbitrator for the Court 
                    of Arbitration for Sport (CAS) in Switzerland, marking a significant milestone for 
                    Botswana's legal profession.
                  </p>
                  <div className="space-y-4">
                    {credentials.map((cred, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-[20px] flex items-center justify-center flex-shrink-0">
                          <cred.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal">{cred.title}</h4>
                          <p className="text-sm text-muted-foreground">{cred.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="section-padding bg-off-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Legal <span className="text-primary">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Skilled and dedicated professionals working collaboratively to deliver the highest quality of legal representation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-[20px] p-6 text-center shadow-subtle card-hover hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-charcoal text-sm md:text-base">{member.name}</h3>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">{member.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our legal team is composed of skilled and dedicated attorneys, each bringing unique 
                expertise to serve our clients' diverse needs. We work collaboratively to ensure that 
                every client receives focused attention and the highest quality of legal representation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From constitutional matters to commercial transactions, our team maintains a commitment 
                to excellence, continuous learning, and ethical practice in all aspects of legal service.
              </p>
              <Button variant="crimson" asChild>
                <Link to="/contact">
                  Work With Us
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={teamMeeting}
                alt="Rantao Attorneys Team Meeting"
                className="rounded-[20px] shadow-strong w-full"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                Collaborative Legal Strategy in Action
              </p>
            </motion.div>
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
              Ready to Get Started?
            </h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto">
              Our team is ready to assist you with your legal matters.
            </p>
            <Button variant="crimson" size="lg" asChild>
              <Link to="/contact">
                Contact Us Today
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

export default Team;
