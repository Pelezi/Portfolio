import React from "react";

interface PreProps {
  load: boolean;
}

const Pre: React.FC<PreProps> = ({ load }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full z-[999999] bg-surface-dark bg-[url('./Assets/pre.svg')] bg-no-repeat bg-center transition-opacity duration-300 ${
        load ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    />
  );
};

export default Pre;
