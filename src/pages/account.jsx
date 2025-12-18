import React from 'react';
import {
  LogOut,
  BookOpenText,
  Clock,
  Calendar,
  Trash2,
  Mail,
  CalendarClock,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useAuth from '../hooks/useAuth';

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

//=================================================
//INFO DO PERFIL
const ProfileCard = ({ student, onLogout }) => {
  const profileDetails = {
    EMAIL: student.email,
    CPF: student.cpf,
    TELEFONE: student.phone,
    'DATA DE NASCIMENTO': student.dataNascimento,
  };

  return (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-lg sticky top-24 mt-24 flex flex-col">
      <div className="bg-black text-white p-8 border-b-4 border-black text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-500 border-4 border-white flex items-center justify-center text-4xl font-black overflow-hidden">
          {student.fotoUrl ? (
            <img src={student.fotoUrl} alt="Perfil" className="w-full h-full object-cover" />
          ) : (
            student.initial
          )}
        </div>

        <h1 className="text-3xl font-black uppercase">{student.name}</h1>

        <span className="inline-block mt-2 bg-white text-black px-3 py-1 font-bold border-2 border-black">
          {student.role}
        </span>
      </div>

      <div className="p-8 space-y-6">
        {Object.entries(profileDetails).map(([label, value]) => (
          <div key={label}>
            <p className="text-xs font-black text-blue-600 uppercase tracking-widest">
              {label}
            </p>
            <p className="text-lg font-bold">{value}</p>
          </div>
        ))}
      </div>

      <div className="p-8 pt-0 mt-auto">
        <button
          onClick={onLogout}
          className="w-full py-3 bg-red-500 text-white font-black uppercase border-4 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center gap-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <LogOut size={22} />
          SAIR DA CONTA
        </button>
      </div>
    </div>
  );
};

//=======================================
//INFO DOS CURSOS
//========================================
const CourseCard = ({ course, onUnenroll }) => {
  const [showAlert, setShowAlert] = React.useState(false);

  return (
    <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] p-6 rounded-lg flex flex-col md:flex-row justify-between gap-6 relative">

      {showAlert && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000] p-8 max-w-md w-full">
            <h4 className="text-2xl font-black uppercase mb-4">
              Confirmar trancamento
            </h4>

            <p className="font-bold mb-6">
              Deseja trancar o curso{' '}
              <span className="text-blue-600">"{course.title}"</span>?
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onUnenroll(course.courseId);
                  setShowAlert(false);
                }}
                className="py-3 bg-red-500 text-white font-black uppercase border-2 border-black"
              >
                SIM, TRANCAR
              </button>

              <button
                onClick={() => setShowAlert(false)}
                className="py-3 bg-white font-black uppercase border-2 border-black"
              >
                CANCELAR
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex-grow space-y-3">
        <h3 className="text-2xl font-black uppercase">{course.title}</h3>
        <p className="text-blue-600 font-bold uppercase text-sm">
          Professor: {course.teacherName}
        </p>

        <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm font-bold">
          <div className="flex items-center gap-2">
            <Calendar size={16} /> {course.day}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} /> {course.time}
          </div>
          <div className="flex items-center gap-2">
            <CalendarClock size={16} /> {course.duration}
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} /> {course.teacherEmail}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowAlert(true)}
        className="size-12 bg-red-500 border-4 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
      >
        <Trash2 size={22} />
      </button>
    </div>
  );
};

//====================================
//CONTEUDO DO CURSO
//=====================================
const CoursesSection = ({ user }) => {
  const navigate = useNavigate();
  const { unenrollCourse } = useAuth();

  const enrolledCourses = (user?.courses || []).map((course) => ({
    ...course,
    courseId: course.id || course._id,
  }));

  const handleUnenroll = async (courseId) => {
    const error = await unenrollCourse(courseId);

    if (error) {
      toast.error('Erro ao trancar curso');
    } else {
      toast.success('Curso trancado com sucesso');
    }
  };

  return (
    <div className="pt-24 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-black uppercase italic">Meus Cursos</h2>
        <span className="bg-yellow-400 px-4 py-2 border-4 border-black font-black">
          {enrolledCourses.length} Matrículas Ativas
        </span>
      </div>

      <div className="space-y-6 pb-20">
        {enrolledCourses.length ? (
          enrolledCourses.map((course) => (
            <CourseCard
              key={course.courseId}
              course={course}
              onUnenroll={handleUnenroll}
            />
          ))
        ) : (
          <div className="border-4 border-dashed p-12 text-center">
            <BookOpenText size={64} className="mx-auto mb-4" />
            <p className="font-bold mb-6">Nenhum curso matriculado</p>
            <button
              onClick={() => navigate('/Courses')}
              className="px-8 py-3 bg-black text-white font-black border-4 border-black"
            >
              DESCOBRIR CURSOS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

//==============================
//PAGINA TODA
//==============================
export default function Account() {
  const { user, signed, signout } = useAuth();
  const navigate = useNavigate();

  if (!signed) return null;

  const handleLogout = () => {
    signout();
    navigate('/');
    window.location.reload();
  };

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
