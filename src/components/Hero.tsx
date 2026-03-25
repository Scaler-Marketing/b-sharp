import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="B-Sharp Entertainment wedding DJ performance"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-primary font-body text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-6"
        >
          Rhode Island & Southern New England
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-8"
        >
          The Premier{" "}
          <span className="text-gradient italic">Wedding DJ</span>
        </motion.h1>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-2xl mx-auto text-muted-foreground font-body text-lg md:text-xl italic leading-relaxed mb-4"
        >
          "It's seeing a couple in the moment of that first dance, surrounded by
          their family, friends, and love. It's magical, and I make sure it
          happens organically."
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-muted-foreground font-body text-sm tracking-widest uppercase"
        >
          — Brendan Lafferty
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:508-822-4545"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-base hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
          >
            Check Your Date
          </a>
          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-foreground/20 text-foreground font-body font-semibold text-base hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
