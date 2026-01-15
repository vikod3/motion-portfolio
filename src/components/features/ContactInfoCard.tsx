import { Card } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";

export const ContactInfoCard = () => {
  return (
    <Card className="liquid-glass rounded-3xl p-5 lg:p-8 h-full flex flex-col border-0">
      {/* Contact Info Header */}
      <div className="mb-8 flex-shrink-0">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          Let's Work Together
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-foreground" />
            <span className="text-foreground text-sm">
              San Francisco, CA, United States
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-foreground" />
            <span className="text-foreground text-sm">
              +1 (555) 123-4567
            </span>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="flex-1 rounded-lg overflow-hidden min-h-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.209!2d-122.419906!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b7ea8d89%3A0x5a69f5e4d8b8f7c0!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1639234567890!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="San Francisco Location"
          className="w-full h-full"
        />
      </div>
    </Card>
  );
};