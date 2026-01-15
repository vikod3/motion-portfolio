import { MarqueeText } from "@/components/common/MarqueeText";

const skills = [
  "Frontend Development",
  "UI/UX Design", 
  "React & JavaScript",
  "Design Systems",
  "Responsive Design",
  "User Experience"
];

export const DescriptionCard = () => {
  return (
    <div className="liquid-glass rounded-3xl p-5 flex flex-col h-full">
      {/* Description */}
      <div className="flex-1 mb-8">
        <p className="text-muted-foreground leading-relaxed text-base">
          As a digital designer and frontend developer, I focus on crafting intuitive user 
          experiences that bridge the gap between design and functionality. I believe exceptional 
          digital products are born from thoughtful collaboration, user empathy, and technical precision.
        </p>
      </div>
      
      {/* Marquee */}
      <div className="relative">
        <MarqueeText 
          items={skills}
          className="py-3"
          speed="normal"
        />
      </div>
    </div>
  );
};