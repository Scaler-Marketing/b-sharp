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
  return (
    <section className="py-20 border-t border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground font-body text-sm tracking-[0.2em] uppercase">
            Recommended by Top MA & RI Wedding Venues
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {venueNames.map((name, i) => (
            <span
              key={name}
              className="font-display text-lg md:text-xl text-muted-foreground/50 hover:text-primary transition-colors duration-300 cursor-default"
            >
              {name}
              {i < venueNames.length - 1 && (
                <span className="ml-10 text-border">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venues;
