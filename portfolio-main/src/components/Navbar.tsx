import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setIsDarkTheme(shouldUseDark);
    document.documentElement.dataset.theme = shouldUseDark ? "dark" : "light";
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = isDarkTheme ? "dark" : "light";
    localStorage.setItem("portfolio-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <nav className="container px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="font-display text-2xl font-bold text-gradient"
          >
            M.
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-gold transition-colors duration-300 font-body text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setIsDarkTheme((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground transition-colors hover:text-gold"
              aria-label="Toggle theme"
            >
              {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button variant="gold" size="sm" asChild>
              <a href="https://www.linkedin.com/in/moshina05/" target="_blank" rel="noopener noreferrer">
                Let's Connect
              </a>
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsDarkTheme((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground transition-colors hover:text-gold"
              aria-label="Toggle theme"
            >
              {isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/50 py-6">
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-gold transition-colors duration-300 font-body text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" asChild>
                <a href="https://www.linkedin.com/in/moshina05/" target="_blank" rel="noopener noreferrer">
                  Let's Connect
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
