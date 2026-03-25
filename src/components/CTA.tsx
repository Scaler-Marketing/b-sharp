import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            2027 Dates Selling Quickly
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Everyone's Going to Have a{" "}
            <span className="text-gradient italic">Great Time</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-10">
            I'll be focused on your music and wedding reception experience,
            building the energy for one epic event. Let's make your celebration
            unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:508-822-4545"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-base hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              508-822-4545
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-foreground/20 text-foreground font-body font-semibold text-base hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Check Your Date
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
