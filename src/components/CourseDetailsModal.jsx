//components/CourseDetailsModal

import React, { useState, useEffect } from 'react';
import { Clock, Calendar, User, MapPin,  CalendarClock } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Alert, Button, Space } from 'antd'; 

export default function CourseDetailsModal({ course, teacher, onClose }) {
  
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { signed, user, enrollCourse, unenrollCourse } = useAuth();
  const navigate = useNavigate();
  const professor = teacher;

  // verifica se o curso já está na lista do usuario
  useEffect(()=> {
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
    if(isEnrolled){
      toast.info("Você já está matriculado neste curso");
      return;
    }

    //==========================================
    //ROTA: USUARIO LOGADO E NAO MATRICULADO
    //==========================================
    const courseWhithFullData = {
      ...course,
      teacherEmail: professor?.email,
      teacherName: professor?.name || course.teacher
    };

    const error = await enrollCourse(courseWhithFullData);

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

  const handleUnenrollment = () =>{
    setShowAlert(true); // Apenas mostra o alerta
  };

  const confirmUnenrollment = async () => {
    setShowAlert(false); // Esconde o alerta antes de chamar o backend
    
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
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      
      {/* Container Principal do Modal*/}
      <div className="bg-white max-w-lg rounded-lg border-4 border-black shadow-[4px_4px_#000] relative">
        
        {/* ALERTA DE CONFIRMAÇÃO (SOBREPOSIÇÃO) */}
        {showAlert && (
          <div className="absolute inset-0 bg-white/90 z-10 p-6 rounded-lg">
            <Alert
              style={{
                border: '3px solid black', // border-4 border-black
                borderRadius: 0,
                boxShadow: '4px 4px 0px #000', // shadow-[4px_4px_0px_#000]
                backgroundColor: 'white', // Fundo branco
                padding: '20px',
              }}
              title="Confirmação Necessária"
              description={`Tem certeza que deseja trancar o curso "${course.title}"?`}
              type="warning"
              showIcon
              action={
                <Space direction="vertical">
                  <Button
                    size="small"
                    type="primary"
                    style={{
                        backgroundColor: 'bg-red-500', // bg-red-600
                        borderColor: 'black', // border-black
                        color: 'white',
                        fontWeight: 'bold', // font-extrabold
                        borderRadius: 0,
                        boxShadow: '3px 3px 0px black', // shadow-[3px_3px_0px_#000]
                    }}
                    onClick={confirmUnenrollment} // Chama a função de remoção
                    >
                      TRANCAR CURSO
                    </Button>
                    <Button
                        size="small"
                        danger
                        ghost
                        className="w-full"
                        style={{
                            borderColor: 'black', 
                            color: 'black', 
                            fontWeight: 'bold', 
                            borderRadius: 0,
                            boxShadow: '3px 3px 0px black',
                        }}
                        onClick={()=> setShowAlert(false)} // Cancela, apenas esconde o alerta
                        >
                          CANCELAR
                        </Button>
                </Space>
              }
              closable
              onClose={() => setShowAlert(false)}
              />
              </div>
        )}
        
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
              <p className="text-sm">Duração</p>
                <div className="flex items-center space-x-2">
                  <CalendarClock className="w-5 h-5 text-black"/>
                  <p className="font-bold text-black">{course.duration || 'indefinido'}</p>
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
                    ? 'bg-red-600 hover:shadow-[6px_6px_#000] hover:translate-y-[-1px] hover:bg-red-700 shadow-[2px_2px_#000]' // Cor vermelha para Trancar
                    : 'bg-black hover:shadow-[6px_6px_#000] hover:translate-y-[-1px] hover:bg-gray-800 shadow-[2px_2px_#000]' // Cor padrão para Matricular
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