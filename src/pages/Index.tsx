import { HeroSection } from "@/components/features/HeroSection"
import { ProjectsSection } from "@/components/features/ProjectsSection"
import { TestimonialsWorkSection } from "@/components/features/TestimonialsWorkSection"
import { SocialsSection } from "@/components/features/SocialsSection"
import { VideoBackground } from "@/components/features/VideoBackground"

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed Video Background */}
      <VideoBackground 
        src="/videos/background.mp4"
        className="fixed inset-0 w-full h-full"
      />
      
      {/* Main Content */}
      <main className="pt-8 pb-16 max-w-lg mx-auto px-4 space-y-8 relative z-10">
        <HeroSection />
        <ProjectsSection />
        <TestimonialsWorkSection />
        <SocialsSection />
      </main>
    </div>
  );
};

export default Index;
