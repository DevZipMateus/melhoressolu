
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  details?: string[];
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, details, className }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg group",
        isExpanded ? "hover:shadow-xl" : "hover:-translate-y-1",
        className
      )}
    >
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      {details && details.length > 0 && (
        <>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center mb-3"
          >
            {isExpanded ? "Ver menos" : "Ver detalhes"}
          </button>
          
          {isExpanded && (
            <ul className="space-y-2 mt-2 text-sm text-gray-600 bg-primary/5 p-4 rounded-lg">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default ServiceCard;
