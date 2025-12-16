import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// 1. Defina o componente
const LoginForm = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError("Preencha todos os campos.");
            return;
        }

        const res = await signin(email, password);

        if (res) {
            setError(res);
        } else {
            navigate("/"); 
        }
    };

    return (
        <div className="p-0"> 
            
            <div className="bg-black text-white p-6 mb-8">
                <h2 className="text-xl font-extrabold uppercase mb-1">BEM-VINDO DE VOLTA</h2>
                <p className="text-sm">Entre para acessar seus cursos e horários.</p>
            </div>
            
            <form className="space-y-6 px-8 pb-8" onSubmit={handleLogin}> 
                
                {error && <p className="text-red-500 text-center font-bold text-sm">{error}</p>}
                
                {/* Campo Email */}
                <div className="space-y-1">
                    <label htmlFor="email-login" className="block text-sm font-bold uppercase">EMAIL</label>
                    <input 
                        type="email" 
                        id="email-login" 
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError('')]}
                        className="w-full border-2 border-black p-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500"
                    />
                </div>
                
                {/* Campo Senha */}
                <div className="space-y-1">
                    <label htmlFor="senha-login" className="block text-sm font-bold uppercase">SENHA</label>
                    <input 
                        type="password" 
                        id="senha-login" 
                        value={password}
                        onChange={(e) => [setPassword(e.target.value), setError('')]}
                        className="w-full border-2 border-black p-2 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500"
                    />
                </div>
                
                {/* Botão Acessar Conta */}
                <button 
                    type="submit"
                    className="
                        w-full py-2 mt-6 
                        bg-blue-500 text-black font-extrabold text-lg uppercase 
                        border-4 border-black 
                        shadow-[4px_4px_0px_#000] 
                        transition-all duration-200 
                        hover:translate-x-1 hover:translate-y-1 hover:shadow-none
                    "
                >
                    ACESSAR CONTA
                </button>
            </form>
        </div>
    );
};

// 2. Exporte o componente
export default LoginForm;