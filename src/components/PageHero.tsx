interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  image: string;
}

const PageHero = ({ eyebrow, title, titleAccent, description, image }: PageHeroProps) => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          width={1920}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-16">
        <p className="text-primary font-body text-[10px] md:text-sm font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 text-balance">
          {title}{" "}
          {titleAccent && <span className="text-gradient italic">{titleAccent}</span>}
        </h1>
        {description && (
          <p className="text-foreground/80 font-body text-base md:text-xl leading-relaxed max-w-2xl mx-auto text-balance">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
