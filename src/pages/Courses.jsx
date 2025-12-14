import React, { useState } from 'react';
import CardCourse from '../components/CardCourse';
import { courses, teachers } from '../data/sampleData';

export default function Courses() {
  const [selected, setSelected] = useState(null);

  function handleDetails(c) {
    setSelected(c);
    // Encontra o nome do professor baseado no teacherId do curso
    const teacherName = teachers.find(t => t.id === c.teacherId)?.name || 'Desconhecido';
    
    alert(`Curso: ${c.title} — Professor: ${teacherName}`);
  }

  return (
    <main className="container mx-auto px-4 pt-[120px]">
      <h1 className="text-5xl font-bold text-center">NOSSOS CURSOS</h1>
      <p className="text-center text-xl text-gray-900 mt-6 max-w-2xl mx-auto">
      Explore nossa grade curricular e escolha o próximo passo da sua carreira. Todos os cursos são gratuitos.
      </p>

      {/* Grid de Cards de Cursos */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {courses.map(c => (
          <CardCourse
            key={c.id}
            course={c}
            // Encontrando e passando o objeto professor para o CardCourse
            teacher={teachers.find(t => t.id === c.teacherId)}
            onDetails={handleDetails}
          />
        ))}
      </div>
    </main>
  );
}