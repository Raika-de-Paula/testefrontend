//arquivo pages/login
import React, { useState } from 'react';
import {DatePicker, Alert} from 'antd';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


//ENTRAR
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

        // Chama a função signin do AuthContext
        const res = await signin(email, password);

        if (res) {
            // Se houver erro (E-mail ou senha incorretos, Usuário não cadastrado)
            setError(res);
        } else {
            // Se o login for bem-sucedido, redireciona para a página inicial
            navigate("/"); 
        }
    };

    return (
        <div className="p-0"> 
            
            <div className="bg-black text-white p-6 mb-8">
                <h2 className="text-xl font-extrabold uppercase mb-1">BEM-VINDO DE VOLTA</h2>
                <p className="text-sm">Entre para acessar seus cursos e horários.</p>
            </div>
            
            {/* O formulário agora chama handleLogin no submit */}
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
}

//CRIAR CONTA
const RegisterForm = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [error, setError]= useState('');

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '', // Será a string 'DD/MM/AAAA'
        telefone: '',
        email: '',
        senha: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        setError('');
    };
    
    // Função para tratar a mudança no DatePicker
    const handleDateChange = (date, dateString) => {
        setFormData(prev => ({ ...prev, dataNascimento: dateString }));
        setError('');
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(''); // Limpa erros anteriores

        const { nome, email, senha, cpf, dataNascimento, telefone } = formData;

        // 🛑 VALIDAÇÃO DE CAMPOS VAZIOS
        if (!nome || !email || !senha || !cpf || !dataNascimento || !telefone) {
            setError("Preencha todos os campos do formulário para prosseguir.");
            return;
        }

        // Chamada à função signup do AuthContext
        // NOTE: signup espera os argumentos na ordem: (nome, email, password, cpf, dataNascimento, telefone)
        const res = await signup(nome, email, senha, cpf, dataNascimento, telefone);

        if (res) {
            // Se 'res' retornar uma string, é uma mensagem de erro do AuthContext (CPF/E-mail já existem ou CPF inválido)
            setError(res);
            return;
        }

        <Alert title="Cadastro realizado com sucesso!" type="success" showIcon />
        // Se o cadastro for bem-sucedido
        navigate("/login"); // Redireciona para o login após o cadastro
    };


    return (
        <div className="p-0">
            {/* HEADER */}
            <div className="bg-blue-500 text-black p-6 mb-8">
                <h2 className="text-xl font-extrabold uppercase mb-1">NOVO ALUNO</h2>
                <p className="text-sm">Preencha seus dados para começar a estudar.</p>
            </div>
            
            <form className="space-y-6 px-8 pb-8" onSubmit={handleRegister}>
                
                {error && <p className="text-red-500 text-center font-bold">{error}</p>}

                {/* ... (Resto dos campos de input e DatePicker - mantidos) ... */}
                
                {/* Linha 1: Nome Completo */}
                <div className="space-y-1">
                    <label htmlFor="nome" className="block text-sm font-bold uppercase">NOME COMPLETO</label>
                    <input type="text" id="nome" value={formData.nome} onChange={handleInputChange} className="w-full border-2 border-black p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Linha 2: CPF e Nascimento */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label htmlFor="cpf" className="block text-sm font-bold uppercase">CPF</label>
                        <input type="text" id="cpf" value={formData.cpf} onChange={handleInputChange} placeholder="000.000.000-00" className="w-full border-2 border-black p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="dataNascimento" className="block text-sm font-bold uppercase"> DATA DE NASCIMENTO</label>
                        <DatePicker 
                            id="dataNascimento"
                            format="DD/MM/YYYY" 
                            style={{ width: "100%", border: "2px solid black", padding: "8px 12px", borderRadius: 0, boxShadow: 'none' }} 
                            placeholder="DD/MM/AAAA" 
                            onChange={handleDateChange} // Chama a função para salvar a data
                        />
                    </div>
                </div>

                {/* Linha 3: Telefone */}
                <div className="space-y-1">
                    <label htmlFor="telefone" className="block text-sm font-bold uppercase">TELEFONE</label>
                    <input type="tel" id="telefone" value={formData.telefone} onChange={handleInputChange} placeholder="(00) 00000-0000" className="w-full border-2 border-black p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                {/* Linha 5: Email */}
                <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-bold uppercase">EMAIL</label>
                    <input type="email" id="email" value={formData.email} onChange={handleInputChange} className="w-full border-2 border-black p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                {/* Linha 6: Senha */}
                <div className="space-y-1">
                    <label htmlFor="senha" className="block text-sm font-bold uppercase">SENHA</label>
                    <input type="password" id="senha" value={formData.senha} onChange={handleInputChange} className="w-full border-2 border-black p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                
                {/* Botão Criar Cadastro */}
                <button type="submit" className="w-full py-2 mt-6 bg-black text-white font-extrabold text-lg uppercase border-4 border-black shadow-[4px_4px_0px_#000] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
                    CRIAR CADASTRO
                </button>
            </form>
        </div>
    );
}


// Componente Principal: Login/Registro com Alternância de Abas
export default function Login() {
    const [activeTab, setActiveTab] = useState('login'); // 'entrar' ou 'criar conta'

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
                    {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
                </div>
            </div>
        </div>
    );
}