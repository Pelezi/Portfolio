import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 px-6 py-5 backdrop-blur-md bg-[#0d0b1e]/60 z-10">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
        <span>
          Desenvolvido por <span className="text-white/80">Alessandro Cardoso</span>
        </span>
        <span>© {year} AC</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Pelezi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/50 hover:text-accent transition-colors"
          >
            <AiFillGithub className="text-base" />
          </a>
          <a
            href="https://www.linkedin.com/in/alessandro-cardoso-500418163/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/50 hover:text-accent transition-colors"
          >
            <FaLinkedinIn className="text-base" />
          </a>
          <a
            href="https://www.instagram.com/opelezi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/50 hover:text-accent transition-colors"
          >
            <AiFillInstagram className="text-base" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
