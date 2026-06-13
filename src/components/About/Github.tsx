import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center pb-8 text-white">
      <div className="w-full text-center mb-6">
        <p className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-3">Atividade</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Dias que <span className="text-gradient">Programo</span>
        </h2>
      </div>
      <GitHubCalendar
        username="Pelezi"
        blockSize={30}
        blockMargin={10}
        blockRadius={10}
        fontSize={20}
        theme={{
          level0: "#1e1b4b",
          level1: "#3730a3",
          level2: "#4338ca",
          level3: "#4f46e5",
          level4: "#6366f1",
        }}
      />
    </div>
  );
};

export default Github;
