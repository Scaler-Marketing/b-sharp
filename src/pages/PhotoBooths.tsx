import { Link } from "react-router-dom";
import { Phone, Camera, Share2, Printer, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import photoboothHero from "@/assets/photobooth-hero.jpg";
import photoboothImg from "@/assets/service-photobooth.jpg";

const features = [
  {
    icon: Camera,
    title: "High-Quality Photos",
    description: "Professional-grade camera and lighting for stunning photos every time — no blurry or dark shots.",
  },
  {
    icon: Printer,
    title: "Instant Prints",
    description: "Custom-branded print strips ready in seconds. Your guests take home a keepsake from your special night.",
  },
  {
    icon: Share2,
    title: "Digital Sharing",
    description: "Guests can instantly share photos via text or email. A digital gallery is also available after the event.",
  },
  {
    icon: Sparkles,
    title: "Fun Props & Backdrops",
    description: "A curated collection of props and customizable backdrops to match your event's theme and style.",
  },
];

const PhotoBooths = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow="B-Sharp Entertainment"
        title="Photo Booth"
        titleAccent="Experience"
        description="Add unforgettable fun to your event with a premium photo booth — your guests will love it."
        image={photoboothHero}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src={photoboothImg}
                alt="Photo booth fun at wedding"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                A Hit at Every Event
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
                More Than Just{" "}
                <span className="text-gradient italic">a Photo Booth</span>
              </h2>
              <div className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                <p>
                  Our premium photo booth experience is the perfect addition to any wedding,
                  corporate event, or party. With a sleek modern design, ring light, and
                  professional-grade camera, every shot looks amazing.
                </p>
                <p>
                  Custom print templates, a curated prop collection, and instant digital
                  sharing make it easy for guests to capture and share their favorite moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-balance">
              What's <span className="text-gradient italic">Included</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-3 text-balance">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Add a Photo Booth to{" "}
            <span className="text-gradient italic">Your Event</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10">
            Bundle with DJ services or book standalone — either way, it's a guaranteed hit.
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
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhotoBooths;
