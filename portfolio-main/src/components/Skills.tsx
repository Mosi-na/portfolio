const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    },
    {
      title: "Backend & Data",
      skills: ["Python", "Next.js", "Flutter", "Java", "Supabase", "JSON", "SQL"],
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "VS Code", "Figma", "GitHub", "Postman", "Vercel", "Netlify", "Copilot"],
    },
  ];

  return (
    <section id="skills" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-gold font-body tracking-widest uppercase text-sm mb-4">
              My Skills
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Technologies I{" "}
              <span className="text-gradient">work with</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies that I use to build 
              robust, scalable, and beautiful applications.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div 
                key={category.title}
                className="card-gradient rounded-2xl p-8 border border-border/50"
              >
                <h3 className="font-display text-2xl font-semibold mb-6 text-gold">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary rounded-full text-sm font-body text-foreground/80 hover:text-gold hover:bg-gold/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
