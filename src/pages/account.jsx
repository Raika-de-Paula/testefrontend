// pages/account.jsx
import React from 'react';
import { LogOut, BookOpenText, Clock, Calendar, Trash2, Mail, CalendarClock } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// 🛑 Importação dos dados para fazer o cruzamento (find)
import { teachers } from '../data/sampleData';

const formatUserData = (user) => {
    const name = user?.nome || 'Usuário';
    return {
        name: name.toUpperCase(),
        initial: name.charAt(0).toUpperCase(),
        role: 'ALUNO(A)',
        email: user?.email || 'N/A',
        cpf: user?.cpf ? user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') : 'N/A',
        phone: user?.telefone || 'N/A',
        dataNascimento: user?.dataNascimento || 'N/A',
    };
};

const ProfileCard = ({ student, handleLogout }) => {
    const profileDetails = {
        EMAIL: student.email,
        CPF: student.cpf,
        TELEFONE: student.phone,
        'NASCIMENTO': student.dataNascimento,
    };

    return (
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] h-fit flex flex-col rounded-lg sticky top-8">
            <div className="bg-black text-white p-8 border-b-4 border-black text-center">
                <div className="w-20 h-20 rounded-full bg-white border-4 border-black flex items-center justify-center text-3xl font-black text-black mb-4 mx-auto">
                    {student.initial}
                </div>
                <h1 className="text-2xl font-black uppercase leading-tight">{student.name}</h1>
                <p className="text-xs font-bold bg-white text-black inline-block px-2 py-1 mt-2 uppercase border-2 border-black">
                    {student.role}
                </p>
            </div>
            
            <div className="p-6 space-y-4">
                {Object.entries(profileDetails).map(([label, value]) => (
                    <div key={label} className="border-b-2 border-gray-100 pb-2">
                        <p className="text-[10px] font-black text-blue-600 uppercase mb-1 tracking-tighter">{label}</p>
                        <p className="text-sm font-bold text-black italic truncate">{value}</p>
                    </div>
                ))}
            </div>

            <div className="p-6 pt-0 mt-auto">
                <button
                    onClick={handleLogout}
                    className="w-full py-3 bg-red-500 text-white font-black uppercase text-sm border-4 border-black shadow-[4px_4px_0px_#000] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none flex items-center justify-center gap-2"
                >
                    <LogOut className="w-5 h-5" strokeWidth={3} />
                    SAIR DA CONTA
                </button>
            </div>
        </div>
    );
};

const CoursesSection = ({ user }) => {
    const navigate = useNavigate();
    const { unenrollCourse } = useAuth();
    const enrolledCourses = user?.courses || [];
    const matriculasAtivas = enrolledCourses.length;

    const CourseCard = ({ course }) => {
        // 🔍 Lógica que você pediu: Busca o professor pelo ID dentro de teachers
        const teacherObj = teachers.find(t => t.id === course.teacherId);
        const teacherName = teacherObj?.name || 'Instrutor Desconhecido';
        const teacherEmail = teacherObj?.email || 'E-mail não disponível';

        const handleUnenroll = async () => {
            if (window.confirm(`Tem certeza que deseja trancar o curso: ${course.title}?`)) {
                const error = await unenrollCourse(course.id);
                if (error) alert(error);
            }
        };

        return (
            <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] p-6 flex flex-col md:flex-row justify-between items-start md:items-center min-h-[160px] transition-all rounded-lg">
                <div className="space-y-3 flex-grow">
                    <div>
                        <h3 className="text-2xl mb-1 font-black text-black uppercase tracking-tight leading-none">
                            {course.title}
                        </h3>
                        <p className="text-blue-600 font-bold uppercase text-sm italic">
                            Professor: {teacherName}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
                            <Calendar className="w-4 h-4 text-black" /> {course.day || "A definir"}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
                            <Clock className="w-4 h-4 text-black" /> {course.time || "A definir"}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
                            <CalendarClock className="w-4 h-4 text-black" /> {course.duration || "40h"}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 font-bold text-sm overflow-hidden text-ellipsis">
                            <Mail className="w-4 h-4 text-black shrink-0" />
                            {/* Fonte mono para o e-mail do professor encontrado */}
                            <span className="truncate font-mono text-xs">{teacherEmail}</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 md:mt-0 ml-0 md:ml-6">
                    <button
                        onClick={handleUnenroll}
                        className="size-12 bg-red-500 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_#000] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none"
                    >
                        <Trash2 className="w-6 h-6 text-black" strokeWidth={3} />
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 pt-24 shrink-0">
                <h2 className="text-4xl font-black uppercase text-black italic">Meus Cursos</h2>
                <div className="px-6 py-3 bg-yellow-400 text-black font-black text-sm border-4 border-black shadow-[4px_4px_0px_#000] uppercase">
                    {matriculasAtivas} Matrículas Ativas
                </div>
            </div>

            <div className="space-y-6 pb-20">
                {matriculasAtivas > 0 ? (
                    enrolledCourses.map(c => <CourseCard key={c.id || c._id} course={c} />)
                ) : (
                    <div className="border-8 border-dotted border-black p-16 text-center bg-white shadow-[10px_10px_0px_rgba(0,0,0,0.1)]">
                        <BookOpenText className="w-20 h-20 text-black mx-auto mb-6" />
                        <h3 className="text-2xl font-black uppercase mb-4">Sua grade está vazia!</h3>
                        <button
                            onClick={() => navigate('/Courses')}
                            className="py-4 px-10 bg-[#436adf] text-white font-black uppercase border-4 border-black shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                        >
                            DESCOBRIR CURSOS
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function Account() {
    const { user, signed, signout } = useAuth();
    if (!signed) return null;

    return (
        <div className="min-h-screen bg-gray-50 px-4 sm:px-8 lg:px-16">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <aside className="lg:col-span-4 lg:pt-10">
                    <ProfileCard student={formatUserData(user)} handleLogout={signout} />
                </aside>

                <main className="lg:col-span-8">
                    <CoursesSection user={user} />
                </main>

            </div>
        </div>
    );
}