
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Melhores Soluções
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h3>
            <p className="text-gray-400 mb-6">
              Soluções completas em sistemas para empresas de todos os portes, com foco em eficiência e resultados.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/melhores.solucoes/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Serviços
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="transition-transform hover:translate-x-1">
                <a href="#serviços" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Desenvolvimento de Sistemas
                </a>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <a href="#serviços" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Consultoria em Software
                </a>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <a href="#serviços" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Implantação de Sistemas
                </a>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <a href="#serviços" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Manutenção de Notebooks
                </a>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <a href="#serviços" className="hover:text-secondary transition-colors flex items-center gap-2">
                  Suporte Técnico
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Responsável
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h3>
            <div className="text-gray-400">
              <p className="font-medium text-white">Marcos Garcia Machado</p>
              <p className="mt-4">Especialista em desenvolvimento de sistemas e soluções personalizadas para empresas.</p>
              <div className="bg-gray-800 p-4 rounded-lg mt-4 hover:bg-gray-700 transition-colors">
                <p className="text-sm italic">
                  "Comprometido em oferecer tecnologia de ponta para impulsionar o crescimento do seu negócio."
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 relative inline-block">
              Contato
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start group">
                <div className="ml-3">
                  <p className="font-medium text-white group-hover:text-secondary transition-colors">(64) 98403-1762</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta, 8h-18h</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="ml-3">
                  <p className="font-medium text-white group-hover:text-secondary transition-colors">melhoressolucoes@gmail.com</p>
                  <p className="text-sm text-gray-500">Atendimento online</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="ml-3">
                  <p className="font-medium text-white group-hover:text-secondary transition-colors">Rua U10, Qd. 06, Lote 9B</p>
                  <p className="text-gray-500">Rio Verde/GO</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} <span className="text-white">Melhores Soluções</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
