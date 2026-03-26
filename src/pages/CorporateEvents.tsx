import { Link } from "react-router-dom";
import { Phone, Music, Mic2, Users, Lightbulb, PartyPopper, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import corporateHero from "@/assets/corporate-hero.jpg";
import corporateImg from "@/assets/service-corporate.jpg";

const features = [
  {
    icon: Music,
    title: "Curated Music",
    description: "From background cocktail vibes to high-energy dance sets — I tailor the music to match the mood and goals of your event.",
  },
  {
    icon: Mic2,
    title: "Professional MC",
    description: "Polished emceeing for awards, speeches, and announcements — keeping your program on schedule and your audience engaged.",
  },
  {
    icon: Lightbulb,
    title: "Uplighting & Effects",
    description: "Transform any venue with customizable uplighting in your brand colors, dance floor lighting, and monogram projections.",
  },
  {
    icon: Users,
    title: "Team Building Energy",
    description: "Interactive music experiences, trivia, and crowd engagement activities that bring your team together on the dance floor.",
  },
  {
    icon: PartyPopper,
    title: "Holiday Parties",
    description: "Year-end celebrations, holiday galas, and company milestones deserve a soundtrack that gets everyone out of their seats.",
  },
  {
    icon: Building2,
    title: "Any Venue, Any Size",
    description: "From intimate board dinners to 500+ person galas — professional sound and lighting scaled to fit your space perfectly.",
  },
];

const CorporateEvents = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow="B-Sharp Entertainment"
        title="Corporate"
        titleAccent="Events"
        description="Professional, polished entertainment for galas, holiday parties, fundraisers, and corporate celebrations of all sizes."
        image={corporateHero}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Beyond the Playlist
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
                Entertainment That Elevates{" "}
                <span className="text-gradient italic">Your Brand</span>
              </h2>
              <div className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                <p>
                  Your corporate event is a reflection of your company — it should feel
                  polished, energized, and memorable. I bring the same attention to detail
                  and professionalism to every corporate event that I bring to weddings.
                </p>
                <p>
                  Whether it's a black-tie gala, a company holiday party, or a fundraiser,
                  I'll work with your planning team to create the perfect atmosphere —
                  from cocktail hour background music to a packed dance floor at the end of the night.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src={corporateImg}
                alt="Corporate event entertainment"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              What's Included
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-balance">
              Full-Service <span className="text-gradient italic">Event Entertainment</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Let's Talk About Your Event
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Make It <span className="text-gradient italic">Unforgettable</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10">
            Call or text today to discuss your upcoming corporate event.
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

export default CorporateEvents;
