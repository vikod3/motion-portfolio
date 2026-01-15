import { Figma, Code2, Globe, Palette, PenTool, Layout } from "lucide-react";

const expertTools = [
  { name: "Figma", icon: Figma },
  { name: "Framer", icon: Code2 },
  { name: "Behance", icon: Globe },
  { name: "Dribbble", icon: Palette },
  { name: "Lovable", icon: PenTool },
  { name: "Adobe XD", icon: Layout }
];

export const ExpertArea = () => {
  return (
    <div className="liquid-glass rounded-3xl p-5">
      <h2 className="text-2xl font-semibold text-foreground mb-8">
        Tools & Technologies
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {expertTools.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <div 
              key={index}
              className="liquid-glass-inner rounded-3xl p-4 flex flex-col items-center justify-center h-24 transition-all duration-300 group hover:scale-[1.02]"
            >
              <IconComponent className="w-8 h-8 text-foreground group-hover:text-foreground mb-4 group-hover:scale-110 transition-all duration-300" />
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