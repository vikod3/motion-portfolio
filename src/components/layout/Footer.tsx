export const Footer = () => {
  return (
    <footer className="w-full py-8 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-primary">
            Stefen
          </span>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          ©2024 Stefen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};