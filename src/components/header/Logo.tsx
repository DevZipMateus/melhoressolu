
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/17b52f97-77ce-4fe5-b2f2-04f2418f14bf.png" 
        alt="Melhores Soluções" 
        className={cn(
          "h-10 transition-all duration-300",
          scrolled ? "h-9" : "h-10"
        )}
      />
    </a>
  );
};

export default Logo;
