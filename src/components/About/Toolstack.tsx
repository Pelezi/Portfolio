import React from "react";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

const toolIconClass =
  "flex items-center justify-center text-base m-4 md:m-4 px-5 py-2.5 opacity-95 outline outline-[1.7px] outline-blue-400/60 rounded-3xl shadow-[4px_5px_4px_3px_rgba(37,99,235,0.14)] transition-all duration-400 w-fit cursor-pointer hover:scale-105 hover:outline-[2.2px] hover:outline-blue-400/90 text-white";

const Toolstack: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center pb-[50px]">
      <div className={toolIconClass}>
        <img src={macOs} alt="macOs" className="h-6 leading-[1.6]" />
        <div className="flex items-center ml-2.5 text-white">Mac Os</div>
      </div>
      <div className={toolIconClass}>
        <img src={chrome} alt="Chrome" className="h-6 leading-[1.6]" />
        <div className="flex items-center ml-2.5 text-white">Google Chrome</div>
      </div>
      <div className={toolIconClass}>
        <img src={vsCode} alt="vsCode" className="h-6 leading-[1.6]" />
        <div className="flex items-center ml-2.5 text-white">Vs Code</div>
      </div>
      <div className={toolIconClass}>
        <img src={intelliJ} alt="go" className="h-6 leading-[1.6]" />
        <div className="flex items-center ml-2.5 text-white">IntelliJ</div>
      </div>
    </div>
  );
};

export default Toolstack;
