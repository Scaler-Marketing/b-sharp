const venueNames = [
  "Glen Manor House",
  "Blithewold Mansion",
  "Newport Vineyards",
  "Linden Place",
  "Providence G Ballroom",
  "Ochre Court",
  "Shepherd's Run",
  "Russell Morin Catering",
  "Providence Public Library",
];

const Venues = () => {
  const doubled = [...venueNames, ...venueNames];

  return (
    <section className="py-16 border-t border-b border-border/50 overflow-hidden">
      <div className="text-center mb-10 px-6">
        <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase">
          Recommended by Top MA & RI Wedding Venues
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="font-display text-lg md:text-xl text-muted-foreground/40 mx-6 inline-flex items-center gap-6 shrink-0"
            >
              {name}
              <span className="text-primary/30 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venues;
