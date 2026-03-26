import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import testimonialsHero from "@/assets/testimonials-hero.jpg";

const testimonials = [
  {
    date: "2/14/2026",
    name: "Elly M",
    text: "My husband and I got married this past summer and were so lucky to have Brendan as our DJ! He's kind, thoughtful, and genuinely cares about the couples he works with. From the pre-ceremony music to the last song of the night, he created the perfect atmosphere for every part of our wedding. We would wholeheartedly recommend Brendan to anyone looking for a talented, personable DJ who will truly make your day unforgettable.",
  },
  {
    date: "12/28/2025",
    name: "Megan D",
    text: "From the start, Brendan was always responsive and answered all of my questions - no matter how many I had! His app that we used kept things super organized and was easy to use. He was not only our DJ, but also played piano during cocktail hour which was a beautiful touch! We were interested in other instruments to play along with him during cocktail hour and he was able to recommend a violinist he had played with previously. Having both truly elevated the experience! Brendan listened to our song requests and we truly loved the music throughout the whole night! I personally was either singing through dinner or keeping the dance floor lit! He was great to work with and we are so pleased with the entertainment for our big day!!",
  },
  {
    date: "11/25/2025",
    name: "Abby W",
    text: "Brendan was great and the easiest vendor we worked with! I had a special request to walk down the aisle to a voicemail from my dad over an instrumental song and Brendan created it quickly and executed exactly what I wanted. After meeting with Brendan to discuss our reception songs, he got back to us within an hour with shortened versions of songs we were using for dances. He created a perfect reception playlist based on our input and kept the dance floor live for 2.5 hours. Every time I had a question or needed something the day of the wedding, Brendan answered with a smile. He was great and we'd recommend him to anyone looking for a DJ!",
  },
  {
    date: "10/14/2025",
    name: "Logan C",
    text: "We could not have asked for a better DJ for our wedding! Brendan is punctual, responsive, and incredibly organized to say the least. He made sure every aspect of the wedding in which he was involved was perfect. We also opted for the photobooth which was probably one of the best decisions we made for the reception. It was so popular among our guests!",
  },
  {
    date: "9/24/2025",
    name: "Grace S",
    text: "Brendan was so great to work with from the beginning to the end. He was so responsive and helpful during the planning process, had a great app to help us select the day of requested songs, and kept the dance floor filled the whole night. As a later add on, we also added a photobooth through him and we're so glad we did. The photobooth was a hit and the attendant was so great as well. We are so glad we chose Brendan as our DJ and would definitely recommend him to anyone looking for DJ and photobooth services!!",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero eyebrow="Reviews" title="What Couples Are Saying" image={testimonialsHero} />

      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10">
            {testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative bg-card/40 border border-border/40 rounded-2xl p-8 md:p-10"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/15" />

                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="font-body text-foreground/85 leading-relaxed text-[0.95rem] md:text-base mb-6">
                  "{t.text}"
                </p>

                <div className="flex items-center justify-between">
                  <p className="font-display font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground/60">
                    {t.date}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default Testimonials;
