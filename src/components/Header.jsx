import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { LogOut, User } from 'lucide-react'; // Manter o User apenas para Perfil se for usar em outro lugar
import useAuth from '../hooks/useAuth';

export default function Header({ toggleMenu }) {
  const { signed, signout } = useAuth();
  const navigate = useNavigate();

  // Estilos Comuns e Variáveis
  // -----------------------------------------------------------------

  const buttonBaseClass =
    'flex items-center justify-center font-mono h-[40px] font-black text-lg border-2 border-black rounded-md shadow-[4px_4px_#000] transition-all';

  // O Botão da Esquerda será sempre w-24 e preto, independentemente do estado
  const blackButtonClass = 'w-24 bg-black hover:bg-gray-700 text-white'; 

  // O Botão da Direita mantém a lógica de cores e largura
  const actionButtonClass = signed
    ? 'w-[100px] bg-red-500 hover:bg-red-600 text-white' // LOGADO: Sair (Vermelho, mais largo)
    : 'w-[170px] bg-blue-500 hover:bg-[#6495ed] text-black'; // DESLOGADO: Explorar Cursos (Azul, mais largo)

    const handleLogout = () => {
      signout();
      window.location.reload();
    };

  return (
    <header className="border-b-4 border-black bg-paper fixed top-0 w-full z-40 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-2">
        
        {/* Botão do Menu Lateral */}
        <button
          onClick={toggleMenu}
          className="bg-white hover:bg-blue-500 hover:text-black p-2 border-2 border-black rounded shadow-[2px_2px_#000]"
        >
          <TiThMenu className="text-xl" />
        </button>
        
        {/* Logo/Título Central */}
        <Link to="/" className="text-2xl font-black hover:text-blue-500 italic text-black">
          PLATAFORMA <span className="bg-black text-white px-2 -skew-x-6 transform">CURSOS</span>
        </Link>

        {/* Links/Botões de Ação na Direita */}
        <div className="flex gap-3">

          {/* 1. BOTÃO DA ESQUERDA (Entrar / Explorar Cursos) */}
          {signed ? (
            // Usuário LOGADO: Exibe botão Explorar Cursos (PRETO)
            <Link
              to="/courses" 
              className={`${buttonBaseClass} ${blackButtonClass}`}
            >
              Cursos
            </Link>
          ) : (
            // Usuário DESLOGADO: Exibe botão Entrar (PRETO)
            <Link
              to="/login"
              className={`${buttonBaseClass} ${blackButtonClass}`}
            >
              Entrar
            </Link>
          )}

          {/* 2. BOTÃO DA DIREITA (Explorar Cursos / Sair) */}
          {signed ? (
            // Usuário LOGADO: Exibe botão Sair (VERMELHO)
            <button
              onClick={handleLogout}
              className={`${buttonBaseClass} ${actionButtonClass} gap-2`}
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          ) : (
            // Usuário DESLOGADO: Exibe botão Explorar Cursos (AZUL)
            <Link
              to="/courses"
              className={`${buttonBaseClass} ${actionButtonClass}`}
            >
              Explorar Cursos
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}