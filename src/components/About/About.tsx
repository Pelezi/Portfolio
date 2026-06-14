import React from "react";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";

const avatarImg = "/assets/avatar.svg";

const About: React.FC = () => {
  return (
    <div className="relative pt-[150px] pb-8 text-white w-full">
      <div className="max-w-5xl mx-auto px-6">

        {/* Bio section */}
        <section className="grid md:grid-cols-[1fr_auto] gap-12 items-center fade-up pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-3">Sobre mim</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Saiba quem <span className="text-gradient">eu sou</span>
            </h1>
            <Aboutcard />
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-accent/25 blur-2xl" />
              <div className="relative w-52 h-52 rounded-full ring-4 ring-accent/50 glow-pulse overflow-hidden">
                <img src={avatarImg} alt="about" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <Techstack />

        {/* Tools */}
        <Toolstack />

        {/* GitHub calendar */}
        <Github />
      </div>
    </div>
  );
};

export default About;
