interface VideoBackgroundProps {
  src: string;
  className?: string;
}

export const VideoBackground = ({ src, className = "" }: VideoBackgroundProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ zIndex: 0 }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-background/30" />
    </div>
  );
};