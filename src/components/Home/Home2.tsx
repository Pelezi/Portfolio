import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

const Home2: React.FC = () => {
  return (
    <div className="relative w-full pb-[70px] pt-[70px]" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-8/12 text-center text-white pt-[100px] pb-5">
            <h1 className="text-[2.6em]">
              DEIXE-ME <span className="text-accent"> ME APRESENTAR </span>
            </h1>
            <p className="pt-[50px] text-[1.2em] text-left">
              Sou um Desenvolvedor Web apaixonado por criar sistemas práticos e funcionais.
              Gosto de resolver problemas reais através do código, focando na construção de 
              <b className="text-accent"> APIs </b> e 
              <b className="text-accent"> automação de comunicações</b>, sempre buscando 
              otimizar a experiência do usuário e a gestão de dados.
              <br />
              <br />
              Tenho experiência com
              <i>
                <b className="text-accent">
                  {" "}
                  Node.js, NestJS, React, Next.js, Python e C/C++{" "}
                </b>
              </i>
              — e gosto de trabalhar tanto no backend quanto no frontend.
              <br />
              <br />
              Minhas áreas de interesse incluem o desenvolvimento de
              <i>
                <b className="text-accent">
                  {" "}
                  Aplicações Web, Automação de Sistemas{" "}
                </b>
              </i>
              e integração de plataformas de comunicação como o WhatsApp.
              <br />
              <br />
              Sempre que possível, gosto de construir projetos com
              <b className="text-accent"> Node.js </b> e frameworks modernos como{" "}
              <i>
                <b className="text-accent">React.js</b> e{" "}
                <b className="text-accent">Next.js</b>.
              </i>
            </p>
          </div>
          <div className="w-full md:w-4/12 flex justify-center items-center">
            <Tilt>
              <img src={myImg} className="w-64 md:w-80 h-auto mx-auto block" alt="avatar" />
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
