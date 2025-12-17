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
        window.location.reload();
      };

    return (
        <section className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-8 py-32 border-b-4 border-black">
            
            {/* Coluna da Esquerda: Texto, Título e Botões */}
            <div>
                
                {/* Etiqueta (Tag) */}
                <div className="inline-block bg-blue-500 border-4 border-black p-2 mb-4 shadow-[4px_4px_0px_#000] transform -rotate-2">
                <p className="text-sm font-bold uppercase tracking-wider text-black">EDUCAÇÃO PARA TODOS</p>
                </div>

                {/* Título Principal com Gradiente */}
                <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter text-black">
                    APRENDA <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                        SEM LIMITES
                    </span>
                </h1>

                {/* Parágrafo de Descrição com Linha Lateral */}
                <p className="mt-8 text-xl text-gray-700 font-medium max-w-lg mx-auto md:mx-0 border-l-4 border-[#CCFF00] pl-4">
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

            <div className="flex-1 relative">
                <div className="border-4 border-black shadow-[8px_8px_0px_#000] bg-white p-2 transform rotate-2 hover:rotate-0 transition-all duration-500">
                    <img src="https://static.vecteezy.com/system/resources/previews/047/784/205/non_2x/illustration-depicting-students-studying-on-laptops-surrounded-by-digital-resources-representing-the-evolution-of-education-free-vector.jpg" 
                        alt="alunos"
                        className="w-full h-auto object-cover border-2 border-black"
                    />
                </div>
            </div>
        </section>
    );
}