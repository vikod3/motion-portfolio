import { Card } from "@/components/ui/card";
import { Palette, Zap, Code, Smartphone, BarChart3, Monitor, Globe, PenTool, Layout, Figma } from "lucide-react";

const services = [
  { name: "UI/UX Design", icon: Palette },
  { name: "Branding", icon: Zap },
  { name: "Web Development", icon: Code },
  { name: "Product Design", icon: Monitor },
  { name: "Mobile App", icon: Smartphone },
  { name: "Visualization", icon: BarChart3 }
];

const awards = [
  {
    title: "Digital Excellence Award",
    period: "2023-2024",
    icon: Globe
  },
  {
    title: "UI Innovation Recognition", 
    period: "2022-2023",
    icon: Figma
  },
  {
    title: "Frontend Development Prize",
    period: "2021-2022", 
    icon: Layout
  },
  {
    title: "Creative Design Honor",
    period: "2020-2021",
    icon: PenTool
  }
];

export const ServicesAwardsSection = () => {
  return (
    <section id="services" className="w-full max-w-7xl mx-auto px-4 py-4">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Services Card */}
        <Card className="bg-card border border-border p-5 lg:p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Services</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="bg-background/20 border border-border/20 p-4 flex flex-col items-center justify-center text-center space-y-3 hover:bg-accent/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group h-28"
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-foreground/50 font-semibold text-sm lg:text-base">
                    {service.name}
                  </h3>
                </Card>
              );
            })}
          </div>
        </Card>

        {/* Awards Card */}
        <Card className="bg-card border border-border p-5 lg:p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-8">Awards</h2>
          
          <div className="h-[400px] overflow-hidden relative">
            <div className="animate-marquee-up space-y-4">
              {/* First set of awards */}
              {awards.map((award, index) => {
                const AwardIcon = award.icon;
                return (
                  <Card 
                    key={index}
                    className="bg-background/20 border border-border/20 p-4 hover:bg-accent/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group flex-shrink-0"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-background/30 rounded">
                        <AwardIcon className="w-6 h-6 text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground/70 font-semibold text-lg truncate">
                          {award.title}
                        </h3>
                        <p className="text-foreground/50 text-sm">
                          {award.period}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
              
              {/* Duplicate set for seamless loop */}
              {awards.map((award, index) => {
                const AwardIcon = award.icon;
                return (
                  <Card 
                    key={`duplicate-${index}`}
                    className="bg-background/20 border border-border/20 p-4 hover:bg-accent/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group flex-shrink-0"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-background/30 rounded">
                        <AwardIcon className="w-6 h-6 text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground/70 font-semibold text-lg truncate">
                          {award.title}
                        </h3>
                        <p className="text-foreground/50 text-sm">
                          {award.period}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
              
              {/* Third set for smooth infinite scroll */}
              {awards.map((award, index) => {
                const AwardIcon = award.icon;
                return (
                  <Card 
                    key={`triple-${index}`}
                    className="bg-background/20 border border-border/20 p-4 hover:bg-accent/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group flex-shrink-0"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-background/30 rounded">
                        <AwardIcon className="w-6 h-6 text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground/70 font-semibold text-lg truncate">
                          {award.title}
                        </h3>
                        <p className="text-foreground/50 text-sm">
                          {award.period}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};