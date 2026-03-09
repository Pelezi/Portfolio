import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center pb-2.5 text-white">
      <h1 className="text-white text-[2.3em] font-medium pt-2.5 text-center pb-5 w-full">
        Dias que <strong className="text-accent">Programo</strong>
      </h1>
      <GitHubCalendar
        username="Pelezi"
        blockSize={30}
        blockMargin={10}
        color="#60a5fa"
        fontSize={20}
      />
    </div>
  );
};

export default Github;
