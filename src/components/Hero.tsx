
import React from 'react';
import { ShoppingCart, Clock, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pizza-gradient pizza-pattern min-h-[500px] flex items-center justify-center text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          Brother's Pizzaria
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto drop-shadow">
          As melhores pizzas da cidade, feitas com amor e ingredientes frescos
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg"
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Fazer Pedidos
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 font-medium"
          >
            <Clock className="mr-2 h-4 w-4" />
            Meus Pedidos
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 font-medium"
          >
            <Percent className="mr-2 h-4 w-4" />
            Ver Promoções
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
