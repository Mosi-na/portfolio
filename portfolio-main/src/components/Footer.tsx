import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center md:justify-end items-center gap-4">
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/moshina05/"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/Mosi-na" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
