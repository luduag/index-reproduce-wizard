
import React from 'react';
import { ShoppingCart, User, LogOut, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Brother's Pizzaria</h1>
              <p className="text-sm text-gray-600">As melhores pizzas da cidade</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="flex items-center space-x-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Carrinho</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Meus Pedidos</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Olá, Cliente</span>
            </Button>
            <Button variant="ghost" className="flex items-center space-x-2">
              <LogOut className="h-4 w-4" />
              <span>Sair</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
