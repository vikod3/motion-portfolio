import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

export const ProfileCard = () => {
  return (
    <div className="liquid-glass rounded-3xl p-5 h-full flex flex-col">
      {/* Profile Image */}
      <div className="w-[100px] h-[100px] mb-5 overflow-hidden">
        <img 
          src={profileImage}
          alt="Stefen Rodriguez - Digital Designer & Frontend Developer"
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* Bio Section */}
      <div className="flex-1 mb-5">
        <h2 className="text-2xl font-semibold text-foreground mb-3">
          Designer & Entrepreneur
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven.
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 bg-foreground/10 border-foreground/20 text-foreground hover:bg-foreground/20 uppercase text-xs font-medium py-3"
        >
          <Phone className="w-3.5 h-3.5 mr-2" />
          Book a call
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 bg-foreground/5 border-foreground/15 text-foreground hover:bg-foreground/15 uppercase text-xs font-medium py-3"
        >
          <Mail className="w-3.5 h-3.5 mr-2" />
          Get in touch
        </Button>
      </div>
    </div>
  );
};