import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, Globe, Scale, User, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import teamMeeting from "@/assets/team-meeting.jpg";
import tshiamoRantao from "@/assets/tshiamo-rantao.jpg";
import { teamMemberData } from "./TeamMemberDetail";

const credentials = [
  { icon: Globe, title: "CAS Arbitrator", description: "Court of Arbitration for Sport, Switzerland" },
  { icon: Award, title: "Chairperson", description: "Ticano SME Finance" },
  { icon: Scale, title: "Specialist", description: "Constitutional Law Practice" },
];

const teamMembers = [
  { slug: "pego-molokwe", ...teamMemberData["pego-molokwe"] },
  { slug: "katlego-moeng", ...teamMemberData["katlego-moeng"] },
  { slug: "boipelo-dube", ...teamMemberData["boipelo-dube"] },
  { slug: "onalenna-keabetswe", ...teamMemberData["onalenna-keabetswe"] },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Team | Rantao Attorneys</title>
        <meta name="description" content="Meet the experienced legal professionals at Rantao Attorneys. Our team is dedicated to delivering excellence in every case." />
      </Helmet>
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
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-[24px] overflow-hidden shadow-subtle group relative"
            >
              <div className="grid md:grid-cols-[1fr_1.5fr]">
                {/* Left Panel */}
                <div className="bg-charcoal p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                  
                  <Link to="/team/tshiamo-rantao" className="relative z-10 block mb-6 transform transition-transform duration-500 group-hover:scale-105">
                    <img 
                      src={tshiamoRantao} 
                      alt="Tshiamo Rantao - Managing Attorney"
                      className="w-40 h-40 rounded-full object-cover object-top border-4 border-primary/30 shadow-lg"
                    />
                  </Link>
                  
                  <Link to="/team/tshiamo-rantao" className="relative z-10 block">
                    <h3 className="font-serif text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      Tshiamo Rantao
                    </h3>
                  </Link>
                  <p className="text-white/70 text-sm mb-6 relative z-10">Managing Attorney</p>
                  
                  <div className="flex flex-wrap justify-center gap-2 mb-8 relative z-10">
                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full font-medium">
                      Constitutional Law
                    </span>
                    <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full font-medium">
                      Sports Law
                    </span>
                  </div>

                  <div className="flex gap-4 relative z-10 mt-auto">
                    <a href="https://www.linkedin.com/in/tshiamo-rantao-3ba6b1209/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="mailto:tshiamo@rantaoattorneys.co.bw" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Right Panel */}
                <div className="p-10 flex flex-col justify-center">
                  <h4 className="font-serif text-2xl font-bold text-charcoal mb-4">Professional Overview</h4>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Tshiamo Rantao is the Managing Attorney at Rantao Attorneys, bringing extensive 
                    experience in constitutional law, commercial litigation, and sports law to the firm. 
                    He is distinguished as the first Motswana to serve as an Arbitrator for the Court 
                    of Arbitration for Sport (CAS) in Switzerland, marking a significant milestone for 
                    Botswana's legal profession.
                  </p>
                  <div className="space-y-6 mb-8">
                    {credentials.map((cred, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-[16px] flex items-center justify-center flex-shrink-0">
                          <cred.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal">{cred.title}</h4>
                          <p className="text-sm text-muted-foreground">{cred.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-border">
                    <Link to="/team/tshiamo-rantao" className="inline-flex items-center text-primary font-medium group/link">
                      View Full Profile
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
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
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Our Legal <span className="text-primary">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Skilled and dedicated professionals working collaboratively to deliver the highest quality of legal representation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 group relative">
                  <Link to={`/team/${member.slug}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View {member.name}'s profile</span>
                  </Link>

                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors border-2 border-transparent group-hover:border-primary/20">
                    <User className="h-10 w-10 text-primary/70" />
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-charcoal mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground font-medium text-sm mb-6 flex-grow">
                    {member.title}
                  </p>

                  {/* Social links (z-20 to be clickable above the absolute Link wrapper) */}
                  <div className="flex justify-center gap-3 relative z-20 pt-6 border-t border-border mt-auto">
                    {member.linkedin ? (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground/40 cursor-not-allowed">
                        <Linkedin className="h-4 w-4" />
                      </div>
                    )}
                    
                    {member.email ? (
                      <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                        <Mail className="h-4 w-4" />
                      </a>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground/40 cursor-not-allowed">
                        <Mail className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-charcoal mb-6">Our Collaborative Approach</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Our legal team is composed of skilled and dedicated attorneys, each bringing unique 
                expertise to serve our clients' diverse needs. We work collaboratively to ensure that 
                every client receives focused attention and the highest quality of legal representation.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                From constitutional matters to commercial transactions, our team maintains a commitment 
                to excellence, continuous learning, and ethical practice in all aspects of legal service.
              </p>
              <Button variant="crimson" size="lg" asChild>
                <Link to="/contact">
                  Work With Us
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/5 rounded-[24px] transform -rotate-2" />
              <img
                src={teamMeeting}
                alt="Rantao Attorneys Team Meeting"
                className="relative rounded-[20px] shadow-2xl w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
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
              Need Legal Assistance?
            </h2>
            <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg">
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

export default Team;
