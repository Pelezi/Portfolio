"use client";

import React from "react";
import Tilt from "react-parallax-tilt";

const myImg = "/assets/avatar.svg";

const Home2: React.FC = () => {
  return (
    <div className="relative w-full pb-[70px] pt-[70px]" id="about">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">

          {/* Avatar — LEFT */}
          <div className="flex justify-center">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full ring-4 ring-accent/50 overflow-hidden">
                <img
                  src={myImg}
                  className="w-full h-full object-cover"
                  alt="avatar"
                />
              </div>
            </Tilt>
          </div>

          {/* Text — RIGHT */}
          <div className="text-left text-white space-y-5 pt-8 md:pt-0">
            <p className="text-xs uppercase tracking-[0.3em] text-accent/80">Sobre mim</p>
            <h1 className="text-[2.2em] font-bold">
              DEIXA EU{" "}
              <span className="text-gradient">ME APRESENTAR</span>
            </h1>
            <p className="text-[1.05em] text-white/80 leading-relaxed">
              Sou um Desenvolvedor Web apaixonado por criar sistemas práticos e funcionais.
              Gosto de resolver problemas reais através do código, focando na construção de{" "}
              <b className="text-accent">APIs</b> e{" "}
              <b className="text-accent">automação de comunicações</b>, sempre buscando
              otimizar a experiência do usuário e a gestão de dados.
            </p>
            <p className="text-[1.05em] text-white/80 leading-relaxed">
              Tenho experiência com{" "}
              <i>
                <b className="text-accent">Node.js, NestJS, React, Next.js, Python e C/C++</b>
              </i>{" "}
              — e gosto de trabalhar tanto no backend quanto no frontend.
            </p>
            <p className="text-[1.05em] text-white/80 leading-relaxed">
              Minhas áreas de interesse incluem o desenvolvimento de{" "}
              <i>
                <b className="text-accent">Aplicações Web, Automação de Sistemas</b>
              </i>{" "}
              e integração de plataformas de comunicação como o WhatsApp.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home2;
