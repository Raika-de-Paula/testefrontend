import React, { useState } from 'react';
import { LogOut, BookOpenText, ChevronRight } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// --- Função Auxiliar para Formatar Dados ---
const formatUserData = (user) => {
    const name = user.nome || 'Usuário';

    return {
        name: name.toUpperCase(),
        role: 'Aluno(a)', // Função/Cargo
        email: user.email || 'N/A',
        cpf: user.cpf ? user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') : 'N/A', // Aplica máscara
        phone: user.telefone || 'N/A',
        dataNascimento: user.dataNascimento || 'N/A',
    };
};


// --- Subcomponente: Cartão de Perfil (Lateral Esquerda) ---
const ProfileCard = ({ student, handleLogout }) => {
    const profileDetails = {
        EMAIL: student.email,
        CPF: student.cpf,
        TELEFONE: student.phone,
        'DATA DE NASCIMENTO': student.dataNascimento,
    };

    return (
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] p-0 h-full flex flex-col">
            
            {/* Header do Perfil (Foto/Inicial e Nome) */}
            <div className="bg-black text-white p-6 pb-8 mb-4 border-b-4 border-black">
                <div className="flex items-center space-x-4 mb-4">
                    {/* Círculo da Inicial */}
                    <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center text-3xl font-extrabold shadow-lg">
                        {student.initial}
                    </div>
                </div>
                <h1 className="text-2xl font-black uppercase">{student.name}</h1>
                <p className="text-sm font-medium">{student.role}</p>
            </div>
            
            {/* Detalhes do Contato */}
            <div className="p-6 flex-grow space-y-4">
                {/* Bloco de Informação */}
                {Object.entries(profileDetails).map(([label, value]) => (
                    <div key={label}>
                        <p className="text-xs font-bold text-gray-600 uppercase mb-1">{label}</p>
                        <p className="text-base font-medium text-black">{value}</p>
                    </div>
                ))}
            </div>

            {/* Botão Sair da Conta */}
            <div className="p-6 pt-0">
                <button
                    onClick={handleLogout}
                    className="w-full py-3 bg-red-500 text-white font-extrabold uppercase text-lg border-4 border-black rounded-lg 
                             shadow-[4px_4px_0px_#000] transition-all duration-200 flex items-center justify-center gap-2
                             hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                    <LogOut className="w-5 h-5" />
                    SAIR DA CONTA
                </button>
            </div>
        </div>
    );
};


// --- Subcomponente: Seção de Cursos ---
const CoursesSection = ({ user }) => {

    const courses = user.courses || [];
    const matriculasAtivas = courses.length;

    const CourseCard = ({ title, teacher }) => (
        <div className="bg-white p-4 border-2 border-black flex justify-between items-center transition-all duration-150 hover:bg-gray-50">
            <div className="flex-grow">
                <h3 className="text-lg font-bold text-black">{title}</h3>
                <p className="text-sm text-gray-600">Professor: {teacher}</p>
            </div>
            <ChevronRight className="w-6 h-6 text-black" />
        </div>
    );

    return (
        <div className="h-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-black uppercase text-black">MEUS CURSOS</h2>
                <div className="px-4 py-2 bg-blue-600 text-white font-bold text-sm border-2 border-black shadow-[2px_2px_0px_#000]">
                    {matriculasAtivas} Matrículas Ativas
                </div>
            </div>

            {matriculasAtivas > 0 ? (
                <div className="space-y-4">
                    {courses.map(course => <CourseCard key={course.id} {...course} />)}
                </div>
            ) : (
                <div className="border-4 border-dashed border-black p-12 text-center bg-gray-50/50">
                    <BookOpenText className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Nenhum curso matriculado</h3>
                    <p className="text-gray-600 mb-6">Explore nossa grade e comece a estudar hoje mesmo.</p>

                    <button 
                        onClick={()=> navigate('/courses')}
                        className="py-3 px-8 bg-black text-white font-extrabold uppercase border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                    >
                        EXPLORAR CURSOS
                    </button>
                </div>
            )}
        </div>
    );
};


// --- Componente Principal: Account (Perfil) ---
export default function Account() {
    const { user, signed, signout } = useAuth();
    const navigate = useNavigate();
    
    // Funçao de Logout que chama o hook e redireciona
    const handleLogout = () => {
        signout();
        navigate('/');
    };

    // 1. Redirecionamento se não estiver logado
    if (!signed) {
        // Redireciona imediatamente para a página de login
        if (typeof window !== 'undefined') {
            navigate('/login');
        }
        return (
             <div className="flex justify-center items-center h-screen">
                 <p className="text-xl font-bold text-black">Redirecionando...</p>
             </div>
         );
    }
    
    // 2. Formata os dados do usuário logado
    // Nota: O 'user' do seu AuthContext contém 'nome', 'cpf', 'telefone', etc.
    const studentData = formatUserData(user); 

    return (
        <div className="min-h-screen bg-gray-100 p-8 sm:p-12">
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* COLUNA 1: DADOS DO ESTUDANTE */}
                <div className="lg:col-span-1">
                    <ProfileCard student={studentData} handleLogout={handleLogout} />
                </div>

                {/* COLUNA 2: MEUS CURSOS */}
                <div className="lg:col-span-2">
                    <CoursesSection user={user} /> 
                </div>
            </div>
        </div>
    );
}