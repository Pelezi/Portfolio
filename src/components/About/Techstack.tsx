import React from "react";
import { SiNextdotjs, SiNestjs, SiPhp, SiPrisma } from "react-icons/si";

const skills = [
  { label: "TypeScript",   icon: <img src="/assets/TechIcons/Typescript.svg" className="h-4 w-4" alt="" /> },
  { label: "Node.js",      icon: <img src="/assets/TechIcons/Node.svg" className="h-4 w-4" alt="" /> },
  { label: "JavaScript",   icon: <img src="/assets/TechIcons/Javascript.svg" className="h-4 w-4" alt="" /> },
  { label: "React.js",     icon: <img src="/assets/TechIcons/React.svg" className="h-4 w-4" alt="" /> },
  { label: "Next.js",      icon: <SiNextdotjs className="h-4 w-4 shrink-0" /> },
  { label: "NestJS",       icon: <SiNestjs className="h-4 w-4 shrink-0" /> },
  { label: "PHP",          icon: <SiPhp className="h-4 w-4 shrink-0" /> },
  { label: "Tailwind CSS", icon: <img src="/assets/TechIcons/Tailwind.svg" className="h-4 w-4" alt="" /> },
  { label: "Prisma",       icon: <SiPrisma className="h-4 w-4 shrink-0" /> },
  { label: "PostgreSQL",   icon: <img src="/assets/TechIcons/SQL.svg" className="h-4 w-4" alt="" /> },
  { label: "Redis",        icon: <img src="/assets/TechIcons/Redis.svg" className="h-4 w-4" alt="" /> },
  { label: "AWS",          icon: <img src="/assets/TechIcons/AWS.svg" className="h-4 w-4" alt="" /> },
  { label: "Docker",       icon: <img src="/assets/TechIcons/Docker.svg" className="h-4 w-4" alt="" /> },
  { label: "Python",       icon: <img src="/assets/TechIcons/Python.svg" className="h-4 w-4" alt="" /> },
  { label: "Git",          icon: <img src="/assets/TechIcons/Git.svg" className="h-4 w-4" alt="" /> },
];

const Techstack: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-3">Stack</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Minhas <span className="text-gradient">habilidades</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map(({ label, icon }) => (
          <span key={label} className="chip text-white/90">
            {icon}
            {label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
