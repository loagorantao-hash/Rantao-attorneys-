import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Linkedin, Mail, User, GraduationCap, Briefcase, Award, Star, Scale as ScaleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import tshiamoRantao from "@/assets/tshiamo-rantao.jpg";

// Define the shape of team member data
interface TeamMember {
  name: string;
  title: string;
  image?: string;
  bio: string;
  expertise: string[];
  qualifications: string[];
  experience: string;
  achievements?: string[];
  cases?: string[];
  linkedin?: string;
  email?: string;
}

// Team member data mapping
export const teamMemberData: Record<string, TeamMember> = {
  "tshiamo-rantao": {
    name: "Tshiamo Rantao",
    title: "Managing Attorney",
    image: tshiamoRantao,
    bio: "Tshiamo Rantao is the Managing Attorney at Rantao Attorneys, bringing extensive experience in constitutional law, commercial litigation, and sports law to the firm. He is distinguished as the first Motswana to serve as an Arbitrator for the Court of Arbitration for Sport (CAS) in Lausanne, Switzerland, marking a significant milestone for Botswana's legal profession.\n\nOver 20 years of distinguished legal practice in Botswana, Rantao is one of the country's foremost human rights and constitutional lawyers whose cases and works are internationally acclaimed. He has successfully represented clients in high-profile cases throughout Botswana.",
    expertise: [
      "Constitutional Law: Foremost constitutional lawyer in Botswana, human rights litigation",
      "Commercial Litigation: Commercial disputes and contentious issues",
      "Sports Law: CAS Arbitrator, sports judicial structures expert",
      "Administrative Law: Administrative and procurement law expertise",
      "Labour Law: Labour law advisory and contentious matters",
      "Public Interest Litigation: Public interest cases and civil litigation",
      "Land Law: Land law advisory",
      "Procurement Law: Procurement law expertise",
      "Liquidations: Advising on liquidations"
    ],
    qualifications: [
      "LLB (Bachelor of Laws) – University of Botswana (1996–2001)",
      "LLM in Corporate Law – University of Pretoria"
    ],
    experience: "Over 20 years of distinguished legal practice in Botswana.",
    achievements: [
      "Arbitrator, Court of Arbitration for Sport (CAS) – Lausanne, Switzerland (June 2023–Present): First Motswana appointed to the world sport arbitration body (Three-year term)",
      "Chairperson of the Board – Ticano SME Finance (July 2021–Present)",
      "Member, Africa Zone VI Anti-Doping Panel (left 2021)",
      "Key Drafter of constitutions for: Botswana Football Association (BFA), Botswana National Sport Commission, Botswana National Olympic Committee",
      "Botswana Premier League Chief Prosecutor",
      "Chair, COSAFA Disciplinary Committee (vacated upon CAS appointment)",
      "Chair, BFA Arbitration Tribunal (vacated upon CAS appointment)",
      "Recognized by BFA as a well-known attorney with 'technical depth, ability, and sense of fairness' demonstrating a 'deep sense of duty coupled with a passion for volunteerism'"
    ],
    cases: [
      "LEGABIBO Case: Represented LEGABIBO in the landmark High Court case that decriminalized same-sex relations in Botswana (2019), supported by SALC",
      "State Appeal on Gay Sex Ruling: Defense lawyer in the Court of Appeal case where the state sought to overturn the 2019 decriminalization ruling; successfully argued constitutional rights to privacy",
      "Death Penalty Debate: Prominent speaker at 'The Big Debate: Is It Time for Botswana to Review Its Use of the Death Penalty?'"
    ],
    email: "tshiamo@rantaoattorneys.co.bw",
    linkedin: "https://www.linkedin.com/in/tshiamo-rantao-3ba6b1209/"
  },
  "pego-molokwe": {
    name: "Pego Molokwe",
    title: "Associate Attorney",
    bio: "Pego Molokwe is a dedicated Associate Attorney with a strong focus on civil litigation and commercial disputes. She brings a meticulous approach to legal research and case preparation.",
    expertise: ["Civil Litigation", "Commercial Law", "Debt Collection"],
    qualifications: ["LLB (University of Botswana)"],
    experience: "Proven track record in handling complex litigation matters and providing strategic legal advice to corporate clients.",
  },
  "katlego-moeng": {
    name: "Katlego Moeng",
    title: "Legal Associate",
    bio: "Katlego Moeng is a diligent Legal Associate specializing in labour law and general legal advisory. He works closely with clients to ensure comprehensive legal support and representation.",
    expertise: ["Labour & Employment Law", "General Advisory", "Dispute Resolution"],
    qualifications: ["LLB (University of Botswana)"],
    experience: "Experienced in representing clients in the Industrial Court and handling diverse employment matters.",
  },
  "boipelo-dube": {
    name: "Boipelo Dube",
    title: "Paralegal",
    bio: "Boipelo Dube provides invaluable support to the legal team as a Paralegal. She assists with case preparation, legal research, and ensures the smooth functioning of legal operations.",
    expertise: ["Legal Research", "Document Drafting", "Case Management"],
    qualifications: ["Diploma in Law"],
    experience: "Extensive experience in legal administration and paralegal support within high-paced law firms.",
  },
  "onalenna-keabetswe": {
    name: "Onalenna Keabetswe",
    title: "Legal Secretary",
    bio: "Onalenna Keabetswe is a highly organized Legal Secretary who ensures the efficient day-to-day operations of the firm. She plays a critical role in client communication and administrative management.",
    expertise: ["Legal Administration", "Client Relations", "Office Management"],
    qualifications: ["Certificate in Secretarial Studies"],
    experience: "Years of dedicated service in managing legal office environments and supporting attorney workflows.",
  }
};

const TeamMemberDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const member = slug && teamMemberData[slug] 
    ? teamMemberData[slug] 
    : {
        name: "Legal Professional",
        title: "Team Member",
        bio: "An experienced legal professional dedicated to delivering excellence.",
        expertise: ["Legal Advisory", "Representation"],
        qualifications: ["LLB"],
        experience: "Extensive experience in legal practice."
      };

  useEffect(() => {
    document.title = `${member.name} | Rantao Attorneys`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', member.bio.substring(0, 160));
    }
  }, [member]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 bg-off-white">
        <div className="container-wide">
          <Link 
            to="/team" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Our Team
          </Link>
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-subtle flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/3 bg-charcoal p-8 md:p-12 flex flex-col items-center justify-center text-center lg:sticky lg:top-0 h-fit">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full object-cover object-top mb-6 border-4 border-primary/30 shadow-lg"
                />
              ) : (
                <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center mb-6 border-4 border-primary/30 shadow-lg">
                  <User className="h-20 w-20 text-primary/50" />
                </div>
              )}
              
              <h1 className="font-serif text-3xl font-bold text-white mb-2">{member.name}</h1>
              <p className="text-primary font-medium text-lg mb-6">{member.title}</p>
              
              <div className="flex gap-4">
                {member.linkedin ? (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30 cursor-not-allowed">
                    <Linkedin className="h-5 w-5" />
                  </div>
                )}
                
                {member.email ? (
                  <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30 cursor-not-allowed">
                    <Mail className="h-5 w-5" />
                  </div>
                )}
              </div>
            </div>
            
            {/* Details Section */}
            <div className="lg:w-2/3 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">Biography</h2>
                {member.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4 text-lg">
                    {paragraph}
                  </p>
                ))}

                <div className="grid sm:grid-cols-2 gap-8 mt-10">
                  {/* Expertise */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="font-serif text-xl font-bold text-charcoal">Areas of Expertise</h3>
                    </div>
                    <ul className="space-y-3">
                      {member.expertise.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Qualifications */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="font-serif text-xl font-bold text-charcoal">Qualifications</h3>
                    </div>
                    <ul className="space-y-3">
                      {member.qualifications.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Achievements */}
                {member.achievements && member.achievements.length > 0 && (
                  <div className="mt-10 pt-10 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-5 w-5 text-primary" />
                      <h3 className="font-serif text-xl font-bold text-charcoal">Notable Achievements & Appointments</h3>
                    </div>
                    <ul className="space-y-3">
                      {member.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* High Profile Cases */}
                {member.cases && member.cases.length > 0 && (
                  <div className="mt-10 pt-10 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <ScaleIcon className="h-5 w-5 text-primary" />
                      <h3 className="font-serif text-xl font-bold text-charcoal">High-Profile Cases</h3>
                    </div>
                    <ul className="space-y-3">
                      {member.cases.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Experience */}
                {member.experience && !member.achievements && (
                  <div className="mt-10 pt-10 border-t border-border">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="h-5 w-5 text-primary" />
                      <h3 className="font-serif text-xl font-bold text-charcoal">Experience</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.experience}
                    </p>
                  </div>
                )}
                
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TeamMemberDetail;
