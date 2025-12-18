import React from 'react';
import { LogOut, BookOpenText, Clock, Calendar, Trash2, Mail, CalendarClock } from 'lucide-react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

// --- Função Auxiliar para Formatar Dados ---
const formatUserData = (user) => {
    const name = user?.nome || 'Usuário';
    return {
        name: name.toUpperCase(),
        initial: name.charAt(0).toUpperCase(),
        role: 'Aluno(a)',
        email: user?.email || 'N/A',
        cpf: user?.cpf
            ? user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
            : 'N/A',
        phone: user?.telefone || 'N/A',
        dataNascimento: user?.dataNascimento || 'N/A',
        fotoUrl: user?.fotoUrl || '',
    };
};

// --- Subcomponente: Cartão de Perfil (Fixo e Limpo) ---
const ProfileCard = ({ student, onLogout }) => {
    const profileDetails = {
        EMAIL: student.email,
        CPF: student.cpf,
        TELEFONE: student.phone,
        'DATA DE NASCIMENTO': student.dataNascimento,
    };

    return (
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] flex flex-col rounded-lg sticky mt-24 top-24">
            <div className="bg-black mt-6 text-white p-8 border-b-4 border-black text-center">
                <div className="w-24 h-24 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center text-4xl font-black text-black mb-4 shadow-lg mx-auto overflow-hidden">
                    {student.fotoUrl ? (
                        <img src={student.fotoUrl} alt="Perfil" className="w-full h-full object-cover" />
                    ) : student.initial}
                </div>
                <h1 className="text-3xl font-black uppercase leading-tight">
                    {student.name}
                </h1>
                <p className="text-sm font-bold bg-white text-black inline-block px-3 py-1 mt-2 uppercase border-2 border-black">
                    {student.role}
                </p>
            </div>

            <div className="p-8 space-y-6">
                {Object.entries(profileDetails).map(([label, value]) => (
                    <div key={label} className="border-b-2 border-gray-100 last:border-0 pb-2">
                        <p className="text-xs font-black text-blue-600 uppercase tracking-widest">
                            {label}
                        </p>
                        <p className="text-lg font-bold text-black">
                            {value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="p-8 pt-0 mt-auto">
                <button
                    onClick={onLogout}
                    className="w-full py-3 bg-red-500 text-white font-black uppercase text-lg border-4 border-black shadow-[4px_4px_0px_#000] transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none flex items-center justify-center gap-2"
                >
                    <LogOut className="w-6 h-6" strokeWidth={3} />
                    SAIR DA CONTA
                </button>
            </div>
        </div>
    );
};

// --- Subcomponente: Seção de Cursos ---
const CoursesSection = ({ user }) => {

    const navigate = useNavigate();
    const enrolledCourses = user?.courses || [];
    const { unenrollCourse } = useAuth();

    const CourseCard = ({ course }) => {
      const [showAlert, setShowAlert] = React.useState(false);
  
      // 2. HANDLER: CONFIRMAR TRANCAMENTO
      const confirmUnenrollment = async () => {
        setShowAlert(false);
        const error = await unenrollCourse(course.id);
        
        if (error) {
          alert(`Falha ao trancar o curso: ${error}`);
        } else {
          toast.success(`Curso trancado: ${course.title}`);
        }
      };
  
      return (
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] px-6 pt-4 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center min-h-[160px] transition-all rounded-lg hover:bg-gray-50 relative">
          
          {/* 3. ALERTA DE CONFIRMAÇÃO (TELA CHEIA / FIXED) */}
          {showAlert && (
            <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4 backdrop-blur-sm">
              {/* Box do Alerta */}
              <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-8 max-w-md w-full animate-in fade-in zoom-in duration-200">
                <h4 className="font-black text-2xl text-black uppercase mb-2 italic">Confirmação Necessária</h4>
                <p className="text-lg font-bold text-gray-700 mb-6">
                  Tem certeza que deseja trancar sua matrícula no curso <span className="text-blue-600">"{course.title}"</span>?
                </p>
                
                <div className="flex flex-col gap-3">
                  <button
                    onClick={confirmUnenrollment}
                    className="w-full py-4 bg-red-500 text-white font-black uppercase text-lg border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    SIM, TRANCAR CURSO
                  </button>
                  <button
                    onClick={() => setShowAlert(false)}
                    className="w-full py-4 bg-white text-black font-black uppercase text-lg border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    CANCELAR
                  </button>
                </div>
              </div>
            </div>
          )}
  
{/* CONTEÚDO DO CARD */}
<div className="space-y-3 flex-grow">
        <div>
          <h3 className="text-2xl mb-1 font-black text-black uppercase tracking-tight leading-none">
            {course.title}
          </h3>
          <p className="text-blue-600 font-bold uppercase text-sm italic">
            Professor: {course.teacherName}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
            <Calendar className="w-4 h-4 text-black" /> {course.day || "Segunda-feira"}
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
            <Clock className="w-4 h-4 text-black" /> {course.time || "19:00"}
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
            <CalendarClock className="w-4 h-4 text-black" /> {course.duration || "40h"}
          </div>
          <div className="flex items-center gap-2 text-gray-700 font-bold text-sm">
            <Mail className="w-4 h-4 text-black" /> {course.teacherEmail}
          </div>
        </div>
      </div>

      {/* BOTÃO DE LIXEIRA */}
      <div className="mt-4 md:mt-0 ml-0 md:ml-6 shrink-0">
        <button
          onClick={() => setShowAlert(true)}
          className="size-12 bg-red-500 hover:bg-red-600 flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_#000] transition-all active:shadow-none active:translate-x-1 active:translate-y-1"
        >
          <Trash2 className="w-6 h-6 text-black" />
        </button>
      </div>
    </div>
  );
};
  
    return (
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 pt-24 shrink-0">
          <h2 className="text-4xl font-black uppercase text-black italic">
            Meus Cursos
          </h2>
          <div className="px-6 py-3 bg-yellow-400 text-black font-black text-sm border-4 border-black shadow-[4px_4px_0px_#000] uppercase">
            {enrolledCourses.length} Matrículas Ativas
          </div>
        </div>
  
        <div className="space-y-6 pb-20">
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <CourseCard key={course.id || course._id} course={course} />
            ))
          ) : (
                    <div className="border-4 border-dashed border-blue-500 p-12 text-center bg-gray-50/50">
                        <BookOpenText className="w-16 h-16 text-black mx-auto mb-4" />
                        <h3 className="text-xl text-black font-bold mb-2">Nenhum curso matriculado</h3>
                        <p className="text-gray-600 mb-6">Explore nossa grade e comece a estudar hoje mesmo.</p>
                        <button
                            onClick={() => navigate('/Courses')}
                            className="py-3 px-8 bg-black text-white font-extrabold uppercase border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                        >
                            DESCOBRIR CURSOS
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Página Account ---
export default function Account() {
    const { user, signed, signout } = useAuth();

 const navigate = useNavigate();
    const handleLogout = () => {
        signout();
        navigate('/');
        window.location.reload();
   };

    if (!signed) return null;

    const studentData = formatUserData(user);

    return (
        <div className="min-h-screen bg-gray-50 px-4 sm:px-8 lg:px-16">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                <aside className="lg:col-span-4">
                    <ProfileCard student={studentData} onLogout={handleLogout} />
                </aside>

                <main className="lg:col-span-8">
                    <CoursesSection user={user} />
                </main>

            </div>
        </div>
    );
}