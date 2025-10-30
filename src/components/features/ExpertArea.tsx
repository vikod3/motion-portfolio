import { Figma, Code2, Globe, Palette, PenTool, Layout } from "lucide-react";

const expertTools = [
  { name: "Figma", icon: Figma },
  { name: "Framer", icon: Code2 },
  { name: "Behance", icon: Globe },
  { name: "Dribbble", icon: Palette },
  { name: "Sketch", icon: PenTool },
  { name: "Adobe XD", icon: Layout }
];

export const ExpertArea = () => {
  return (
    <div className="bg-black/80 rounded-3xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.10)] backdrop-blur-md p-5">
      <h2 className="text-2xl font-semibold text-foreground mb-8">
        Tools & Technologies
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {expertTools.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <div 
              key={index}
              className="bg-black/80 rounded-3xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.10)] backdrop-blur-md p-4 flex flex-col items-center justify-center h-24 hover:bg-accent/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
            >
              <IconComponent className="w-8 h-8 text-white group-hover:text-primary mb-4 group-hover:scale-110 transition-all duration-300" />
              <span className="text-lg font-semibold text-foreground text-center">
                {tool.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};