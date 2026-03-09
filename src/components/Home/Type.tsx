import React from "react";
import Typewriter from "typewriter-effect";

const Type: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Desenvolvedor Web",
          "Desenvolvedor Full Stack",
          "Especialista em Node.js",
          "Integrador de Sistemas",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
