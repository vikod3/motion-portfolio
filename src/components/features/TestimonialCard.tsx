interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
}

export const TestimonialCard = ({ name, title, company, quote, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-black/80 rounded-3xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.10)] backdrop-blur-md p-6">
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={avatar} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-lg font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-primary">{title}, {company}</p>
        </div>
      </div>
      
      <blockquote className="text-muted-foreground leading-relaxed">
        "{quote}"
      </blockquote>
    </div>
  );
};