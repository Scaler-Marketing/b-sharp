import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    venue: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Event Inquiry - ${formData.eventType} on ${formData.eventDate}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Date: ${formData.eventDate}\nEvent Type: ${formData.eventType}\nVenue: ${formData.venue}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:brendan@southcoastdj.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary font-body text-[10px] md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4">
              Let's Talk
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Check Your <span className="text-gradient italic">Date</span>
            </h1>
            <p className="text-muted-foreground font-body text-base md:text-xl max-w-2xl mx-auto text-balance">
              2027 dates are selling quickly, and I've just opened up the 2028 calendar.
              Let's make your event unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <a href="tel:508-822-4545" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground/60">Call or Text</p>
                      <p className="font-body font-semibold text-foreground">508-822-4545</p>
                    </div>
                  </a>
                  <a href="mailto:brendan@southcoastdj.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground/60">Email</p>
                      <p className="font-body font-semibold text-foreground">brendan@southcoastdj.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground/60">Serving</p>
                      <p className="font-body font-semibold text-foreground">Rhode Island & Southern New England</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface border border-border/50">
                <p className="font-display text-lg font-bold text-foreground mb-2">Awards & Recognition</p>
                <ul className="space-y-2 text-muted-foreground font-body text-sm">
                  <li>🏆 Best of Zola 2026</li>
                  <li>🏆 The Knot Best of Weddings 2025</li>
                  <li>⭐ 5-Star rated across all platforms</li>
                </ul>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="md:col-span-3 p-8 rounded-2xl bg-card border border-border/50"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm font-medium text-muted-foreground mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-muted-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-muted-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-muted-foreground mb-2">Event Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-muted-foreground mb-2">Event Type *</label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select...</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Sweet 16">Sweet 16</option>
                    <option value="Fundraiser">Fundraiser</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-muted-foreground mb-2">Venue</label>
                  <input
                    type="text"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block font-body text-sm font-medium text-muted-foreground mb-2">Tell us about your event</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
