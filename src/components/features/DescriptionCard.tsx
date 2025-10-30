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
    <div className="bg-black/80 rounded-3xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.10)] backdrop-blur-md p-5 flex flex-col h-full">
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