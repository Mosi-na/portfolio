import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful interfaces that delight users and drive engagement.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Building fast, optimized applications that deliver exceptional experiences.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-gold font-body tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Turning ideas into{" "}
              <span className="text-gradient">reality</span>
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a software developer who enjoys turning ideas into practical, polished digital experiences. I build web applications, solve real-world problems, and create products that are both functional and user-friendly.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My work combines thoughtful design, clean code, and product-minded thinking to deliver experiences people enjoy using. I love learning new technologies, improving workflows, and bringing strong ideas to life through development.
              </p>
            </div>

            {/* Stats or visual element */}
            <div className="relative">
              <div className="card-gradient rounded-2xl p-8 border border-border/50 glow">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="rounded-xl border border-border/50 bg-background/40 p-4">
                    <div className="text-3xl font-display font-bold text-gold mb-1">UI</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Design</div>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-background/40 p-4">
                    <div className="text-3xl font-display font-bold text-gold mb-1">Code</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Build</div>
                  </div>
                  <div className="rounded-xl border border-border/50 bg-background/40 p-4 col-span-2">
                    <div className="text-3xl font-display font-bold text-gold mb-1">Product</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Mindset</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="group card-gradient rounded-xl p-8 border border-border/50 hover:border-gold/30 transition-all duration-500 hover:glow"
              >
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
