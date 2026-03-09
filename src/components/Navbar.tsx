import React, { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const NavBar: React.FC = () => {
  const [expand, setExpand] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const closeNav = () => setExpand(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 py-1 text-xl ${
        navColour
          ? "bg-[#1b1a2ea9] shadow-[0_10px_10px_0_rgba(9,5,29,0.171)] backdrop-blur-[15px]"
          : "bg-transparent"
      } md:bg-transparent ${expand ? "bg-surface-navbarSolid" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        <a href="/" className="flex items-center text-white no-underline">
          <img src={logo} className="h-[1.4em] w-[2.5em]" alt="brand" />
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden relative bg-transparent border-transparent p-2 focus:outline-none"
          onClick={() => setExpand(!expand)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block bg-accent h-1 w-[27px] transition-transform duration-300 ${
              expand
                ? "absolute left-3 top-2.5 rotate-[135deg] opacity-90"
                : "mt-[5px] mb-[5px]"
            }`}
          />
          <span
            className={`block bg-accent h-1 w-[27px] transition-transform duration-300 ${
              expand ? "h-3 invisible bg-transparent" : "mt-[5px] mb-[5px]"
            }`}
          />
          <span
            className={`block bg-accent h-1 w-[27px] transition-transform duration-300 ${
              expand
                ? "absolute left-3 top-2.5 -rotate-[135deg] opacity-90"
                : "mt-[5px] mb-[5px]"
            }`}
          />
        </button>

        {/* Nav Links */}
        <div
          className={`w-full md:w-auto md:flex md:items-center ${
            expand ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:ml-auto list-none gap-0 md:gap-0 p-0 m-0">
            <li className="relative md:ml-5">
              <Link
                to="/"
                onClick={closeNav}
                className="block text-white no-underline py-3 px-4 font-normal transition-all duration-300 relative group"
              >
                <AiOutlineHome className="inline-block mb-0.5" /> Início
                <span className="hidden md:block absolute bottom-[1px] left-0 h-[5px] w-0 rounded-2xl bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="relative md:ml-5">
              <Link
                to="/about"
                onClick={closeNav}
                className="block text-white no-underline py-3 px-4 font-normal transition-all duration-300 relative group"
              >
                <AiOutlineUser className="inline-block mb-0.5" /> Sobre
                <span className="hidden md:block absolute bottom-[1px] left-0 h-[5px] w-0 rounded-2xl bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="relative md:ml-5">
              <Link
                to="/project"
                onClick={closeNav}
                className="block text-white no-underline py-3 px-4 font-normal transition-all duration-300 relative group"
              >
                <AiOutlineFundProjectionScreen className="inline-block mb-0.5" />{" "}
                Projetos
                <span className="hidden md:block absolute bottom-[1px] left-0 h-[5px] w-0 rounded-2xl bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="relative md:ml-5">
              <Link
                to="/resume"
                onClick={closeNav}
                className="block text-white no-underline py-3 px-4 font-normal transition-all duration-300 relative group"
              >
                <CgFileDocument className="inline-block mb-0.5" /> Currículo
                <span className="hidden md:block absolute bottom-[1px] left-0 h-[5px] w-0 rounded-2xl bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
            <li className="relative md:ml-5 pt-2.5 md:pt-0">
              <a
                href="https://github.com/Pelezi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 bg-accent-muted text-white no-underline py-1 px-4 rounded leading-[1.4em] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                <CgGitFork className="text-lg" />{" "}
                <AiFillStar className="text-base" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
