import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "NovaTech Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
    size: "large" as const
  },
  {
    id: 2,
    title: "PixelCraft Studio",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop",
    size: "large" as const
  },
  {
    id: 3,
    title: "FlowSpace App",
    category: "Mobile Design",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&h=300&fit=crop",
    size: "small" as const
  },
  {
    id: 4,
    title: "BrandSync",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop",
    size: "small" as const
  },
  {
    id: 5,
    title: "EcoConnect",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
    size: "small" as const
  }
];

export const ProjectsSection = () => {
  return (
    <section className="w-full space-y-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          category={project.category}
          image={project.image}
          size="large"
        />
      ))}
    </section>
  );
};