import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <section>
      <div className="relative w-full bg-top bg-no-repeat pb-8 pt-8" id="home">
        <Particle />
        <div className="max-w-7xl mx-auto px-4 pt-36 pb-8 text-left text-gray-100">
          <div className="flex flex-wrap">
            <div className="w-full md:w-7/12 pt-20">
              <h1 className="text-[2.4em] pl-[50px] pb-4">
                Olá!{" "}
                <span className="animate-wave inline-block origin-[70%_70%]" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-[2.5em] pl-[45px]">
                EU SOU
                <strong className="text-accent"> ALESSANDRO CARDOSO</strong>
              </h1>

              <div className="p-[50px] text-left">
                <Type />
              </div>
            </div>

            <div className="w-full md:w-5/12 pb-5 flex justify-center items-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="max-w-full h-auto max-h-[450px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap pt-[50px] pb-[80px]">
          <div className="w-full text-center pt-6 text-white">
            <h1>Me Encontre</h1>
            <p>
              Fique à vontade para se <span className="text-accent">conectar </span>comigo
            </p>
            <ul className="flex justify-center pt-4 list-none p-0">
              <li className="inline-block px-4">
                <a
                  href="https://github.com/Pelezi"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center justify-center w-10 h-10 text-[1.2em] leading-8 bg-white rounded-full transition-all duration-500 text-accent-dark hover:text-accent hover:shadow-[0_0_5px_theme(colors.accent.DEFAULT)] group"
                >
                  <span className="absolute inset-0 rounded-full bg-accent-dark transition-transform duration-500 scale-90 -z-10 group-hover:scale-110 group-hover:shadow-[0_0_15px_theme(colors.accent.DEFAULT)]" />
                  <AiFillGithub />
                </a>
              </li>
              <li className="inline-block px-4">
                <a
                  href="https://www.linkedin.com/in/alessandro-cardoso-500418163/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center justify-center w-10 h-10 text-[1.2em] leading-8 bg-white rounded-full transition-all duration-500 text-accent-dark hover:text-accent hover:shadow-[0_0_5px_theme(colors.accent.DEFAULT)] group"
                >
                  <span className="absolute inset-0 rounded-full bg-accent-dark transition-transform duration-500 scale-90 -z-10 group-hover:scale-110 group-hover:shadow-[0_0_15px_theme(colors.accent.DEFAULT)]" />
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="inline-block px-4">
                <a
                  href="https://www.instagram.com/opelezi"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center justify-center w-10 h-10 text-[1.2em] leading-8 bg-white rounded-full transition-all duration-500 text-accent-dark hover:text-accent hover:shadow-[0_0_5px_theme(colors.accent.DEFAULT)] group"
                >
                  <span className="absolute inset-0 rounded-full bg-accent-dark transition-transform duration-500 scale-90 -z-10 group-hover:scale-110 group-hover:shadow-[0_0_15px_theme(colors.accent.DEFAULT)]" />
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
