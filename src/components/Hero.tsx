import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[48rem] h-[100svh] flex items-center justify-center overflow-x-clip overflow-y-hidden">
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 md:pt-32 pb-20">
        <p className="text-primary font-body text-[10px] md:text-base font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6">
          Rhode Island & Southern New England
        </p>

        <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] mb-6 md:mb-8 pb-1 md:pb-2 text-balance">
          The Premier{" "}
          <span className="text-gradient italic">Wedding DJ</span>
        </h1>

        <blockquote className="max-w-2xl mx-auto text-foreground/80 font-body text-base md:text-xl italic leading-relaxed mb-4 text-balance">
          "It's seeing a couple in the moment of that first dance, surrounded by
          their family, friends, and love. It's magical, and I make sure it
          happens organically."
        </blockquote>

        <p className="text-foreground/60 font-body text-xs md:text-sm tracking-widest uppercase">
          — Brendan Lafferty
        </p>

        <div className="mt-10 flex flex-row gap-3 justify-center">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
          >
            Check Your Date
          </Link>
          <Link
            to="/weddings"
            className="px-6 py-3 rounded-full border border-foreground/20 text-foreground font-body font-semibold text-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            View Services
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2 animate-bounce">
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
