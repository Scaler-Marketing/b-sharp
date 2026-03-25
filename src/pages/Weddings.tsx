import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Music, Heart, Users, Star, Mic2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import weddingsHero from "@/assets/weddings-hero.jpg";
import serviceWedding from "@/assets/service-wedding.jpg";

const features = [
  {
    icon: Music,
    title: "Custom Playlists",
    description: "Share your favorites and must-plays. I'll build a seamless soundtrack that reflects your style and keeps the energy building all night.",
  },
  {
    icon: Mic2,
    title: "MC & Announcements",
    description: "Professional, polished emceeing for your grand entrance, toasts, and every key moment — never cheesy, always classy.",
  },
  {
    icon: Heart,
    title: "Ceremony Music",
    description: "From processional to recessional, I provide complete ceremony sound reinforcement so every word and note is heard.",
  },
  {
    icon: Star,
    title: "Live Piano",
    description: "Elevate your cocktail hour with live piano music — a sophisticated touch that sets the tone for an unforgettable evening.",
  },
  {
    icon: Users,
    title: "Coordinated Teamwork",
    description: "I work hand in hand with your coordinator, photographer, and videographer to make sure every detail is covered.",
  },
  {
    icon: Music,
    title: "Uplighting & Effects",
    description: "Transform your venue with customizable uplighting, dance floor lighting, and monogram projections.",
  },
];

const Weddings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow="B-Sharp Entertainment"
        title="Your Wedding,"
        titleAccent="Your Music"
        description="I'll be focused on your music and reception experience, building the energy for one epic celebration."
        image={weddingsHero}
      />

      {/* Philosophy section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                My Approach
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Every Song Better Than{" "}
                <span className="text-gradient italic">the Last</span>
              </h2>
              <div className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                <p>
                  By all means, create a list of your favorite songs. Key songs for your
                  entrance, first dance and parent dances should especially hold meaning.
                  I take it from there and use my experience and talents to choose the
                  songs that precisely fit the moment.
                </p>
                <p>
                  It's about reading the crowd and bringing the energy to the dancefloor.
                  Can we take this party higher? Every song has to be better than the one
                  you just heard. And the one you just heard was great.
                </p>
                <p>
                  I think a real professional should be able to take the feel and style
                  a certain couple wants and deliver that without needing a lot of guidance.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]"
            >
              <img
                src={serviceWedding}
                alt="Wedding first dance"
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              What's Included
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Full-Service <span className="text-gradient italic">Entertainment</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              2027 Dates Selling Quickly
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Let's Make It <span className="text-gradient italic">Unforgettable</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg mb-10">
              Call or text today to check availability for your wedding date.
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
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Weddings;
