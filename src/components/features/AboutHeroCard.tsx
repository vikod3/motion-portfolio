import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const experienceData = [
  {
    period: "2021 - Present",
    title: "SENIOR FRONTEND DEVELOPER",
    company: "TechFlow Solutions, San Francisco, CA"
  },
  {
    period: "2019 - 2021", 
    title: "DIGITAL PRODUCT DESIGNER",
    company: "Design Studio Pro, Austin, TX"
  },
  {
    period: "2016 - 2019",
    title: "UI/UX DESIGNER", 
    company: "Innovation Labs, New York, NY"
  }
];

export const AboutHeroCard = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-4">
      <Card className="liquid-glass rounded-3xl p-5 lg:p-8 border-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <img 
            src="/lovable-uploads/943f2a3a-f7c3-4b8d-a72b-73a8fb674ce2.png" 
            alt="Stefen Rodriguez Profile"
            className="w-full max-w-sm lg:max-w-none lg:w-full h-auto rounded-lg object-cover"
          />
        </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between space-y-8">
            {/* Introduction */}
            <div>
              <p className="text-foreground/70 text-base leading-relaxed">
                Hello, I'm Stefen Rodriguez, a passionate Digital Designer and Frontend Developer specializing in creating exceptional user experiences through innovative design and clean, efficient code. With expertise in modern web technologies and design systems, I transform ideas into engaging digital solutions.
              </p>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
              <h3 className="text-primary font-medium text-sm uppercase tracking-wider">
                EXPERIENCE
              </h3>
              
              <div className="space-y-4">
                {experienceData.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-foreground/70 text-xs">
                      {exp.period}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-foreground/90 text-sm font-medium">
                        {exp.title}
                      </h4>
                      <p className="text-foreground/50 text-xs">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button 
                variant="outline" 
                className="w-full bg-foreground/10 border-foreground/20 text-foreground hover:bg-foreground/20 uppercase text-xs font-medium tracking-wide"
              >
                <div className="w-3 h-3 bg-foreground/70 rounded-full mr-2" />
                Book a Call
              </Button>
              
              <Button 
                variant="outline"
                className="w-full bg-foreground/5 border-foreground/15 text-foreground hover:bg-foreground/15 uppercase text-xs font-medium tracking-wide"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};