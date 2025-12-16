import React, { useState, useEffect } from 'react'; // CORREÇÃO 1: Adicionado useState e useEffect
import { Clock, Calendar, User, MapPin } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function CourseDetailsModal({ course, teacher, onClose }) {
  
  const [isEnrolled, setIsEnrolled] = useState(false);
  const { signed, user, enrollCourse, unenrollCourse } = useAuth(); // CORREÇÃO 2: Adicionado user
  const navigate = useNavigate();
  const professor = teacher;

  // verifica se o curso já está na lista do usuario
  useEffect(()=> {
    // CORREÇÃO 3: Corrigido user.curses para user.courses
    if(signed && user && user.courses){
      const alreadyEnrolled = user.courses.some(c=> c.id === course.id);
      setIsEnrolled(alreadyEnrolled);
    }
  }, [signed, user, course.id]);

  const handleEnrollment = async () => {
  //============================
  //ROTA: USUARIO DESLOGADO
  //============================
    if(!signed){
      localStorage.setItem('redirect_after_login', `/account`);
      onClose();
      navigate('/login');
      return;
    }
    //se ja estiver matriculado, nao faz nada
    if(isEnrolled){
      toast.info("Você já está matriculado neste curso");
      return;
    }

    //==========================================
    //ROTA: USUARIO LOGADO E NAO MATRICULADO
    //==========================================

    const error = await enrollCourse(course.id);

    if(error){
      toast.error(`Falha na matrícula: ${error}`);
    } else {
      toast.success(`Matricula realizada com sucesso no curso: ${course.title}!`, {
        position: "top-right",
        autoClose:5000,
      });
      setIsEnrolled(true);
      onClose();
    }
  };

  //=========================
  // HANDLER: TRANCAR CURSO
  //=========================

  const handleUnenrollment = async () => {

    if(!window.confirm(`Tem certeza que deseja trancar o curso "${course.title}"?`)){
      return;
    }

    const error = await unenrollCourse(course.id);

    if(error) {
      toast.error(`Falha ao trancar o curso: ${error}`);
    } else {
      toast.success(`Curso trancado com sucesso: ${course.title}.`, {
        position: "top-right",
        autoClose: 5000,
      });
      setIsEnrolled(false);
      onClose();
    }
  };

  return (
    // ... (Resto do JSX do Modal) ...
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      
      {/* Container Principal do Modal*/}
      <div className="bg-white max-w-lg rounded-lg border-4 border-black shadow-[4px_4px_#000]"> 
        
        {/* HEADER AZUL*/}
        <div className="bg-blue-500 p-4 relative border-b-4 border-black">
            
            {/* Botão de Fechar no Header */}
            <button 
              onClick={onClose} 
              className="absolute top-2 right-4 w-6 h-6 flex justify-center items-center text-black border-2 border-black text-xl font-bold rounded shadow-[2px_2px_#000] transition-all duration-200 hover:bg-red-500 hover:text-black hover:translate-y-1 hover:translate-x-1 hover:shadow-none"
            >
              ✕
            </button>

            {/* Título e Tag */}
            <h3 className="text-2xl text-black font-extrabold mb-2 uppercase">
              {course.title}
            </h3>
            
            {/* Tag em um fundo azul mais claro, como solicitado */}
            <div className="inline-block text-black py-1 text-lg uppercase font-bold">
              {course.tag}
            </div>
        </div>
        
        {/* CORPO DO MODAL */}
        <div className="p-6 shadow-[6px_6px_#000]">
          
          {/* Descrição do Curso */}
          <p className="text-gray-950 mb-6">{course.desc}</p>
          
          {/* Bloco de Informações*/}
          {professor && (
            <div className="border-2 border-black p-4 grid grid-cols-2 gap-4">
              
              {/* Informação 1: Professor */}
              <div className="space-y-1 pr-4">
                <p className="text-sm">Professor</p>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-black"/>
                  <p className="font-bold text-sm text-gray-800">{professor.name}</p>
                </div>
              </div>

              {/* Informação 2: Dia */}
              <div className="space-y-1 pr-4">
              <p className="text-sm">Dia</p>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-black"/>
                  <p className="font-bold text-black">{course.day}</p>
                </div>
              </div>
              
              {/* Informação 3: Local*/}
              <div className="space-y-1 pr-4">
              <p className="text-sm">Local</p>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-black"/>
                  <p className="font-bold text-black">{course.location || 'Online/A definir'}</p>
                </div>
              </div>
              
              {/* Informação 4: Horário */}
              <div className="space-y-1 pr-4">
              <p className="text-sm">Horário</p>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-black"/>
                  <p className="font-bold text-black">{course.time}</p>
                </div>
              </div>

            </div>
          )}
          
          {/* Botão de Matrícula*/}
          <button
            onClick={isEnrolled ? handleUnenrollment : handleEnrollment}
            className={`w-full mt-8 px-8 py-3 border-4 border-black font-extrabold text-white text-lg transition-all duration-300
                ${isEnrolled
                    ? 'bg-gray-800 hover:shadow-[6px_6px_#000] hover:translate-y-[-1px] hover:bg-red-500 hover:text-black shadow-[2px_2px_#000]'
                    : 'bg-black hover:shadow-[6px_6px_#000] hover:translate-y-[-1px] hover:bg-gray-800 shadow-[2px_2px_#000]'
                }
              `}
          >
            {isEnrolled ? 'TRANCAR CURSO' : 'MATRICULAR-SE AGORA'}
          </button>
        </div>
      </div>
    </div>
  );
}