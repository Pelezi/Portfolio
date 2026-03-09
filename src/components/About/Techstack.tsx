import React from "react";
import { SiNextdotjs } from "react-icons/si";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";

const techIconClass =
  "flex items-center justify-center text-base m-4 md:m-4 px-5 py-2.5 opacity-95 outline outline-[1.7px] outline-blue-400/60 rounded-3xl shadow-[4px_5px_4px_3px_rgba(37,99,235,0.14)] transition-all duration-400 w-fit cursor-pointer hover:scale-105 hover:outline-[2.2px] hover:outline-blue-400/90 text-white";

const Techstack: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center pb-[50px]">
      <div className={techIconClass}>
        <img src={Node} alt="node" />
        <div className="flex items-center ml-2.5 text-white">Node.js</div>
      </div>
      <div className={techIconClass}>
        <img src={Javascript} alt="javascript" />
        <div className="flex items-center ml-2.5 text-white">Javascript</div>
      </div>
      <div className={techIconClass}>
        <img src={Typescript} alt="typescript" />
        <div className="flex items-center ml-2.5 text-white">Typescript</div>
      </div>
      <div className={techIconClass}>
        <img src={ReactIcon} alt="react" />
        <div className="flex items-center ml-2.5 text-white">React.js</div>
      </div>
      <div className={techIconClass}>
        <SiNextdotjs fontSize={"24px"} />
        <div className="flex items-center ml-2.5 text-white">Next.js</div>
      </div>
      <div className={techIconClass}>
        <img src={Tailwind} alt="tailwind" />
        <div className="flex items-center ml-2.5 text-white">Tailwind CSS</div>
      </div>
      <div className={techIconClass}>
        <img src={Python} alt="Python" />
        <div className="flex items-center ml-2.5 text-white">Python</div>
      </div>
      <div className={techIconClass}>
        <img src={C} alt="C++" />
        <div className="flex items-center ml-2.5 text-white">C/C++</div>
      </div>
      <div className={techIconClass}>
        <img src={Git} alt="git" />
        <div className="flex items-center ml-2.5 text-white">Git</div>
      </div>
      <div className={techIconClass}>
        <img src={Mongo} alt="mongoDb" />
        <div className="flex items-center ml-2.5 text-white">MongoDB</div>
      </div>
      <div className={techIconClass}>
        <img src={SQL} alt="SQL" />
        <div className="flex items-center ml-2.5 text-white">PostgreSQL</div>
      </div>
    </div>
  );
};

export default Techstack;
