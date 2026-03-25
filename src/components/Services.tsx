import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import weddingImg from "@/assets/service-wedding.jpg";
import corporateImg from "@/assets/service-corporate.jpg";
import photoboothImg from "@/assets/service-photobooth.jpg";

const services = [
  {
    title: "Weddings",
    description:
      "From your ceremony to the last dance, I craft a seamless musical journey that keeps your guests on their feet all night long.",
    image: weddingImg,
    link: "/weddings",
  },
  {
    title: "Corporate Events",
    description:
      "Professional, polished entertainment for galas, holiday parties, fundraisers, and corporate celebrations of all sizes.",
    image: corporateImg,
    link: "/contact",
  },
  {
    title: "Photo Booths",
    description:
      "Add unforgettable fun with a premium photo booth experience — props, custom prints, and instant sharing for your guests.",
    image: photoboothImg,
    link: "/photo-booths",
  },
];

const Services = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gradient italic">Services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link
                to={service.link}
                className="group block relative rounded-2xl overflow-hidden bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
