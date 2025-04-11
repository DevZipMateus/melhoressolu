
import { CheckCircle, Monitor, Code, Database, Settings } from 'lucide-react';
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
    'Desenvolvimento de sistemas próprios sob medida',
    'Consultoria em software para melhorar processos internos',
    'Coordenação de projetos e apoio na implantação de novas soluções',
    'Representação de plataformas consolidadas, com suporte técnico e estratégico'
  ];

  const iconMap = {
    desenvolvimento: <Code className="h-8 w-8 text-secondary" />,
    consultoria: <Monitor className="h-8 w-8 text-secondary" />,
    projetos: <Settings className="h-8 w-8 text-secondary" />,
    plataformas: <Database className="h-8 w-8 text-secondary" />
  };

  return (
    <section id="sobre-nós" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">
            Soluções em Sistemas
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          <AnimatedSection animation="slide-in-left">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                  alt="Tecnologia e desenvolvimento" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full z-0"></div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-up" className="space-y-6">
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
            
            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-secondary rounded-full"></span>
                  <span className="h-1.5 w-1.5 bg-secondary rounded-full"></span>
                  Nossos Diferenciais
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {diferenciais.map((diferencial) => (
                    <div key={diferencial} className="flex items-start gap-3 group">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-700">{diferencial}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-secondary rounded-full"></span>
                <span className="h-1.5 w-1.5 bg-secondary rounded-full"></span>
                O que fazemos
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicos.map((servico, index) => (
                  <Card key={servico} className="border-none shadow-md bg-white hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-3">
                        <div className="mb-2">
                          {Object.values(iconMap)[index]}
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-gray-700 text-sm">{servico}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-secondary rounded-full"></span>
                  <span className="h-1.5 w-1.5 bg-secondary rounded-full"></span>
                  Nosso Compromisso
                </h4>
                <p className="text-gray-600">
                  Mais do que oferecer sistemas, queremos ser um parceiro para o crescimento do seu negócio.
                  Estamos aqui para simplificar, modernizar e impulsionar resultados — sempre com foco nas melhores soluções.
                </p>
              </CardContent>
            </Card>
            
            <a href="#contato" className="btn-primary inline-block mt-4">
              Fale com um especialista
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
