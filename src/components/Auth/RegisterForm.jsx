import React, { useState } from 'react';
import { DatePicker } from 'antd';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
// Não precisamos do useNavigate se estamos usando setActiveTab

// 1. Defina o componente e receba setActiveTab como prop
const RegisterForm = ({ setActiveTab }) => { 
    const { signup } = useAuth();
    const [error, setError]= useState('');

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '',
        telefone: '',
        email: '',
        senha: '',
    });

    // ... (handleInputChange e handleDateChange permanecem os mesmos)
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        setError('');
    };
    
    const handleDateChange = (date, dateString) => {
        setFormData(prev => ({ ...prev, dataNascimento: dateString }));
        setError('');
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');

        const { nome, email, senha, cpf, dataNascimento, telefone } = formData;

        if (!nome || !email || !senha || !cpf || !dataNascimento || !telefone) {
            setError("Preencha todos os campos do formulário para prosseguir.");
            return;
        }

        const res = await signup(nome, email, senha, cpf, dataNascimento, telefone);

        if (res) {
            setError(res);
            return;
        }

        toast.success("Cadastro realizado com sucesso", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        // 🟢 MUDANÇA PARA MUDAR O ESTADO DO PAI, NÃO USAR navigate
        setTimeout(()=> {
            setActiveTab('login'); // Volta para a aba de Login
        }, 500);
    };

    return (
        <div className="p-0">
            {/* ... (Todo o JSX do formulário, incluindo o header, inputs e botão) ... */}
            
            <div className="bg-blue-500 text-black p-6 mb-8">
                <h2 className="text-xl font-extrabold uppercase mb-1">NOVO ALUNO</h2>
                <p className="text-sm">Preencha seus dados para começar a estudar.</p>
            </div>
            
            <form className="space-y-6 px-8 pb-8" onSubmit={handleRegister}>
                
                {error && <p className="text-red-500 text-center font-bold">{error}</p>}

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
                            onChange={handleDateChange}
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
};

// 2. Exporte o componente
export default RegisterForm;