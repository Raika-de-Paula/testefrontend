import React from 'react'
import { HiOutlineStar } from "react-icons/hi";
import { GrGroup } from "react-icons/gr";
import { FaRegClock } from "react-icons/fa";

export default function Cards(){
  return (
    <section className="py-32">
  <div className="container mx-auto px-">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* 1. Card: CONTEÚDO PREMIUM (Amarelo) */}
      <div className="bg-yellow-400 p-10 border-4 border-black shadow-[0.3em_0.3em_0_0_#000] hover:translate-y-[-4px]">
        <div className="mb-4">
          <span className="inline-block bg-black p-2">
            <HiOutlineStar color='white' size={25}/>
          </span>
        </div>
        <h3 className="text-xl font-black mb-2">CONTEÚDO PREMIUM</h3>
        <p className="text-lg">
          Aulas preparadas por especialistas com material didático completo.
        </p>
      </div>
      
      {/* 2. Card: COMUNIDADE ATIVA (Azul Claro) */}
      <div className="bg-blue-300 p-10 border-4 border-black shadow-[0.3em_0.3em_0_0_#000] hover:translate-y-[-4px]">
        <div className="mb-4">
          <span className="inline-block bg-black p-2">
             <GrGroup size={25} color='white'/>
          </span>
        </div>
        <h3 className="text-xl font-black mb-2">COMUNIDADE ATIVA</h3>
        <p className="text-lg">
          Troque experiências e tire dúvidas com outros alunos e professores.
        </p>
      </div>

      {/* 3. Card: FLEXIBILIDADE TOTAL (Verde Claro) */}
      <div className="bg-green-300 p-10 border-4 border-black shadow-[0.3em_0.3em_0_0_#000] hover:translate-y-[-4px]">
        <div className="mb-4">
          <span className="inline-block bg-black p-2">
            <FaRegClock size={25} color='white'/>
          </span>
        </div>
        <h3 className="text-xl font-black mb-2">FLEXIBILIDADE TOTAL</h3>
        <p className="text-lg">
          Estude no seu ritmo, a qualquer hora e em qualquer lugar.
        </p>
      </div>

    </div>
  </div>
</section>
  )
}