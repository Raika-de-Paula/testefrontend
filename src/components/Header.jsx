import React from 'react';
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";


export default function Header({ toggleMenu }) {
  return (
    <header className="border-b-2 border-black bg-paper fixed top-0 w-full z-40 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-2">
        
        {/* Botão do Menu Lateral */}
        <button
          onClick={toggleMenu}
          className="bg-white hover:bg-blue-500 hover:text-black p-2 border-2 border-black rounded shadow-[2px_2px_#000]"
        >
          <TiThMenu className="text-xl" />
        </button>
        
        {/* Logo/Título Central */}
        <Link to="/" className="text-2xl font-bold hover:text-blue-500">
          PLATAFORMA <span className="bg-black text-white px-2 rounded">CURSOS</span>
        </Link>

        {/* Links/Botões de Ação na Direita */}
        <div className="flex gap-3">

          {/* Botão Entrar */}
          <Link
            to="/login"
            className="bg-black hover:bg-gray-700 text-white flex items-center justify-center font-mono w-24 h-[40px] font-black text-lg border-2 border-black rounded-md shadow-[4px_4px_#000] transition-all"
          >
            Entrar
          </Link>

          {/* Botão Explorar Cursos */}
          <Link
            to="/courses"
            className="bg-blue-500 hover:bg-[#6495ed] text-black flex items-center justify-center font-mono w-[170px] h-[40px] font-black text-lg border-2 border-black rounded-md shadow-[4px_4px_#000] transition-all"
          >
            Explorar Cursos
          </Link>
          
        </div>
      </div>
    </header>
  );
}