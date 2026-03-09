import React from "react";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

const About: React.FC = () => {
  return (
    <>
      <Particle />
      <div className="relative pt-[150px] pb-8 text-white w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center p-2.5">
            <div className="w-full md:w-7/12 flex flex-col justify-center pt-[30px] pb-[50px]">
              <h1 className="text-[2.1em] pb-5">
                Saiba Quem <strong className="text-accent">EU SOU</strong>
              </h1>
              <Aboutcard />
            </div>
            <div className="w-full md:w-5/12 pt-0 md:pt-[120px] pb-[50px]">
              <img src={laptopImg} alt="about" className="max-w-full h-auto" />
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
