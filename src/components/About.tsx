import aboutImg from "@/assets/brendan-dj.jpg";
import { useCountUp } from "@/hooks/use-count-up";

const About = () => {
  const events = useCountUp(500, 2000);
  const years = useCountUp(15, 1500);
  const stars = useCountUp(5, 1200);

  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src={aboutImg}
                alt="Brendan Lafferty - B-Sharp Entertainment"
                width={800}
                height={1024}
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border-2 border-primary/20 -z-10" />
          </div>

          <div>
            <p className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Meet Brendan
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Moments Matter.{" "}
              <span className="text-gradient italic">The Music Matters.</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              <p>
                Create a list of your favorite songs. Key songs for your entrance,
                first dance and parent dances should especially hold meaning. I
                take it from there and use my experience and talents to choose the
                songs that precisely fit the moment and keep everyone on their feet.
              </p>
              <p>
                It's about reading the crowd and bringing the energy to the
                dancefloor. Every song has to be better than the one you just
                heard — and the one you just heard was already great.
              </p>
              <p>
                I love what I do and the couples that I get to work for, each and
                every weekend. I take fun seriously, and rest assured, I'll make a
                great first impression with your guests.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <p ref={events.ref as React.Ref<HTMLParagraphElement>} className="font-display text-3xl font-bold text-gradient">{events.count}+</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Events</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p ref={years.ref as React.Ref<HTMLParagraphElement>} className="font-display text-3xl font-bold text-gradient">{years.count}+</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Years</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p ref={stars.ref as React.Ref<HTMLParagraphElement>} className="font-display text-3xl font-bold text-gradient">{stars.count}★</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
