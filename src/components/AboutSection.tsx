
import { CheckCircle, Monitor, Code, Database, Settings, Users, Briefcase, TrendingUp, Shield } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const diferenciais = [
    'Atendimento próximo, direto com quem entende do assunto',
    'Soluções personalizadas de acordo com o porte e necessidade do cliente',
    'Experiência prática com pequenas empresas e seus desafios reais',
    'Compromisso com simplicidade, eficiência e resultado'
  ];

  const servicos = [
    {
      icon: <Code className="h-6 w-6 text-secondary" />,
      title: 'Desenvolvimento',
      text: 'Sistemas próprios sob medida'
    },
    {
      icon: <Monitor className="h-6 w-6 text-secondary" />,
      title: 'Consultoria',
      text: 'Melhoria de processos internos'
    },
    {
      icon: <Settings className="h-6 w-6 text-secondary" />,
      title: 'Projetos',
      text: 'Implantação de novas soluções'
    },
    {
      icon: <Database className="h-6 w-6 text-secondary" />,
      title: 'Plataformas',
      text: 'Suporte técnico e estratégico'
    }
  ];

  return (
    <section id="sobre-nós" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Soluções em Sistemas
          </p>
        </AnimatedSection>

        {/* Header and intro */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <AnimatedSection animation="fade-in-up" className="md:col-span-7 space-y-5">
            <span className="inline-block text-sm font-semibold py-1 px-3 bg-secondary/10 text-primary rounded-full">
              Sobre a Melhores Soluções Ltda
            </span>
            <h3 className="text-3xl font-bold">Compromisso com o seu negócio</h3>
            <p className="text-gray-600">
              A Melhores Soluções Ltda nasceu da experiência de um profissional apaixonado por tecnologia e motivado a transformar a rotina de pequenas empresas por meio de soluções práticas, eficientes e acessíveis.
            </p>
            <p className="text-gray-600">
              Com uma trajetória sólida em desenvolvimento de sistemas, consultoria em software e coordenação de projetos, a empresa foi criada com um propósito claro: Entender a fundo a realidade de cada cliente e oferecer as melhores soluções, capazes de gerar resultados concretos e fazer real diferença no dia a dia dos negócios.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-in-left" className="md:col-span-5">
            <div className="relative h-full flex items-center">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-7d65ca45ec9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Tecnologia e desenvolvimento" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-secondary/10 rounded-full z-0"></div>
              <div className="absolute -top-4 -left-4 w-28 h-28 bg-primary/5 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
        </div>

        {/* Three-column layout for services and differentials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Diferenciais Card */}
          <AnimatedSection animation="fade-in-up" delay={100} className="md:col-span-1">
            <Card className="h-full border-none shadow-lg bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-secondary" />
                  Nossos Diferenciais
                </h4>
                <div className="space-y-3">
                  {diferenciais.map((diferencial) => (
                    <div key={diferencial} className="flex items-start gap-3 group">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700 text-sm">{diferencial}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* O que fazemos Card */}
          <AnimatedSection animation="fade-in-up" delay={200} className="md:col-span-1">
            <Card className="h-full border-none shadow-lg bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-secondary" />
                  O que fazemos
                </h4>
                <div className="space-y-4">
                  {servicos.map((servico) => (
                    <div key={servico.title} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                        {servico.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">{servico.title}</h5>
                        <p className="text-sm text-gray-600">{servico.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Nosso Compromisso Card */}
          <AnimatedSection animation="fade-in-up" delay={300} className="md:col-span-1">
            <Card className="h-full border-none shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  Nosso Compromisso
                </h4>
                <p className="text-gray-600 mb-4">
                  Mais do que oferecer sistemas, queremos ser um parceiro para o crescimento do seu negócio.
                </p>
                <p className="text-gray-600">
                  Estamos aqui para simplificar, modernizar e impulsionar resultados — sempre com foco nas melhores soluções.
                </p>
                
                <div className="mt-8 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-secondary" />
                    <div className="text-sm">
                      <strong className="block">Atendimento personalizado</strong>
                      <span className="text-gray-600">Focado na sua necessidade</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* CTA Button */}
        <AnimatedSection className="text-center mt-12">
          <a href="#contato" className="btn-primary inline-block">
            Fale com um especialista
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
