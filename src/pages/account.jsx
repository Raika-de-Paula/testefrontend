import React from 'react';
import { LogOut, BookOpenText, ChevronRight, Clock, Calendar, MapPin, Mail } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// --- Função Auxiliar para Formatar Dados ---
const formatUserData = (user) => {
    const name = user.nome || 'Usuário';
    return {
        name: name.toUpperCase(),
        initial: name.charAt(0).toUpperCase(),
        role: 'Aluno(a)',
        email: user.email || 'N/A',
        cpf: user.cpf ? user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') : 'N/A',
        phone: user.telefone || 'N/A',
        dataNascimento: user.dataNascimento || 'N/A',
    };
};

// --- Subcomponente: Cartão de Perfil ---
const ProfileCard = ({ student, handleLogout }) => {
    const profileDetails = {
        EMAIL: student.email,
        CPF: student.cpf,
        TELEFONE: student.phone,
        'DATA DE NASCIMENTO': student.dataNascimento,
    };

    return (
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] pt-6 h-fit flex flex-col rounded-none sticky top-8">
            <div className="bg-[#436adf] text-white p-8 border-b-4 border-black">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-black flex items-center justify-center text-4xl font-black text-black mb-4 shadow-lg">
                    {student.initial}
                </div>
                <h1 className="text-3xl font-black uppercase leading-tight">{student.name}</h1>
                <p className="text-sm font-bold bg-black text-white inline-block px-2 py-1 mt-2 uppercase">
                    {student.role}
                </p>
            </div>
            
            <div className="p-8 space-y-6">
                {Object.entries(profileDetails).map(([label, value]) => (
                    <div key={label} className="border-b-2 border-gray-100 pb-2 last:border-0">
                        <p className="text-xs font-black text-blue-600 uppercase mb-1 tracking-widest">{label}</p>
                        <p className="text-lg font-bold text-black">{value}</p>
                    </div>
                ))}
            </div>

            <div className="p-8 pt-0 mt-auto">
                <button
                    onClick={handleLogout}
                    className="w-full py-4 bg-red-500 text-white font-black uppercase text-lg border-4 border-black shadow-[4px_4px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex items-center justify-center gap-2"
                >
                    <LogOut className="w-6 h-6" />
                    SAIR DA CONTA
                </button>
            </div>
        </div>
    );
};

// --- Subcomponente: Seção de Cursos ---
const CoursesSection = ({ user }) => {
    const navigate = useNavigate();
    const courses = user.courses || [];
    const matriculasAtivas = courses.length;

    // Card de curso com altura aumentada e novas informações
    const CourseCard = ({ course }) => {
        const info = {
            title: course.title,
            teacher: course.teacher,
            day: course.day,
            time: course.time,
            location: course.location,
            teacherEmail: course.teacherEmail
        };

        return (
            <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] p-6 flex flex-col md:flex-row justify-between items-start md:items-center min-h-[160px] transition-all hover:-translate-y-1">
                <div className="space-y-3 flex-grow">
                    <div>
                        <h3 className="text-2xl font-black text-black uppercase tracking-tight">{info.title}</h3>
                        <p className="text-blue-600 font-bold uppercase text-sm italic">Professor: {info.teacher}</p>
                    </div>
                    
                    {/* Grid de Informações extras */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
                            <Calendar className="w-4 h-4 text-black" /> {info.day}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
                            <Clock className="w-4 h-4 text-black" /> {info.time}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
                            <MapPin className="w-4 h-4 text-black" /> {info.location}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-bold text-sm overflow-hidden">
                            <Mail className="w-4 h-4 text-black shrink-0" /> 
                            <span className="truncate">{info.teacherEmail}</span>
                        </div>
                    </div>
                </div>
                
                <button className="mt-4 md:mt-0 ml-0 md:ml-6 p-2 bg-black text-white border-2 border-black hover:bg-blue-600 transition-colors">
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        );
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <h2 className="text-4xl font-black uppercase text-black italic">Meus Cursos</h2>
                <div className="px-6 py-3 bg-yellow-400 text-black font-black text-sm border-4 border-black shadow-[4px_4px_0px_#000] uppercase">
                    {matriculasAtivas} Matrículas Ativas
                </div>
            </div>

            {matriculasAtivas > 0 ? (
                <div className="space-y-6">
                    {/* 🛑 Mudança aqui: passamos o objeto inteiro para o card decidir os nomes */}
                    {courses.map(course => <CourseCard key={course.id || course._id} course={course} />)}
                </div>
            ) : (
                <div className="border-8 border-dotted border-black p-16 text-center bg-white shadow-[10px_10px_0px_rgba(0,0,0,0.1)]">
                    <BookOpenText className="w-20 h-20 text-black mx-auto mb-6" />
                    <h3 className="text-2xl font-black uppercase mb-4">Sua grade está vazia!</h3>
                    <p className="text-gray-600 font-bold mb-8 max-w-md mx-auto text-lg">Parece que você ainda não se matriculou em nenhum curso inovador.</p>
                    <button 
                        onClick={()=> navigate('/Courses')}
                        className="py-4 px-10 bg-[#436adf] text-white font-black uppercase border-4 border-black shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                    >
                        DESCOBRIR CURSOS
                    </button>
                </div>
            )}
        </div>
    );
};

export default function Account() {
    const { user, signed, signout } = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = () => {
        signout();
        window.location.reload(); // Força o refresh para limpar o estado
    };

    if (!signed) {
        if (typeof window !== 'undefined') navigate('/login');
        return null;
    }
    
    const studentData = formatUserData(user); 

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
            {/* max-w-screen-2xl para ocupar quase toda a largura e puxar pra esquerda */}
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* COLUNA DO PERFIL - Ocupa 4 de 12 colunas (mais largo) */}
                <div className="lg:col-span-4 flex justify-start">
                    <div className="w-full max-w-md lg:ml-0">
                        <ProfileCard student={studentData} handleLogout={handleLogout} />
                    </div>
                </div>

                {/* COLUNA DOS CURSOS - Ocupa 8 de 12 colunas */}
                <div className="lg:col-span-8">
                    <CoursesSection user={user} /> 
                </div>
            </div>
        </div>
    );
}