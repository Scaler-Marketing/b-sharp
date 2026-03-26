import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.webp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceLinks = [
  { label: "Weddings", href: "/weddings" },
  { label: "Corporate Events", href: "/corporate-events" },
  { label: "Photo Booths", href: "/photo-booths" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "About B-Sharp", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isServiceActive = serviceLinks.some(
    (link) => location.pathname === link.href
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="B-Sharp Entertainment" className="h-10 w-10 rounded-full" />
          <span className="font-display text-2xl font-bold tracking-tight text-foreground whitespace-nowrap">
            B-Sharp<span className="text-gradient"> Entertainment</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-5">
          <Link
            to="/"
            className={`text-fluid-sm font-body font-medium transition-colors duration-300 tracking-wide uppercase whitespace-nowrap ${
              location.pathname === "/"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`text-fluid-sm font-body font-medium transition-colors duration-300 tracking-wide uppercase whitespace-nowrap ${
              location.pathname === "/about"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            About
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`inline-flex items-center gap-1 text-fluid-sm font-body font-medium transition-colors duration-300 tracking-wide uppercase whitespace-nowrap outline-none ${
                isServiceActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Services
              <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-background/95 backdrop-blur-xl border-border">
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <Link
                    to={link.href}
                    className={`w-full cursor-pointer font-body ${
                      location.pathname === link.href
                        ? "text-primary"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/gallery"
            className={`text-fluid-sm font-body font-medium transition-colors duration-300 tracking-wide uppercase whitespace-nowrap ${
              location.pathname === "/gallery"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Gallery
          </Link>

          <Link
            to="/testimonials"
            className={`text-fluid-sm font-body font-medium transition-colors duration-300 tracking-wide uppercase whitespace-nowrap ${
              location.pathname === "/testimonials"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Reviews
          </Link>


          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-body font-semibold text-fluid-sm hover:shadow-[var(--shadow-glow)] transition-all duration-300 whitespace-nowrap"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                <Link to="/" onClick={() => setIsOpen(false)} className={`text-lg font-body transition-colors ${location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  Home
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.05 }}>
                <span className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground/60">Services</span>
              </motion.div>

              {serviceLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: (i + 2) * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-body transition-colors pl-3 ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.05 }}>
                <Link to="/about" onClick={() => setIsOpen(false)} className={`text-lg font-body transition-colors ${location.pathname === "/about" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  About
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.3 }}>
                <Link to="/gallery" onClick={() => setIsOpen(false)} className={`text-lg font-body transition-colors ${location.pathname === "/gallery" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  Gallery
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.35 }}>
                <Link to="/testimonials" onClick={() => setIsOpen(false)} className={`text-lg font-body transition-colors ${location.pathname === "/testimonials" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  Reviews
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.4 }}>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm mt-2 whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" />
                  Check Your Date
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
