import { ProfileCard } from "./ProfileCard";
import { ExpertArea } from "./ExpertArea";
import { DescriptionCard } from "./DescriptionCard";

export const HeroSection = () => {
  return (
    <section className="w-full space-y-6 relative z-10">
      {/* Profile Card */}
      <div className="w-full">
        <ProfileCard />
      </div>
      
      {/* Expert Area */}
      <div className="w-full">
        <ExpertArea />
      </div>
      
      {/* Description Card */}
      <div className="w-full">
        <DescriptionCard />
      </div>
    </section>
  );
};