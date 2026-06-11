import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white/90">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              {/* Red square icon with overlapping R & A */}
              <div className="relative bg-[#be1e2d] text-white font-serif w-11 h-11 flex-shrink-0 overflow-hidden">
                <span className="absolute top-0 left-0.5 text-[36px] leading-none">R</span>
                <span className="absolute bottom-0 right-0.5 text-[36px] leading-none">A</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[#be1e2d] text-xl tracking-[0.2em] uppercase leading-none">RANTAO</span>
                <div className="w-full h-[1px] bg-white/20 my-1"></div>
                <span className="font-serif text-[9px] text-white/60 tracking-[0.45em] uppercase text-center w-full block">ATTORNEYS</span>
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
