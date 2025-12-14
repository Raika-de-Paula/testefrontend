import React from 'react';
import {teachers } from '../data/sampleData';
import { Link } from 'react-router-dom';

export default function Professors() { 
  
  const cardStyleClasses = "bg-white border-2 border-black shadow-[4px_4px_0px_black] hover:-translate-y-2 transition-transform duration-300 overflow-hidden";
  
  return (
    <div className="container mx-auto px-4 py-12">
      
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
        {teachers.map((teachers) => (
  
          <div 
            key={teachers.id} 
            className={cardStyleClasses}
          >
            
            {/* 1. Área do Avatar (Cabeçalho Visual) */}
            <div className="h-32 bg-[#436adf] border-b-2 border-black relative">
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 rounded-full border-2 border-black bg-white overflow-hidden shadow-md">
                  {/* O avatar está agora em teacher.avatar */}
                  <img src={teachers.avatar} alt={teachers.name} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            
            {/* 2. NOME E CARGO */}
            <div className="pt-16 text-center pb-2">
              <h3 className="text-2xl font-black uppercase">
                {teachers.name}
              </h3>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                {teachers.role}
              </p>
            </div>
            
            {/* 3. BIO E ESPECIALIDADES*/}
            <div className="p-4 text-center space-y-4">
              <p className="text-gray-700 font-medium">{teachers.bio}</p>
              
              {/* Badges/Tags de Especialidade */}
              <div className="flex flex-wrap justify-center gap-2">
                {teachers.topics.map((spec, index) => (
                  <span 
                    key={index} 
                    className="border-2 border-black font-bold rounded-none bg-gray-50 px-3 py-1 text-xs uppercase"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}