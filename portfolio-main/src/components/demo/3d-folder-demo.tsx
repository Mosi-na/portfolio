import { AnimatedFolder, type Project } from "@/components/ui/3d-folder";

const portfolioData = [
  {
    title: "AI & Python",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    projects: [
      { id: "a1", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800", title: "Vegetable Knowledge Assistant" },
      { id: "a2", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800", title: "Accessories App" },
      { id: "a3", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800", title: "Perfume App (RAG)" },
    ] as Project[]
  },
  {
    title: "Web Apps",
    gradient: "linear-gradient(135deg, hsl(43 96% 56%) 0%, hsl(43 96% 70%) 100%)",
    projects: [
      { id: "w1", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800", title: "Pharmacy Web App" },
      { id: "w2", image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80&w=800", title: "Fresh Fruits App" },
      { id: "w3", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800", title: "Food Delivery App" },
    ] as Project[]
  },
  {
    title: "E-Commerce",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    projects: [
      { id: "e1", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800", title: "Watch Web Application" },
      { id: "e2", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800", title: "UI/UX Design" },
    ] as Project[]
  }
];

export default function FolderDemo() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Project Folders
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {portfolioData.map((folder, index) => (
            <AnimatedFolder
              key={index}
              title={folder.title}
              projects={folder.projects}
              gradient={folder.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
