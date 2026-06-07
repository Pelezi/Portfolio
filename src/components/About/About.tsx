import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import avatarImg from "../../Assets/avatar.svg";
import Toolstack from "./Toolstack";

const About: React.FC = () => {
  return (
    <>
      <Particle />
      <div className="relative pt-[150px] pb-8 text-white w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16 py-4">
            <div className="w-full md:w-7/12 flex flex-col justify-center pt-[30px] pb-[50px] text-left">
              <h1 className="text-[2.1em] pb-5 text-left">
                Saiba Quem <strong className="text-accent">EU SOU</strong>
              </h1>
              <Aboutcard />
            </div>
            <div className="w-full md:w-5/12 pt-0 md:pt-0 pb-[20px] flex md:justify-end justify-center">
              <img src={avatarImg} alt="about" className="w-full max-w-[420px] h-auto" />
            </div>
          </div>
          <h1 className="text-white text-[2.3em] font-medium pt-2.5 text-center">
            Minhas <strong className="text-accent">Habilidades</strong>
          </h1>

          <Techstack />

          <h1 className="text-white text-[2.3em] font-medium pt-2.5 text-center">
            <strong className="text-accent">Ferramentas</strong> que uso
          </h1>
          <Toolstack />

          <Github />
        </div>
      </div>
    </>
  );
};

export default About;
