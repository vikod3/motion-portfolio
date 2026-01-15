import { LucideIcon } from "lucide-react";

interface SocialCardProps {
  name: string;
  icon: LucideIcon;
  href: string;
}

export const SocialCard = ({ name, icon: Icon, href }: SocialCardProps) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="liquid-glass liquid-glass-hover rounded-3xl h-20 flex items-center justify-center relative">
        <div className="relative flex items-center justify-center h-full w-full">
          {/* Icon - Initially below center, slides up to center on hover */}
          <Icon className="w-5 h-5 text-foreground absolute top-full group-hover:top-1/2 group-hover:-translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" />
          
          {/* Text - Initially centered, moves up and exits on hover */}
          <span className="text-muted-foreground group-hover:text-foreground absolute top-1/2 -translate-y-1/2 group-hover:-top-full transition-all duration-300 ease-out">
            {name}
          </span>
        </div>
      </div>
    </a>
  );
};