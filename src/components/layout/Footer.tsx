import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white/90">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center border-2 border-primary text-primary font-serif font-bold text-lg w-10 h-10 rounded-[3px]">
                RA
              </span>
              <div className="flex flex-col leading-tight">
                <span className="font-serif font-bold text-white text-base tracking-wide uppercase">RANTAO</span>
                <span className="font-serif text-xs text-white/60 tracking-wider uppercase">Attorneys</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Strategic legal representation and advisory services. Specializing in Constitutional, Administrative, and Commercial Jurisprudence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Legal Services", "Our Team", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(" ", "-").replace("legal-", "").replace("our-", "")}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-3">
              {[
                { name: "Constitutional Law", slug: "constitutional-administrative-law" },
                { name: "Labour Law", slug: "labour-employment-law" },
                { name: "Civil Litigation", slug: "civil-litigation" },
                { name: "Commercial Law", slug: "commercial-law" },
                { name: "Conveyancing", slug: "property-conveyancing" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={`/services/${item.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — Reordered: Phone → Email → Facebook → Address */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+2673919262" className="text-sm text-white/70 hover:text-white transition-colors">
                  +267 391 9262
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@rantaoattorneys.co.bw" className="text-sm text-white/70 hover:text-white transition-colors">
                  info@rantaoattorneys.co.bw
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Facebook className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="https://www.facebook.com/profile.php?id=100057438369696" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  Rantao Attorneys
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70">
                  Plot 54374, Unit 3A, 1st Floor,<br />
                  Grand Union Buildings, CBD,<br />
                  Gaborone, Botswana
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Rantao Attorneys. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Home of the first Motswana Arbitrator for CAS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
