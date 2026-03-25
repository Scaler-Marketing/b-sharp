import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Song after song we would yell, 'OMG I love this song!' Brendan's professionalism and attention to detail ensured that the transitions between different parts of the day were seamless. The dance floor was packed all night long!",
    name: "Michael B.",
    event: "May 2024 Wedding",
    venue: "Harbor Lights Marina, Warwick RI",
  },
  {
    quote:
      "Brendan was so helpful and responsive during the planning process. He did it all — our ceremony music, played live piano during cocktail hour, and rocked the house with an awesome playlist during our reception!",
    name: "Catherine Z.",
    event: "June 2025 Wedding",
    venue: "Lake Pearl, Wrentham MA",
  },
  {
    quote:
      "From the first consultation call to the day of the event, Brendan was so easy to communicate with, and so flexible with our requests. We also opted to have the Photo Booth at our wedding… It was a HIT!",
    name: "Martine F.",
    event: "August 2025 Wedding",
    venue: "Ochre Court, Newport RI",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Real Couples, Real Moments
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground text-balance">
            What They <span className="text-gradient italic">Say</span>
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
              <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed mb-8 text-balance">
                "{testimonials[current].quote}"
              </p>
              <p className="font-body font-semibold text-foreground text-lg">
                {testimonials[current].name}
              </p>
              <p className="font-body text-muted-foreground text-sm mt-1">
                {testimonials[current].event} · {testimonials[current].venue}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
