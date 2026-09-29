import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import GridBackground from "@/components/ui/grid-background";

const Hero = () => {
  return (
    <GridBackground className="min-h-screen flex items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p 
            className="text-gold font-body tracking-widest uppercase text-sm mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Welcome to my portfolio
          </p>

          {/* Main heading */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Moshina</span>
          </h1>

          {/* Tagline */}
          <p 
            className="text-muted-foreground text-lg md:text-xl lg:text-2xl font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            A passionate developer crafting beautiful digital experiences 
            with clean code and creative solutions.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <GradientButton asChild>
              <a href="#projects">View My Work</a>
            </GradientButton>
            <GradientButton variant="variant" asChild>
              <a href="#contact">Get In Touch</a>
            </GradientButton>
          </div>

          {/* Social Links */}
          <div 
            className="flex justify-center gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <a 
              href="https://www.linkedin.com/in/moshina05/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors duration-300 p-3 hover:bg-secondary rounded-full"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/Mosi-na" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors duration-300 p-3 hover:bg-secondary rounded-full"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="#contact"
              className="text-muted-foreground hover:text-gold transition-colors duration-300 p-3 hover:bg-secondary rounded-full"
              aria-label="Contact Me"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s" }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </GridBackground>
  );
};

export default Hero;
