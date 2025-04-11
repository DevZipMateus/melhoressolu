
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Melhores Soluções</h3>
            <p className="text-gray-400 mb-6">
              Soluções completas em sistemas para empresas de todos os portes, com foco em eficiência e resultados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/melhores.solucoes/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#serviços" className="hover:text-white transition-colors">Desenvolvimento de Sistemas</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Consultoria em Software</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Implantação de Sistemas</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Manutenção de Notebooks</a></li>
              <li><a href="#serviços" className="hover:text-white transition-colors">Suporte Técnico</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Responsável</h3>
            <div className="text-gray-400">
              <p>Marcos Garcia Machado</p>
              <p className="mt-4">Especialista em desenvolvimento de sistemas e soluções personalizadas para empresas.</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3" />
                </div>
                <div>
                  <p>(64) 98403-1762</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3" />
                </div>
                <div>
                  <p>melhoressolucoes@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mt-1 mr-3 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3" />
                </div>
                <div>
                  <p>Rua U10, Qd. 06, Lote 9B<br />Rio Verde/GO</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} Melhores Soluções. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
