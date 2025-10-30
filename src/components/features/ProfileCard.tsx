import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

export const ProfileCard = () => {
  return (
    <div className="bg-black/80 rounded-3xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.10)] backdrop-blur-md p-5 h-full flex flex-col">
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
          className="flex-1 bg-primary/5 border-primary/10 text-primary hover:bg-primary/10 uppercase text-xs font-medium py-3"
        >
          <Phone className="w-3.5 h-3.5 mr-2" />
          Book a call
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 uppercase text-xs font-medium py-3"
        >
          <Mail className="w-3.5 h-3.5 mr-2" />
          Get in touch
        </Button>
      </div>
    </div>
  );
};