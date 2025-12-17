//pages/teachers
import React from 'react';
import {teachers } from '../data/sampleData';
import { Mail } from 'lucide-react'; 

export default function Professors() { 
  
  const cardStyleClasses = "bg-white border-2 border-black shadow-[4px_4px_0px_black] hover:-translate-y-2 transition-transform duration-300 overflow-hidden flex flex-col";
  
  return (
    <div className="container mx-auto px-4">
      
      {/* Título Principal */}
      <div className="mb-1 text-center py-[100px]">
        <h1 className="text-5xl font-black uppercase mb-4 tracking-tighter">
          NOSSOS MESTRES
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conheça os profissionais experientes que guiarão sua jornada de aprendizado.
        </p>
      </div>

      {/* Grid dos Professores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher) => (
  
          <div 
            key={teacher.id} 
            className={cardStyleClasses}
          >
            
            {/* 1. Área do Avatar (Conteúdo fixo) */}
            <div className="h-32 bg-[#436adf] border-b-2 border-black relative">
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full border-2 border-black bg-white overflow-hidden shadow-md">
                  <img src={teacher.avatar} alt={teacher.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* 2. NOME E CARGO (Conteúdo fixo) */}
            <div className="pt-16 text-center pb-2">
              <h3 className="text-2xl font-black uppercase">
                {teacher.name}
              </h3>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                {teacher.role}
              </p>
            </div>
            
            {/* 🛑 3. BIO E ESPECIALIDADES (Agora um flex container para alinhar a bio no topo e as tags na base) */}
            <div className="p-4 text-center flex-grow flex flex-col justify-between"> 
              
              {/* Parágrafo da BIO (Ficará no topo) */}
              <p className="text-gray-700 font-medium mb-4">{teacher.bio}</p>
              
              {/* Badges/Tags de Especialidade (Ficará na base) */}
              <div className="flex flex-wrap justify-center gap-2 mt-auto"> {/* 🛑 ADICIONADO: mt-auto para empurrar para baixo */}
                {teacher.topics.map((spec, index) => (
                  <span 
                    key={index} 
                    className="border-2 border-black font-bold rounded-none bg-gray-50 px-3 py-1 text-xs uppercase"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* 4. LINK DE CONTATO (Email) - Ficará sempre no final */}
            {teacher.email && (
                <div className="p-4 border-t-2 border-black bg-gray-50">
                    <a 
                        href={`mailto:${teacher.email}`}
                        className="flex items-center justify-center gap-2 text-[#436adf] hover:text-blue-700 font-bold transition-colors duration-200"
                    >
                        <Mail className="w-5 h-5"/>
                        <span className="text-sm">{teacher.email}</span>
                    </a>
                </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
}