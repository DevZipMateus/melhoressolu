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
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="depoimentos" className="py-16 bg-gray-50">
      
    </section>;
};
export default TestimonialsSection;