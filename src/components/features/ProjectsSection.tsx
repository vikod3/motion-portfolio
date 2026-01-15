import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "NovaTech Platform",
    category: "Web Development",
    image: "/images/project-1.jpg",
    size: "large" as const
  },
  {
    id: 2,
    title: "PixelCraft Studio",
    category: "UI/UX Design",
    image: "/images/project-2.png",
    size: "large" as const
  },
  {
    id: 3,
    title: "FlowSpace App",
    category: "Mobile Design",
    image: "/images/project-3.png",
    size: "small" as const
  },
  {
    id: 4,
    title: "BrandSync",
    category: "Brand Identity",
    image: "/images/project-4.png",
    size: "small" as const
  },
  {
    id: 5,
    title: "EcoConnect",
    category: "Sustainability",
    image: "/images/project-5.png",
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