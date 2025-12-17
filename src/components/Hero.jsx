import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { LogOut } from 'lucide-react';

export default function Hero() {
    const { signed, signout } = useAuth();
    const navigate = useNavigate();

    // Estilos comuns para os botões
    const buttonClass = "h-14 px-8 text-lg flex items-center border-2 border-black font-mono font-black shadow-[4px_4px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_black] transition-all";

    // Estilos específicos
    // Cor do Botão Esquerda (Preto)
    const blackButtonClass = "bg-black text-white hover:bg-gray-800";
    // Cor do Botão Direita (Azul ou Vermelho para Sair)
    const actionButtonClass = signed ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-500 text-black hover:bg-[#6495ed]";
    
    // Função de Logout
    const handleLogout = () => {
        signout();
        navigate('/');
        onClose();
        setTimeout(()=> {
          navigate('/');
        }, 0);
      };

    return (
        <section className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8 py-32 border-b-4 border-black">
            
            {/* Coluna da Esquerda: Texto, Título e Botões */}
            <div>
                
                {/* Etiqueta (Tag) */}
                <div className="inline-block font-black text-sm bg-blue-500 text-black border-2 border-black px-3 py-1 shadow-[3px_3px_#000]">
                    EDUCAÇÃO PARA TODOS
                </div>

                {/* Título Principal com Gradiente */}
                <h1 className="text-7xl font-extrabold mt-4">
                    APRENDA <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        SEM LIMITES
                    </span>
                </h1>

                {/* Parágrafo de Descrição com Linha Lateral */}
                <p className="mt-14 text-xl font-medium text-black max-w-md border-l-4 border-blue-500 pl-4">
                    Cursos gratuitos de alta qualidade com os melhores professores do mercado. Comece sua jornada hoje.
                </p>
                
                {/* Botões de Ação */}
                <div className="mt-14 flex gap-3">
                    
                    {/* 1. BOTÃO DA ESQUERDA (Entrar -> Explorar Cursos) - COR PRETA */}
                    {signed ? (
                        // LOGADO: Explorar Cursos
                        <Link
                            to="/courses"
                            className={`${buttonClass} ${blackButtonClass}`}
                        >
                            Explorar Cursos
                        </Link>
                    ) : (
                        // DESLOGADO: Entrar
                        <Link
                            to="/Login"
                            className={`${buttonClass} ${blackButtonClass}`}
                        >
                            Entrar
                        </Link>
                    )}
                    
                    {/* 2. BOTÃO DA DIREITA (Explorar Cursos -> Sair) - COR AZUL/VERMELHO */}
                    {signed ? (
                        // LOGADO: Sair
                        <button
                            onClick={handleLogout}
                            className={`${buttonClass} ${actionButtonClass} gap-2`} // actionButtonClass = red
                        >
                            <LogOut className="w-5 h-5" />
                            Sair
                        </button>
                    ) : (
                        // DESLOGADO: Explorar Cursos
                        <Link
                            to="/courses" 
                            className={`${buttonClass} ${actionButtonClass}`} // actionButtonClass = blue
                        >
                            Explorar Cursos
                        </Link>
                    )}
                </div>
            </div>
            
            {/* Coluna da Direita: Imagem/Ilustração */}
            <div className="p-6 border shadow-[6px_6px_0px_black] shadow-black bg-white border-black border-4">
                <img src="/src/assets/hero-illustration.jpg" alt="alunos" />
            </div>
            
        </section>
    );
}