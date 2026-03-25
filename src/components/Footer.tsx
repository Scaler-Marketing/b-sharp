import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="font-display text-xl font-bold text-foreground">
              B-Sharp<span className="text-gradient"> Entertainment</span>
            </Link>
            <p className="text-muted-foreground font-body text-sm mt-2">
              Rhode Island & Southern New England's premier wedding DJ and event entertainment company.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-body text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Pages</p>
              <div className="space-y-2">
                <Link to="/" className="block text-muted-foreground font-body text-sm hover:text-primary transition-colors">Home</Link>
                <Link to="/weddings" className="block text-muted-foreground font-body text-sm hover:text-primary transition-colors">Weddings</Link>
                <Link to="/photo-booths" className="block text-muted-foreground font-body text-sm hover:text-primary transition-colors">Photo Booths</Link>
                <Link to="/about" className="block text-muted-foreground font-body text-sm hover:text-primary transition-colors">About B-Sharp</Link>
              </div>
            </div>
            <div>
              <p className="font-body text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Connect</p>
              <div className="space-y-2">
                <Link to="/contact" className="block text-muted-foreground font-body text-sm hover:text-primary transition-colors">Check Your Date</Link>
                <a href="tel:508-822-4545" className="block text-muted-foreground font-body text-sm hover:text-primary transition-colors">508-822-4545</a>
                <a href="mailto:brendan@southcoastdj.com" className="block text-muted-foreground font-body text-sm hover:text-primary transition-colors">Email Brendan</a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Get in Touch</p>
            <p className="text-muted-foreground font-body text-sm mb-2">
              Call or Text: <a href="tel:508-822-4545" className="text-primary hover:underline">508-822-4545</a>
            </p>
            <p className="text-muted-foreground font-body text-sm mb-4">
              Email: <a href="mailto:brendan@southcoastdj.com" className="text-primary hover:underline">brendan@southcoastdj.com</a>
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.theknot.com/marketplace/bsharp-entertainment-dj-and-pianist-taunton-ma-281770"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground/60 hover:text-primary transition-colors font-body"
              >
                The Knot
              </a>
              <span className="text-border">·</span>
              <a
                href="https://www.zola.com/wedding-vendors/wedding-bands-djs/b-sharp-entertainment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground/60 hover:text-primary transition-colors font-body"
              >
                Zola
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/50 font-body text-xs">
            © {new Date().getFullYear()} B-Sharp Entertainment. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-muted-foreground/50 font-body text-xs hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
