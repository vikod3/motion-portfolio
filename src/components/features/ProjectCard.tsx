import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  size?: "large" | "small";
}

export const ProjectCard = ({ title, category, image, size = "small" }: ProjectCardProps) => {
  return (
    <div className={`bg-black/80 rounded-3xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.10)] backdrop-blur-md p-5 transition-colors hover:bg-accent/30 group ${
      size === "large" ? "lg:col-span-1" : ""
    }`}>
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>
        
        {/* Action Button */}
        <div className="w-11 h-11 bg-muted border border-border rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
      
      {/* Image */}
      <div className="rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={`w-full object-cover transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-105 ${
            size === "large" ? "h-96" : "h-72"
          }`}
        />
      </div>
    </div>
  );
};