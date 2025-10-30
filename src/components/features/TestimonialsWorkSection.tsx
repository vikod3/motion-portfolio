import { TestimonialsSection } from "./TestimonialsSection";
import { WorkTogetherCard } from "./WorkTogetherCard";

export const TestimonialsWorkSection = () => {
  return (
    <section className="w-full space-y-6">
      {/* Testimonials Section */}
      <div className="w-full">
        <TestimonialsSection />
      </div>
      
      {/* Work Together Card */}
      <div className="w-full">
        <WorkTogetherCard />
      </div>
    </section>
  );
};