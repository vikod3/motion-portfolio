import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WorkTogetherCard = () => {
  return (
    <div className="bg-black/80 rounded-3xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.10)] backdrop-blur-md p-6 h-full flex flex-col items-center justify-center text-center">
      <h3 className="text-xl font-semibold text-foreground mb-8">
        Let's Work Together
      </h3>
      
      <Button variant="ghost" className="group">
        <span className="text-sm font-medium uppercase tracking-wide">Let's Talk</span>
        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </Button>
    </div>
  );
};