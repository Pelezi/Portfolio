"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Web Full Stack",
          "Arquiteto de soluções em TypeScript e Node.js",
          "Cristão por convicção",
          "Entusiasta de Inteligência Artificial",
          "Especialista em viagem no tempo",
          "Bacharel em Ciência da Computação",
          "Caçador de conquistas em jogos retrô",
          "Mestre das medidas culinárias exatas",
          "Criador de soluções que facilitam o dia a dia"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
