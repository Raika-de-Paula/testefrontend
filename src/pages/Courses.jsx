import React, { useState } from 'react';
import CardCourse from '../components/CardCourse';
import { courses, teachers } from '../data/sampleData';
import { Filter, Users, Tag as TagIcon, X } from 'lucide-react';

export default function Courses() {
  const [filterTeacher, setFilterTeacher] = useState('todos');
  const [filterTag, setFilterTag] = useState('todos');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Pegar todas as tags únicas dos cursos para gerar os botões automaticamente
  const allTags = ['todos', ...new Set(courses.map(c => c.tag).filter(Boolean))];

  // Lógica de Filtragem Combinada
  const filteredCourses = courses.filter(course => {
    const matchTeacher = filterTeacher === 'todos' || course.teacherId === parseInt(filterTeacher);
    const matchTag = filterTag === 'todos' || course.tag === filterTag;
    return matchTeacher && matchTag;
  });

  const clearFilters = () => {
    setFilterTeacher('todos');
    setFilterTag('todos');
  };

  return (
    <main className="container mx-auto px-4 pt-[120px] pb-20">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black uppercase italic tracking-tighter">Nossos Cursos</h1>
        <p className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto font-bold">
          Explore nossa grade curricular e escolha o próximo passo da sua carreira.
        </p>
      </div>

{/* --- BARRA DE FILTROS NA MESMA LINHA --- */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-end gap-4 mb-12">
  
  {/* Painel que se expande HORIZONTALMENTE */}
  <div className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center ${isFilterOpen ? 'max-w-[1000px] opacity-100' : 'max-w-0 opacity-0'}`}>
    <div className="bg-white border-4 border-black shadow-[4px_4px_0px_#000] p-4 flex flex-col md:flex-row gap-6 items-center mr-2">
      
      {/* Filtro de Professores */}
      <div className="flex items-center gap-3">
        <label className="text-[14px] font-black text-blue-600 uppercase flex items-center gap-1">
          <Users size={16} /> Mestre:
        </label>
        <select 
          value={filterTeacher}
          onChange={(e) => setFilterTeacher(e.target.value)}
          className="bg-white border-2 border-black font-bold text-xs px-2 py-1 outline-none cursor-pointer hover:bg-yellow-400 transition-colors"
        >
          <option value="todos">Todos</option>
          {teachers.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
      </div>

      {/* Filtro de Categoria */}
      <div className="flex items-center gap-3">
        <label className="text-[14px] font-black text-blue-600 uppercase flex items-center gap-1">
          <TagIcon size={16} /> Área:
        </label>
        <select 
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
          className="bg-white border-2 border-black font-bold text-xs px-2 py-1 outline-none cursor-pointer hover:bg-yellow-400 transition-colors"
        >
          <option value="todos">Todas</option>
          {allTags.filter(tag => tag !== 'todos').map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {/* Botão Limpar Rápido */}
      {(filterTeacher !== 'todos' || filterTag !== 'todos') && (
        <button 
          onClick={clearFilters}
          className="flex items-center gap-1 text-[15px] font-black text-red-600 uppercase hover:underline"
        >
          <X /> Limpar
        </button>
      )}
    </div>
  </div>

  {/* Botão de Gatilho (Sempre Visível na Direita) */}
  <button 
    onClick={() => setIsFilterOpen(!isFilterOpen)}
    className={`flex items-center gap-2 bg-yellow-500 border-4 border-black px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all shrink-0`}
  >
    <Filter/>
    {isFilterOpen ? 'Fechar' : 'Filtrar'}
  </button>
</div>

      {/* --- GRID DE RESULTADOS --- */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map(c => (
            <CardCourse
              key={c.id}
              course={c}
              teacher={teachers.find(t => t.id === c.teacherId)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-4 border-dashed border-gray-300">
          <p className="text-2xl font-black uppercase text-gray-400 italic">Nenhum curso encontrado para esses filtros.</p>
          <button onClick={clearFilters} className="mt-4 text-blue-600 font-bold underline">Mostrar todos os cursos</button>
        </div>
      )}
    </main>
  );
}