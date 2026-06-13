import React from "react";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import docker from "../../Assets/TechIcons/Docker.svg";
import postman from "../../Assets/TechIcons/Postman.svg";

const tools = [
  { label: "Google Chrome", icon: <img src={chrome} className="h-4 w-4" alt="" /> },
  { label: "VS Code",        icon: <img src={vsCode} className="h-4 w-4" alt="" /> },
  { label: "IntelliJ IDEA",  icon: <img src={intelliJ} className="h-4 w-4" alt="" /> },
  { label: "Docker",         icon: <img src={docker} className="h-4 w-4" alt="" /> },
  { label: "Postman",        icon: <img src={postman} className="h-4 w-4" alt="" /> },
];

const Toolstack: React.FC = () => {
  return (
    <section className="pb-16 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-3">Daily</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
        <span className="text-gradient">Ferramentas</span> que uso
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {tools.map(({ label, icon }) => (
          <span key={label} className="chip text-white/90">
            {icon}
            {label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Toolstack;
