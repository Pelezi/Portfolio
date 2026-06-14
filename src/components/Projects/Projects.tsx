import React from "react";
import ProjectCard from "./ProjectCards";
import projectsData from "../../data/projects.json";

const imageMap: Record<string, string> = {
  leaf: "/assets/Projects/leaf.png",
  editor: "/assets/Projects/codeEditor.png",
  chatify: "/assets/Projects/chatify.png",
  bitsOfCode: "/assets/Projects/blog.png",
};

const projects = projectsData.map((p) => ({ ...p, imgPath: imageMap[p.imgKey] }));

const Projects: React.FC = () => {
  return (
    <div className="relative w-full pt-[150px] pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-3">Trabalhos</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Meus <span className="text-gradient">projetos</span> recentes
          </h1>
          <p className="mt-3 text-sm text-white/60 max-w-xl mx-auto">
            Aqui estão alguns projetos nos quais trabalhei recentemente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={p.title} className="fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <ProjectCard
                imgPath={p.imgPath}
                isBlog={false}
                title={p.title}
                description={p.description}
                demoLink={"demoLink" in p ? p.demoLink : undefined}
                ghLink={"ghLink" in p ? p.ghLink : undefined}
                tags={p.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
