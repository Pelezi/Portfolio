import React from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const Projects: React.FC = () => {
  return (
    <div className="relative w-full pt-[150px] pb-8 bg-section-gradient">
      <Particle />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-white text-[2.3em] font-medium pt-2.5 text-center">
          Meus <strong className="text-accent">Projetos </strong> Recentes
        </h1>
        <p className="text-white text-center">
          Aqui estão alguns projetos nos quais trabalhei recentemente.
        </p>
        <div className="flex flex-wrap justify-center pb-2.5">
          <div className="w-full md:w-4/12 pt-[50px] pb-[50px] px-[25px]">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Talentos"
              description="Um aplicativo web de gestão financeira. O sistema conta com uma API desenvolvida em Node.js com NestJS e inclui uma funcionalidade integrada para registrar transações financeiras diretamente via mensagens do WhatsApp."
              demoLink="https://talentos.pelezi.com.br"
            />
          </div>

          <div className="w-full md:w-4/12 pt-[50px] pb-[50px] px-[25px]">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portal Uvas"
              description="Um sistema web focado na gestão e organização de membros. Desenvolvido com tecnologias modernas para facilitar o gerenciamento de informações e processos."
              demoLink="https://uvas.pelezi.com.br"
            />
          </div>

          <div className="w-full md:w-4/12 pt-[50px] pb-[50px] px-[25px]">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gabriel"
              description="Um bot de WhatsApp projetado para centralizar e gerenciar as comunicações entre os projetos 'Portal Uvas' e 'Talentos'. Automatiza processos de comunicação e integração entre sistemas."
              demoLink="https://gabriel.pelezi.com.br"              
            />
          </div>

          <div className="w-full md:w-4/12 pt-[50px] pb-[50px] px-[25px]">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="obs-holyrics-plugin-finder"
              description="Desenvolvimento e configuração de um plugin em C++ utilizando CMake para o ambiente de build. Um projeto que demonstra habilidades em desenvolvimento de baixo nível e configuração de ferramentas de build."
              ghLink="https://github.com/Pelezi/obs-holyrics-plugin-finder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
