import { useEffect, useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectCard = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl: string;
};

const fallbackProjects: ProjectCard[] = [
  {
    title: "Vegetable Knowledge Assistant",
    description: "An AI-powered assistant for vegetable knowledge and information using Python.",
    tech: ["Python", "AI", "RAG"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Mosi-na/vegetable-knowledge-assistant",
  },
  {
    title: "Accessories App",
    description: "A modern accessories application built with Python for browsing and managing products.",
    tech: ["Python"],
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Mosi-na/accessories-app",
  },
  {
    title: "CRM Project",
    description: "A vehicle-focused CRM for tracking customers, vehicle inventory, sales leads, and follow-ups in one place.",
    tech: ["Next.js", "TypeScript", "CRM"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Mosi-na",
  },
  {
    title: "Pharmacy Web Application",
    description: "A comprehensive pharmacy web application with product catalog and ordering system.",
    tech: ["JavaScript", "Web App"],
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Mosi-na/pharmacy-web-application",
  },
  {
    title: "Fresh Fruits App",
    description: "A modern web application for browsing and ordering fresh fruits with an intuitive UI.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Mosi-na/fresh-fruits-app",
  },
  {
    title: "Food Delivery App",
    description: "A responsive food delivery application with smooth ordering experience and clean design.",
    tech: ["HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Mosi-na/Food-Delivery-app",
  },
  {
    title: "Perfume App",
    description: "An elegant RAG-powered perfume showcase application with beautiful product displays.",
    tech: ["JavaScript", "RAG"],
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Mosi-na/perfume-app",
  },
  {
    title: "Watch Web Application",
    description: "A stylish watch e-commerce web application with modern UI and product catalog.",
    tech: ["HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Mosi-na/watch-web-application",
  },
  {
    title: "UI/UX Design",
    description: "A collection of UI/UX design projects showcasing modern interface design principles.",
    tech: ["Figma", "UI Design", "UX"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/Mosi-na/UI-UX-",
  },
];

const projectImageMap: Record<string, string> = {
  "perfume-app": "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=800&h=600&fit=crop",
  "pharmacy-web-application": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop",
  "fresh-fruits-app": "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=800&h=600&fit=crop",
  "food-delivery-app": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
  "vegetable-knowledge-assistant": "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&h=600&fit=crop",
  "accessories-app": "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=600&fit=crop",
  "watch-web-application": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
  "cosmetic-app": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop",
  "cosmetic-suggestion-chatbot": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop",
  "admin-dashboard": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  "vehicle-management-system": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
  "mutton-shop-website": "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
  "founder-hub": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  "founder-requirement-web-app": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  "crm-project": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
  "crm": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
  "dice-game": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
};

const crmProject: ProjectCard = {
  title: "CRM Project",
  description: "A vehicle-focused CRM for tracking customers, vehicle inventory, sales leads, and follow-ups in one place.",
  tech: ["Next.js", "TypeScript", "CRM"],
  image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
  githubUrl: "https://github.com/Mosi-na",
};

const normalizeRepo = (repo: { name: string; description?: string | null; html_url: string; language?: string | null }) => {
  const repoName = repo.name || "GitHub Project";
  const normalizedName = repoName.toLowerCase();

  return {
    title: repoName.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()),
    description:
      repo.description ||
      `A project built with ${repo.language || "modern web technologies"} to solve a real-world problem and showcase practical development skills.`,
    tech: repo.language ? [repo.language] : ["GitHub"],
    image: projectImageMap[normalizedName] || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    githubUrl: repo.html_url,
  };
};

const Projects = () => {
  const [projects, setProjects] = useState<ProjectCard[]>(fallbackProjects);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Mosi-na/repos?per_page=100");
        if (!response.ok) return;

        const repos = await response.json();
        const excludedNames = new Set([
          "demopy",
          "moshina",
          "portfolio",
          "ui-ux-",
          "digital-drum-kit-",
          "my-own-showcase-15",
          "admin-dashboard",
          "founder-requirement-web-app",
        ]);

        const liveProjects = repos
          .filter((repo: { fork?: boolean; name: string }) => !repo.fork && !excludedNames.has(repo.name.toLowerCase()))
          .slice(0, 8)
          .map((repo: { name: string; description?: string | null; html_url: string; language?: string | null }) => normalizeRepo(repo));

        if (liveProjects.length > 0) {
          setProjects([crmProject, ...liveProjects].slice(0, 8));
        }
      } catch (error) {
        console.error("Failed to load GitHub projects", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-gold font-body tracking-widest uppercase text-sm mb-4">
              My Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Featured{" "}
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and 
              passion for building exceptional digital products.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group card-gradient rounded-2xl overflow-hidden border border-border/50 hover:border-gold/30 transition-all duration-500 hover:glow"
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button variant="gold-outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more */}
          <div className="text-center mt-12">
            <Button variant="gold-outline" size="lg" asChild>
              <a href="https://github.com/Mosi-na" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
