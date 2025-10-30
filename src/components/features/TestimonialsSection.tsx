import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Amanda Thompson",
    title: "Creative Director",
    company: "Digital Innovations",
    quote: "Stefen's ability to transform complex ideas into elegant, user-friendly designs is remarkable. His attention to detail and technical expertise consistently exceeded our expectations on every project.",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "David Park",
    title: "Startup Founder",
    company: "InnovateLab",
    quote: "Working with Stefen was a game-changer for our startup. He delivered a stunning web platform that perfectly captured our vision while ensuring optimal performance and user experience.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Rachel Martinez",
    title: "Product Manager",
    company: "TechForward",
    quote: "Stefen's design process is both creative and strategic. He doesn't just make things look beautiful – he ensures every element serves a purpose and enhances the overall user journey.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 relative">
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={testimonials[currentIndex].avatar} 
          alt={testimonials[currentIndex].name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
          <p className="text-sm text-primary">{testimonials[currentIndex].title}, {testimonials[currentIndex].company}</p>
        </div>
      </div>
      
      <blockquote className="text-muted-foreground leading-relaxed mb-6">
        "{testimonials[currentIndex].quote}"
      </blockquote>
      
      {/* Navigation Controls Inside Card */}
      <div className="flex space-x-2">
        <button
          onClick={previousTestimonial}
          className="w-9 h-9 bg-muted border border-border rounded-full flex items-center justify-center hover:bg-accent transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 text-foreground" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="w-9 h-9 bg-muted border border-border rounded-full flex items-center justify-center hover:bg-accent transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 text-foreground" />
        </button>
      </div>
    </div>
  );
};