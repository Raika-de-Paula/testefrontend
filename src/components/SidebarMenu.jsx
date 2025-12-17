import { Link, useNavigate} from 'react-router-dom';
import { FiHome } from "react-icons/fi";
import { User, BookOpen, LogOut, UserCircle} from 'lucide-react';
import useAuth from '../hooks/useAuth';
import React, { useState, useEffect } from 'react';

export default function SidebarMenu({ open, onClose }) {

  const { signed, signout } = useAuth();
  const navigate = useNavigate();

  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    signout();
    navigate('/');
    onClose();
    setTimeout(()=> {
      navigate('/');
    }, 0);
  };

  const linkClass = "flex items-center gap-4 w-full px-4 py-2 border-2 border-white font-black hover:border-2 hover:border-black hover:bg-blue-500 transition-colors duration-150";

  return (
    <>
    <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300
          ${open ? 'opacity-50 z-40' : 'opacity-0 -z-10 pointer-events-none'}`} 
        onClick={onClose} />
        
    <aside
      className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl transform transition-transform  duration-300 z-50 flex flex-col
        ${open ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="p-4 bg-blue-500 border-2 border-black flex justify-between items-center">
        <h3 className="font-bold text-lg">MENU</h3>
        {/* Botão de Fechar */}
        <button onClick={onClose} className="flex items-center justify-center bg-blue-500 w-[23px] h-[23px] rounded-sm border-2 border-black hover:bg-red-500 text-black font-black">
        X
        </button>
      </div>
      
      {/* Links de Navegação */}
      <nav 
        // 🛑 CORREÇÃO 3: Adicione 'flex-grow' para a lista de links ocupar o espaço restante
        className="p-4 flex flex-col gap-3 flex-grow overflow-y-auto"
      >
      <Link 
        to="/" 
        className="flex items-center gap-4 w-full px-4 py-2 hover:border-spacing-[6px] border-2 border-white font-black hover:border-2 hover:border-black hover:bg-blue-500" onClick={onClose}>
          <FiHome className="text-2xl stroke-[3px]"/>
           Início
        </Link>

        <Link 
        to="/teachers" 
        className="flex items-center gap-4 w-full px-4 py-2 hover:border-spacing-[7px] border-2 border-white font-black hover:border-2 hover:border-black hover:bg-blue-500" onClick={onClose}>
          <User className="text-2xl stroke-[3px]"/>
          Professores
        </Link>

        <Link 
        to="/courses" 
        className="flex items-center gap-4 w-full px-4 py-2 hover:border-spacing-[7px] border-2 border-white font-black hover:border-2 hover:border-black hover:bg-blue-500" onClick={onClose}>
          <BookOpen className="text-2xl stroke-[3px]"/>
          Cursos
        </Link>

        {signed &&(
            <Link
            to="/account"
            className="flex items-center gap-4 w-full px-4 py-2 hover:border-spacing-[7px] border-2 border-white font-black hover:border-2 hover:border-black hover:bg-blue-500" onClick={onClose}>
              <UserCircle className="text-2xl stroke-[3px]"/>
              Conta
            </Link>
        )}
      </nav>
      
      {/* 🛑 RODAPÉ: O mt-auto funcionará agora, pois flex-grow está aplicado acima. */}
      {signed && (
                <div className="p-4 pt-6 border-t-4 border-black mt-auto">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 w-full px-4 py-2 bg-red-500 text-white border-2 border-black font-extrabold uppercase shadow-[2px_2px_0px_#000] hover:bg-red-600 transition-all duration-150 justify-center"
                    >
                        <LogOut className="text-xl"/>
                        Sair da Conta
                    </button>
                </div>
            )}
    </aside>
    </>
  );
}