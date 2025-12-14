import React from 'react';
import { Link } from 'react-router-dom';

export default function Teacher() {
  return (
    <section className="py-16 bg-black text-white border-2 border-black neo-shadow-lg mb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* Retângulo Preto (Container Principal) */}
        <div className="bg-black text-white w-full h- text-center border-4 border-black shadow-[0.5rem_0.5rem_0_0_#000]">
          
          {/* Título Principal */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Quem ensina faz a diferença
          </h2>
          
          {/* Subtítulo / Descrição */}
          <p className="text-lg md:text-xl font-medium mb-10 text-gray-200">
            Conheça nossa equipe de professores dedicados a transformar sua carreira através da educação.
          </p>
          
          {/* Botão de Ação (Estilo Invertido) */}
          <Link 
            to="/teachers"
            className="inline-block hover:bg-blue-500 transition-all bg-white text-black font-sans px-8 py-3 font-black text-lg rounded-lg hover:scale-110"
          >
            CONHEÇA NOSSOS PROFESSORES
          </Link>
          
        </div>
      </div>
    </section>
  );
}