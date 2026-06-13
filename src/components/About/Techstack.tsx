import React from "react";
import { SiNextdotjs, SiNestjs, SiPhp, SiPrisma } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";

const skills = [
  { label: "TypeScript",   icon: <img src={Typescript} className="h-4 w-4" alt="" /> },
  { label: "Node.js",      icon: <img src={Node} className="h-4 w-4" alt="" /> },
  { label: "JavaScript",   icon: <img src={Javascript} className="h-4 w-4" alt="" /> },
  { label: "React.js",     icon: <img src={ReactIcon} className="h-4 w-4" alt="" /> },
  { label: "Next.js",      icon: <SiNextdotjs className="h-4 w-4 shrink-0" /> },
  { label: "NestJS",       icon: <SiNestjs className="h-4 w-4 shrink-0" /> },
  { label: "PHP",          icon: <SiPhp className="h-4 w-4 shrink-0" /> },
  { label: "Tailwind CSS", icon: <img src={Tailwind} className="h-4 w-4" alt="" /> },
  { label: "Prisma",       icon: <SiPrisma className="h-4 w-4 shrink-0" /> },
  { label: "PostgreSQL",   icon: <img src={SQL} className="h-4 w-4" alt="" /> },
  { label: "Redis",        icon: <img src={Redis} className="h-4 w-4" alt="" /> },
  { label: "AWS",          icon: <img src={AWS} className="h-4 w-4" alt="" /> },
  { label: "Docker",       icon: <img src={Docker} className="h-4 w-4" alt="" /> },
  { label: "Python",       icon: <img src={Python} className="h-4 w-4" alt="" /> },
  { label: "Git",          icon: <img src={Git} className="h-4 w-4" alt="" /> },
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
