import React, { useState } from 'react';
import { Clock, Calendar, User} from 'lucide-react';
import CourseDetailsModal from './CourseDetailsModal'; 

export default function CardCourse({ course, teacher }) {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  
  const cardStyleClasses = "flex flex-col h-full border-2 border-black shadow-[4px_4px_0px_black] hover:-translate-y-1 hover:shadow-[6px_6px_0px_black] transition-all duration-300";
  const buttonStyleClasses = "w-full bg-brand text-white border-2 border-black font-black shadow-[4px_4px_0px_black] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_black] transition-all";

  return (
    <div className="relative">
      <article className={`bg-white rounded overflow-hidden ${cardStyleClasses}`}>
        
        {/* 1. ÁREA DO CABEÇALHO (Imagem e Tag) */}
        <div className="h-48 overflow-hidden border-b-2 border-black relative group">
          <img 
            src={course.image || '/data/sampleData'}
            alt={course.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badge/Tag no Canto */}
          <span className="absolute top-4 right-4 bg-black text-white border-2 border-white font-bold text-sm px-3 py-1 uppercase">
            {course.tag || 'CATEGORIA'}
          </span>
        </div>
        
        {/* 2. TÍTULO E DESCRIÇÃO */}
        <div className="p-4 pb-2">
          <h3 className="text-2xl font-black leading-tight uppercase line-clamp-2">
            {course.title}
          </h3>
          <p className="text-base font-medium text-gray-600 line-clamp-2 mt-1">
            {course.desc}
          </p>
        </div>
        
        {/* 3. CORPO */}
        <div className="flex-1 px-4 pt-2 pb-4 space-y-3">
          
          {/* Professor */}
          <div className="flex items-center gap-2 text-sm font-bold">
            <User size={18} />
            <span>{teacher?.name || 'Professor não encontrado'}</span>
          </div>
          
          {/* Dia */}
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={18} />
            <span>{course.day}</span>
          </div>
          
          {/* Horário */}
          <div className="flex items-center gap-2 text-sm">
            <Clock size={18} />
            <span>{course.time}</span>
          </div>
        </div>
        
        {/* 4. RODAPÉ (Botão) */}
        <div className="pt-4 p-4 border-t-2 border-black bg-gray-50">
          <button 
            // AÇÃO: Abre o modal
            onClick={() => setIsModalOpen(true)} 
            className={`px-4 py-2 text-base rounded ${buttonStyleClasses}`}
          >
            VER DETALHES
          </button>
        </div>
        
      </article>

      {isModalOpen && (
        <CourseDetailsModal 
          course={course} 
          teacher={teacher} 
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}