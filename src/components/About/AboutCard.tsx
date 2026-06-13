import React from "react";

const AboutCard: React.FC = () => {
  return (
    <div className="text-white">
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="chip">📍 Caruaru, Pernambuco · Brasil</span>
        <span className="chip">💼 Desenvolvedor Web</span>
        <span className="chip">🎓 Ciência da Computação</span>
      </div>

      <p className="text-white/80 text-[15px] leading-relaxed mb-4">
        Além de programar, adoro fazer atividades que me mantêm criativo e inspirado:
      </p>

      <ul className="space-y-2.5 mb-6 list-none p-0">
        <li className="flex items-start gap-3 text-white/80 text-sm">
          <span>🍰</span>
          Cozinhar (especialmente doces e receitas na air fryer)
        </li>
        <li className="flex items-start gap-3 text-white/80 text-sm">
          <span>🎮</span>
          Jogar videogame (Chrono Trigger, Undertale, Genshin Impact)
        </li>
        <li className="flex items-start gap-3 text-white/80 text-sm">
          <span>🎨</span>
          Apreciar arte (Van Gogh) e clássicos (De Volta para o Futuro)
        </li>
      </ul>

      <blockquote className="pl-4 border-l-2 border-accent italic text-accent text-sm">
        "Cristão por convicção, Dev por vocação."
        <footer className="text-white/40 not-italic mt-1 text-xs">— Alessandro</footer>
      </blockquote>
    </div>
  );
};

export default AboutCard;
