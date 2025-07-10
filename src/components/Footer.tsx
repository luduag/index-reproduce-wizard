
import React from 'react';
import { Phone, Mail, MapPin, Settings } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h3 className="text-xl font-bold">Brother's Pizzaria</h3>
            </div>
            <p className="text-gray-300 mb-4">
              As melhores pizzas da cidade, feitas com amor e ingredientes frescos desde 2020.
            </p>
            <p className="text-sm text-gray-400">
              © 2024 Todos os direitos reservados
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">contato@brotherspizzaria.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">Rua das Pizzas, 123 - Centro</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2 text-gray-300">
              <div>
                <span className="block">Segunda a Quinta: 18h - 23h</span>
              </div>
              <div>
                <span className="block">Sexta e Sábado: 18h - 00h</span>
              </div>
              <div>
                <span className="block">Domingo: 18h - 22h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Admin Panel */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center">
            <button className="flex items-center space-x-2 text-gray-400 hover:text-orange-500 transition-colors">
              <Settings className="h-4 w-4" />
              <span className="text-sm">Painel Administrativo</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
