import React from 'react';
import { Link } from 'react-router-dom';

export default function Teacher() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        
        <div className="bg-black text-white w-full py-8 px-4 md:py-24 md:px-8 text-center border-4 border-black shadow-[8px_8px_0px_#000] rounded-none">
          
          {/* Título Principal - Aumentei o tamanho e a margem */}
          <h2 className="text-2xl md:text-6xl font-black uppercase mb-6 tracking-tighter">
            Quem ensina faz a diferença
          </h2>
          
          {/* Subtítulo / Descrição - Aumentei o max-width para o texto respirar */}
          <p className="text-xl md:text-2xl font-bold mb-12 text-gray-300 max-w-3xl mx-auto">
            Conheça nossa equipe de professores dedicados a transformar sua carreira através da educação.
          </p>
          
          {/* Botão de Ação */}
          <Link 
            to="/teachers"
            className="inline-block hover:bg-blue-500 transition-all bg-white text-black font-sans px-10 py-4 font-black text-lg rounded-lg hover:scale-110"
          >
            CONHEÇA NOSSOS PROFESSORES
          </Link>
          
        </div>
      </div>
    </section>
  );
}