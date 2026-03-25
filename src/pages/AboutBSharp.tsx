import { Link } from "react-router-dom";
import { Phone, Award, Music, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Venues from "@/components/Venues";
import aboutHero from "@/assets/about-hero.jpg";
import aboutBrendan from "@/assets/about-brendan.jpg";

const AboutBSharp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow="About"
        title="Meet"
        titleAccent="Brendan Lafferty"
        description="Owner of B-Sharp Entertainment — Rhode Island & Southern New England's premier wedding DJ and event entertainer."
        image={aboutHero}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                <img
                  src={aboutBrendan}
                  alt="Brendan Lafferty - B-Sharp Entertainment"
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border-2 border-primary/20 -z-10" />
            </div>

            <div>
              <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                The Man Behind the Music
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
                Positive and{" "}
                <span className="text-gradient italic">Professional</span>
              </h2>
              <div className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                <p>
                  For me, it's seeing a couple in the moment of that first dance,
                  surrounded by their family, friends, and love. It's magical, and I
                  make sure it happens organically.
                </p>
                <p>
                  I love what I do and the couples that I get to work for, each and
                  every weekend. I take fun seriously, and rest assured, I'll make a
                  great first impression with your guests.
                </p>
                <p>
                  It's about reading the crowd and bringing the energy to the
                  dancefloor — every song has to be better than the one you just
                  heard. And the one you just heard was already great.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-gradient">500+</p>
                  <p className="text-muted-foreground font-body text-sm mt-1">Events</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-gradient">15+</p>
                  <p className="text-muted-foreground font-body text-sm mt-1">Years</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-display text-3xl font-bold text-gradient">5★</p>
                  <p className="text-muted-foreground font-body text-sm mt-1">Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-balance">
              More Than Just a{" "}
              <span className="text-gradient italic">Wedding DJ</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Music,
                title: "DJ & MC Services",
                description: "Award-winning DJ services for weddings, corporate events, sweet 16s, fundraisers, and more.",
                link: "/weddings",
              },
              {
                icon: Award,
                title: "Photo Booths",
                description: "Premium photo booth experience with props, custom prints, and instant digital sharing.",
                link: "/photo-booths",
              },
              {
                icon: Heart,
                title: "Live Piano",
                description: "Elegant live piano music for cocktail hours and ceremonies — a sophisticated touch.",
                link: "/contact",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="block p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 h-full"
              >
                <item.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-3 text-balance">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Venues />

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Let's Create Something{" "}
            <span className="text-gradient italic">Amazing</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10">
            Ready to start planning? I'd love to hear about your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:508-822-4545"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              508-822-4545
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-foreground/20 text-foreground font-body font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              Check Your Date
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutBSharp;
