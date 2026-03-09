import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-footer pt-2.5 pb-2 z-10">
      <div className="flex flex-wrap">
        <div className="w-full md:w-4/12 text-center">
          <h3 className="text-white text-base mt-2 mb-2">Desenvolvido por Alessandro Cardoso</h3>
        </div>
        <div className="w-full md:w-4/12 text-center">
          <h3 className="text-white text-base mt-2 mb-2">Copyright © {year} AC</h3>
        </div>
        <div className="w-full md:w-4/12 text-center">
          <ul className="list-none mt-2 mb-2 p-0 flex justify-center">
            <li className="inline-block px-4">
              <a
                href="https://github.com/Pelezi"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="inline-block px-4">
              <a
                href="https://www.linkedin.com/in/alessandro-cardoso-500418163/"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="inline-block px-4">
              <a
                href="https://www.instagram.com/opelezi"
                className="text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
