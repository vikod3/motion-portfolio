import { HeroSection } from "@/components/features/HeroSection"
import { ProjectsSection } from "@/components/features/ProjectsSection"
import { TestimonialsWorkSection } from "@/components/features/TestimonialsWorkSection"
import { SocialsSection } from "@/components/features/SocialsSection"
import { UnicornStudioBackground } from "@/components/features/UnicornStudioBackground"

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Fixed Background Animation */}
      <UnicornStudioBackground 
        projectId="k7d0mgUzrVnNVEhr0aK3"
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
