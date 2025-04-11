
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
const ContactSection = () => {
  return <section id="contato" className="py-16 bg-gradient-to-b from-secondary/80 to-white">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle">
            Estamos prontos para atender suas necessidades e responder suas dúvidas
          </p>
        </AnimatedSection>

        <div className="mt-8">
          <AnimatedSection animation="slide-in-left">
            <div className="glass-card rounded-xl p-6 sm:p-8 border-secondary/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Telefone */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Telefone</h4>
                    <p className="text-sm text-gray-600">(64) 98403-1762</p>
                    <a href="https://wa.me/5564984031762" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-primary mt-1 hover:underline">
                      <img src="/whatsapp1.png" alt="WhatsApp" className="h-5 w-5 mr-1" />
                      Fale pelo WhatsApp
                    </a>
                  </div>
                </div>
                
                {/* E-mail */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">E-mail</h4>
                    <p className="text-sm text-gray-600 break-words">melhoressolucoes@gmail.com</p>
                  </div>
                </div>
                
                {/* Endereço */}
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-medium">Endereço</h4>
                    <p className="text-sm text-gray-600">Rua U10, Qd. 06, Lote 9B<br />Rio Verde/GO</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Nossa Localização</h4>
                <div className="h-80 w-full rounded-lg overflow-hidden">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.8991451987707!2d-48.27931678255616!3d-18.165512500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a66653e54188bd%3A0x42bdb58ff47b80da!2sR.%20U-10%2C%209B%20-%20Jardim%20Pampulha%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038408-488!5e0!3m2!1spt-BR!2sbr!4v1681222456348!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização da Melhores Soluções"></iframe>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default ContactSection;
