
import TestimonialCard from './TestimonialCard';
import AnimatedSection from './AnimatedSection';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [{
    content: "A parceria com a Contabilify trouxe resultados excelentes para nossa empresa. A equipe é atenciosa e nos ajudou a reduzir significativamente nossa carga tributária.",
    author: "Carlos Silva",
    role: "Diretor Financeiro",
    rating: 5
  }, {
    content: "Profissionais extremamente competentes e atualizados. Sempre nos mantêm informados sobre mudanças na legislação e nos orientam da melhor forma possível.",
    author: "Ana Souza",
    role: "Empresária",
    rating: 5
  }, {
    content: "Desde que contratamos os serviços da Contabilify, temos mais tempo para focar no nosso negócio. A tranquilidade de saber que nossa contabilidade está em boas mãos não tem preço.",
    author: "Marcos Oliveira",
    role: "CEO",
    rating: 5
  }, {
    content: "Atendimento personalizado e de qualidade. Os relatórios gerenciais têm sido fundamentais para tomarmos decisões estratégicas em nossa empresa.",
    author: "Patricia Mendes",
    role: "Gerente Administrativa",
    rating: 5
  }];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-16 bg-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title text-center">O que dizem nossos clientes</h2>
          <p className="section-subtitle text-center">
            A satisfação de nossos clientes é nosso maior compromisso
          </p>
        </AnimatedSection>

        <div className="mt-12 relative">
          <AnimatedSection animation="fade-in">
            <div className="max-w-4xl mx-auto px-4 relative">
              {/* Navigation Buttons */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:-left-6"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-5 w-5 text-primary" />
              </button>
              
              <div className="overflow-hidden">
                <div 
                  className="transition-all duration-500 ease-in-out"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  <div className="flex">
                    {testimonials.map((testimonial, index) => (
                      <div 
                        key={index} 
                        className={cn(
                          "min-w-full transition-opacity duration-500",
                          activeIndex === index ? "opacity-100" : "opacity-0 absolute"
                        )}
                      >
                        <TestimonialCard
                          content={testimonial.content}
                          author={testimonial.author}
                          role={testimonial.role}
                          rating={testimonial.rating}
                          className="mx-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/50 sm:-right-6"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-5 w-5 text-primary" />
              </button>
            </div>

            {/* Indicator dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    activeIndex === index 
                      ? "bg-primary scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
