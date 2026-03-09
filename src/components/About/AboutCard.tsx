import React from "react";
import { ImPointRight } from "react-icons/im";

const AboutCard: React.FC = () => {
  return (
    <div className="border-none text-white bg-transparent">
      <div>
        <blockquote className="mb-0">
          <p className="text-justify">
            <span className="text-accent">Alessandro Cardoso</span>{" "}
            de <span className="text-accent">Caruaru, Pernambuco, Brasil</span>.
            <br />
            Atualmente trabalho como{" "}
            <span className="text-accent">Desenvolvedor Web</span>.
            <br />Tenho um Bacharelado em{" "}
            <span className="text-accent">Ciência da Computação</span>.
            <br />
            <br />
            Além de programar, adoro fazer atividades que me mantêm
            criativo e inspirado:
          </p>

          <ul>
            <li className="list-none text-left pl-px flex items-center gap-2">
              <ImPointRight className="inline-block shrink-0" /> Cozinhar (especialmente doces e receitas na air fryer) 🍰
            </li>
            <li className="list-none text-left pl-px flex items-center gap-2">
              <ImPointRight className="inline-block shrink-0" /> Jogar videogame (Chrono Trigger, Undertale, Genshin Impact) 🎮
            </li>
            <li className="list-none text-left pl-px flex items-center gap-2">
              <ImPointRight className="inline-block shrink-0" /> Apreciar arte (Van Gogh) e clássicos (De Volta para o Futuro) 🎨
            </li>
          </ul>

          <p className="text-blue-300">
            "Cristão por convicção, Dev por vocação."{" "}
          </p>
          <footer className="text-blue-300 text-sm">Alessandro</footer>
        </blockquote>
      </div>
    </div>
  );
};
export default AboutCard;
