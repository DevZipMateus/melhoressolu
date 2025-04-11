
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/34cf1d8f-b7e6-45d1-94ac-d5662cf6a45c.png" 
        alt="Melhores Soluções" 
        className={cn(
          "h-10 transition-all duration-300",
          scrolled ? "h-8" : "h-10"
        )}
      />
    </a>
  );
};

export default Logo;
