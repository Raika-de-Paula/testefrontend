import React, { useState } from 'react';
import { DatePicker } from 'antd';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';
import dayjs from 'dayjs'; // Recomendado para o DatePicker do AntD v5

const RegisterForm = ({ setActiveTab }) => {
    const { signup } = useAuth();
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        dataNascimento: '',
        telefone: '',
        email: '',
        senha: '',
    });

    // --- Máscaras de Input ---
    const maskCPF = (value) => {
        return value
            .replace(/\D/g, '')
            .slice(0, 11)
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    };

    const maskPhone = (value) => {
        return value
            .replace(/\D/g, '')
            .slice(0, 11)
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2');
    };

    // --- Handlers ---
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setError('');

        if (id === 'cpf') {
            setFormData(prev => ({ ...prev, cpf: maskCPF(value) }));
            return;
        }

        if (id === 'telefone') {
            setFormData(prev => ({ ...prev, telefone: maskPhone(value) }));
            return;
        }

        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const validateOnBlur = (e) => {
        const { id, value } = e.target;
        const digits = value.replace(/\D/g, '');
    
        if (id === 'cpf' && digits.length > 0 && digits.length < 11) {
            setError("O CPF deve ter 11 dígitos.");
        } 
        else if (id === 'telefone' && digits.length > 0 && digits.length < 11) {
            setError("O Telefone deve ter 11 dígitos (DDD + Número).");
        }
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

        toast.success("Cadastro realizado com sucesso!", {
            position: "top-right",
            autoClose: 3000,
        });

        setTimeout(() => {
            setActiveTab('login');
        }, 1500);
    };

    return (
        <div className="p-0 border-2 border-black bg-white shadow-[8px_8px_0px_#000]">
            {/* Header do Formulário */}
            <div className="bg-blue-500 text-black p-6 border-b-4 border-black">
                <h2 className="text-2xl font-black uppercase mb-1 italic">Novo Aluno</h2>
                <p className="text-sm font-bold uppercase tracking-tight">Preencha seus dados para começar a estudar.</p>
            </div>

            <form className="space-y-5 px-8 py-8" onSubmit={handleRegister}>
                
                {error && (
                    <div className="bg-red-100 border-2 border-red-600 p-2 text-red-600 text-center font-black uppercase text-xs">
                        {error}
                    </div>
                )}

                {/* Campo: Nome Completo */}
                <div className="space-y-1">
                    <label htmlFor="nome" className="block text-xs font-black uppercase text-black">Nome Completo</label>
                    <input
                        type="text"
                        id="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="SEU NOME COMPLETO"
                        className="w-full border-2 border-black p-2 text-sm font-bold focus:bg-yellow-50 outline-none focus:outline-none focus:ring-4 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Linha: CPF e Nascimento */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label htmlFor="cpf" className="block text-xs font-black uppercase text-black">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            value={formData.cpf}
                            onChange={handleInputChange}
                            onBlur={validateOnBlur}
                            placeholder="000.000.000-00"
                            className="w-full border-2 border-black p-2 text-sm font-bold focus:bg-yellow-50 outline-none focus:outline-none focus:ring-4 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-xs font-black uppercase text-black ">Data de Nascimento</label>
                        <DatePicker
                            format="DD/MM/YYYY"
                            placeholder="DD/MM/AAAA"
                            onChange={handleDateChange}
                            className="w-full"
                            style={{
                                border: '2px solid black',
                                padding: '8px',
                                borderRadius: '0px',
                                fontWeight: 'bold'
                            }}
                        />
                    </div>
                </div>

                {/* Campo: Telefone */}
                <div className="space-y-1">
                    <label htmlFor="telefone" className="block text-xs font-black uppercase text-black">Telefone / WhatsApp</label>
                    <input
                        type="tel"
                        id="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        onBlur={validateOnBlur}
                        placeholder="(00) 00000-0000"
                        className="w-full border-2 border-black p-2 text-sm font-bold focus:bg-yellow-50 outline-none focus:outline-none focus:ring-4 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Campo: Email */}
                <div className="space-y-1">
                    <label htmlFor="email" className="block text-xs font-black uppercase text-black">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        className="w-full border-2 border-black p-2 text-sm font-bold focus:bg-yellow-50 outline-none focus:outline-none focus:ring-4 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Campo: Senha */}
                <div className="space-y-1">
                    <label htmlFor="senha" className="block text-xs font-black uppercase text-black">Senha de Acesso</label>
                    <input
                        type="password"
                        id="senha"
                        value={formData.senha}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="w-full border-2 border-black p-2 text-sm font-bold focus:bg-yellow-50 outline-none focus:outline-none focus:ring-4 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Botão de Ação */}
                <button
                    type="submit"
                    className="w-full py-4 mt-4 bg-green-500 text-black font-black text-xl uppercase border-4 border-black shadow-[6px_6px_0px_#000] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                >
                    Criar Cadastro
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;