import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-subtle">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand Mark */}
          <Link to="/" className="flex items-center gap-2.5 md:gap-4 flex-shrink-0">
            {/* Red square — smaller on mobile */}
            <div className="relative bg-[#be1e2d] text-white font-serif w-10 h-10 md:w-14 md:h-14 shadow-sm overflow-hidden flex-shrink-0" aria-hidden="true">
              <span className="absolute top-0 left-0.5 text-[32px] md:text-[44px] leading-none">R</span>
              <span className="absolute bottom-0 right-0.5 text-[32px] md:text-[44px] leading-none">A</span>
            </div>
            {/* Text — smaller on mobile */}
            <div className="flex flex-col">
              <span className="font-serif text-[#be1e2d] text-lg md:text-2xl tracking-[0.2em] uppercase leading-none">RANTAO</span>
              <div className="w-full h-[1px] bg-border my-1"></div>
              <span className="font-serif text-[8px] md:text-[10px] text-muted-foreground tracking-[0.4em] uppercase text-center w-full block">ATTORNEYS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">

            <Button variant="crimson" size="sm" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden bg-background border-t border-border"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block py-3 px-4 text-base font-medium transition-colors ${location.pathname === link.href
                      ? "text-primary bg-muted"
                      : "text-foreground hover:bg-muted"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-4 pt-4 border-t border-border">
                  <Button variant="crimson" className="w-full" asChild>
                    <Link to="/contact">Request Consultation</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
