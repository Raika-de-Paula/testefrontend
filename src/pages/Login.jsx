import React, { useEffect, useState, useRef } from 'react';
// Importe os componentes de formulário
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm'; 
import { toast } from 'react-toastify';

export default function Login() {
    const [activeTab, setActiveTab] = useState('login'); 
    const hasToastShown = useRef(false);

    useEffect(()=> {
        const redirectPath = localStorage.getItem('redirect_after_login');

        if(redirectPath && !hasToastShown.current){

            hasToastShown.current = true;
            setTimeout(()=> {
                toast.info("Faça login para matricular-se",{
                    position: "top-right",
                    autoClose: 5000,
                });
                localStorage.removeItem('redirect_after_login');
            }, 100);
            return;
        }
    },[]);

    const tabClass = "w-full py-3 text-lg font-extrabold uppercase border-4 border-black shadow-[4px_4px_0px_#000] transition-all duration-200";

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            
            <div className="max-w-md w-full"> 
                <div className="flex gap-4 mb-4 z-10 relative"> 
                    
                    {/* Botão ENTRAR */}
                    <button 
                        className={`
                            ${tabClass} 
                            ${activeTab === 'login' 
                                ? 'bg-black text-white shadow-none' 
                                : 'bg-white text-black hover:shadow-[6px_6px_0px_#000] hover:translate-y-[-2px]' 
                            }
                        `}
                        onClick={() => setActiveTab('login')}
                    >
                        ENTRAR
                    </button>

                    {/* Botão CRIAR CONTA */}
                    <button 
                        className={`
                            ${tabClass} 
                            ${activeTab === 'register' 
                                ? 'bg-blue-500 text-black shadow-none' 
                                : 'bg-white text-black hover:shadow-[6px_6px_0px_#000] hover:translate-y-[-2px]' 
                            }
                        `}
                        onClick={() => setActiveTab('register')}
                    >
                        CRIAR CONTA
                    </button>
                </div>
                
                {/* Formulário Container */}
                <div className="bg-white border-4 border-black shadow-[4px_4px_0px_#000] relative">
                    {activeTab === 'login' 
                        ? <LoginForm /> 
                        // 🟢 PASSA A FUNÇÃO DE ESTADO COMO PROP PARA O CADASTRO
                        : <RegisterForm setActiveTab={setActiveTab} /> 
                    }
                </div>
            </div>
        </div>
    );
}