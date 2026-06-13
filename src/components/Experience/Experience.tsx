import React from "react";
import ExperienceTimeline from "./ExperienceTimeline";

const Experience: React.FC = () => {
  return (
    <div className="relative pt-[150px] pb-16 text-white w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-3">Carreira</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Minha <span className="text-gradient">Experiência</span>
          </h1>
          <p className="mt-3 text-sm text-white/60">
            Trajetória profissional e marcos importantes
          </p>
        </div>
        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default Experience;
