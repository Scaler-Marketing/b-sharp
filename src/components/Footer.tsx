const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-xl font-bold text-foreground">
              B-Sharp<span className="text-gradient"> Entertainment</span>
            </p>
            <p className="text-muted-foreground font-body text-sm mt-1">
              Rhode Island & Southern New England Event Entertainment
            </p>
          </div>
          <div className="flex items-center gap-6 text-muted-foreground font-body text-sm">
            <a href="tel:508-822-4545" className="hover:text-primary transition-colors">
              508-822-4545
            </a>
            <span className="text-border">·</span>
            <a href="mailto:brendan@southcoastdj.com" className="hover:text-primary transition-colors">
              brendan@southcoastdj.com
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground/50 font-body text-xs">
            © {new Date().getFullYear()} B-Sharp Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
