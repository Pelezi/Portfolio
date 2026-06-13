import React, { useCallback, useEffect, useRef } from "react";
import { ReactComponent as PeleziLogo } from "../../Assets/Pelezi.svg";
import { Link } from "react-router-dom";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

type LogoLetter = "P" | "E" | "L" | "Z" | "I" | null;
type ActiveLogoState = Exclude<LogoLetter, null> | "ALL" | null;

const LETTER_GROUPS: Record<Exclude<LogoLetter, null>, string[]> = {
  P: ["p-circle", "p-line"],
  E: ["e", "e-two"],
  L: ["l-circle", "l-dot-one", "l-dot-two", "l-dot-three"],
  Z: ["z-circle", "z-dot-one", "z-dot-two", "z-dot-three"],
  I: ["i-circle", "i-line", "i-line-dot-one", "i-line-dot-two", "i-line-dot-three"],
};

const Home: React.FC = () => {
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const letterLabelRef = useRef<HTMLSpanElement>(null);

  // Direct DOM mutation — no React re-render in the hot path so CSS starts instantly.
  const setActiveDirect = useCallback((letter: ActiveLogoState) => {
    const wrapper = logoWrapperRef.current;
    const label = letterLabelRef.current;
    if (wrapper) wrapper.dataset.activeLetter = letter ?? "";
    if (label) {
      if (letter) {
        label.textContent = letter === "ALL" ? "PELEZI" : letter;
        label.style.opacity = "1";
        label.style.transform = "translateY(0)";
      } else {
        label.textContent = " ";
        label.style.opacity = "0";
        label.style.transform = "translateY(4px)";
      }
    }
  }, []);

  useEffect(() => {
    const wrapper = logoWrapperRef.current;
    if (!wrapper) {
      return;
    }

    const cleanupCallbacks: Array<() => void> = [];
    const createdHitZones: SVGElement[] = [];
    const svg = wrapper.querySelector("svg");

    if (svg) {
      const hitLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
      hitLayer.setAttribute("id", "hover-hit-layer");
      svg.appendChild(hitLayer);

      const addPathHit = (sourceId: string, letter: Exclude<LogoLetter, null>, strokeWidth: number) => {
        const source = wrapper.querySelector<SVGPathElement>(`#${sourceId}`);
        if (!source) {
          return;
        }

        const hit = document.createElementNS("http://www.w3.org/2000/svg", "path");
        hit.setAttribute("d", source.getAttribute("d") || "");
        hit.setAttribute("fill", "none");
        hit.setAttribute("stroke", "rgba(255,255,255,0)");
        hit.setAttribute("stroke-width", String(strokeWidth));
        hit.setAttribute("stroke-linecap", source.getAttribute("stroke-linecap") || "round");
        hit.setAttribute("stroke-linejoin", source.getAttribute("stroke-linejoin") || "round");
        hit.setAttribute("data-hit-letter", letter);
        hit.classList.add("letter-hit-zone");
        hitLayer.appendChild(hit);
        createdHitZones.push(hit);
      };

      const addCircleHit = (
        sourceId: string,
        letter: Exclude<LogoLetter, null>,
        expand = 24,
        mode: "fill" | "ring" = "fill"
      ) => {
        const source = wrapper.querySelector<SVGCircleElement>(`#${sourceId} circle`) || wrapper.querySelector<SVGCircleElement>(`#${sourceId}`);
        if (!source) {
          return;
        }

        const cx = source.getAttribute("cx") || "0";
        const cy = source.getAttribute("cy") || "0";
        const r = Number(source.getAttribute("r") || "0");

        const hit = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        hit.setAttribute("cx", cx);
        hit.setAttribute("cy", cy);
        if (mode === "ring") {
          hit.setAttribute("r", String(r));
          hit.setAttribute("fill", "none");
          hit.setAttribute("stroke", "rgba(255,255,255,0)");
          hit.setAttribute("stroke-width", String(expand * 2));
        } else {
          hit.setAttribute("r", String(r + expand));
          hit.setAttribute("fill", "rgba(255,255,255,0)");
        }
        hit.setAttribute("data-hit-letter", letter);
        hit.classList.add("letter-hit-zone");
        hitLayer.appendChild(hit);
        createdHitZones.push(hit);
      };

      addCircleHit("p-circle", "P", 20, "ring");

      addCircleHit("l-circle", "L", 18, "ring");
      addCircleHit("l-dot-one", "L", 18);
      addCircleHit("l-dot-two", "L", 18);
      addCircleHit("l-dot-three", "L", 18);

      addCircleHit("z-circle", "Z", 18, "ring");
      addCircleHit("z-dot-one", "Z", 18);
      addCircleHit("z-dot-two", "Z", 18);
      addCircleHit("z-dot-three", "Z", 18);

      addCircleHit("i-circle", "I", 16);
      addPathHit("i-line", "I", 28);
      addPathHit("i-line-dot-one", "I", 24);
      addPathHit("i-line-dot-two", "I", 22);
      addPathHit("i-line-dot-three", "I", 20);

      // Keep this before E hit zones so E can override P-line on overlaps.
      addPathHit("p-line", "P", 56);

      // Keep E last to guarantee inner hover and priority over crossing paths.
      addCircleHit("e", "E", 20);
      addCircleHit("e-two", "E", 26);
    }

    (Object.keys(LETTER_GROUPS) as Array<Exclude<LogoLetter, null>>).forEach((letter) => {
      LETTER_GROUPS[letter].forEach((id) => {
        if (id === "p-line") {
          return;
        }

        const element = wrapper.querySelector<SVGGElement | SVGPathElement>(`#${id}`);
        if (!element) {
          return;
        }

        const onEnter = () => setActiveDirect(letter);
        const onLeave = () => { if (wrapper.dataset.activeLetter === letter) setActiveDirect(null); };

        element.addEventListener("mouseenter", onEnter);
        element.addEventListener("mouseleave", onLeave);

        cleanupCallbacks.push(() => {
          element.removeEventListener("mouseenter", onEnter);
          element.removeEventListener("mouseleave", onLeave);
        });
      });
    });

    wrapper.querySelectorAll<SVGElement>(".letter-hit-zone").forEach((zone) => {
      const letter = zone.getAttribute("data-hit-letter") as Exclude<LogoLetter, null> | null;
      if (!letter) {
        return;
      }

      const onEnter = () => setActiveDirect(letter);
      const onLeave = () => { if (wrapper.dataset.activeLetter === letter) setActiveDirect(null); };

      zone.addEventListener("mouseenter", onEnter);
      zone.addEventListener("mouseleave", onLeave);

      cleanupCallbacks.push(() => {
        zone.removeEventListener("mouseenter", onEnter);
        zone.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      cleanupCallbacks.forEach((cleanup) => cleanup());
      createdHitZones.forEach((zone) => zone.remove());
      const hitLayer = wrapper.querySelector("#hover-hit-layer");
      if (hitLayer) {
        hitLayer.remove();
      }
    };
  }, [setActiveDirect]);

  return (
    <section>
      <div className="relative w-full pb-8 pt-8" id="home">
        <div className="w-full pl-16 md:pl-32 pr-4 pt-36 pb-8 text-left text-gray-100">
          <div className="flex flex-wrap md:flex-nowrap md:items-start md:gap-4">
            <div className="w-full md:w-[45%] shrink-0">
              <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent/90 mb-5 fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Disponível para projetos
              </span>

              <h1 className="text-[2em] pb-3 fade-up" style={{ animationDelay: "80ms" }}>
                Olá!{" "}
                <span className="animate-wave inline-block origin-[70%_70%]" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight fade-up" style={{ animationDelay: "160ms" }}>
                EU SOU{" "}
                <br className="hidden md:block" />
                <span className="text-gradient">ALESSANDRO CARDOSO</span>
              </h1>

              <p className="mt-4 text-white/70 text-base fade-up" style={{ animationDelay: "240ms" }}>
                Também conhecido como{" "}
                <span
                  className="text-accent cursor-pointer transition-all duration-100 hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.9)]"
                  onMouseEnter={() => setActiveDirect("ALL")}
                  onMouseLeave={() => setActiveDirect(null)}
                >
                  Pelezi
                </span>
              </p>

              <div className="pt-5 text-left fade-up" style={{ animationDelay: "320ms" }}>
                <Type />
              </div>

              <div className="mt-6 flex flex-wrap gap-3 fade-up" style={{ animationDelay: "400ms" }}>
                <Link
                  to="/project"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-white text-sm font-medium shadow-[0_10px_30px_-10px_rgba(99,102,241,0.7)] hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.9)] transition-all hover:-translate-y-0.5 no-underline"
                >
                  Ver Projetos <BsArrowRight />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/5 text-white text-sm hover:bg-white/10 transition-all no-underline"
                >
                  Sobre mim
                </Link>
              </div>
            </div>

            <div className="w-full md:w-[55%] pb-5 flex justify-center items-center">
              <div
                ref={logoWrapperRef}
                className="home-logo-interactive flex flex-col items-center"
              >
                <PeleziLogo
                  aria-label="Logo Pelezi interativa"
                  className="w-[78vw] max-w-[540px] md:w-[46vw] md:max-w-[640px] h-auto"
                />
                <span
                  ref={letterLabelRef}
                  className="mt-2 min-h-[3.5rem] text-5xl font-semibold tracking-[0.25em] text-accent"
                  style={{ opacity: 0, transform: "translateY(4px)", transition: "opacity 80ms ease-out, transform 80ms ease-out" }}
                >
                  {" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .home-logo-interactive #Layer_3 {
          display: none;
        }

        .home-logo-interactive {
          transition: transform 150ms ease-out;
        }

        .home-logo-interactive[data-active-letter="ALL"] {
          transform: scale(1.06);
        }

        .home-logo-interactive svg [id] {
          transition: opacity 80ms ease-out, transform 80ms ease-out;
          transform-box: fill-box;
          transform-origin: center;
        }

        .home-logo-interactive .letter-hit-zone {
          pointer-events: all;
          cursor: pointer;
          opacity: 0;
        }

        .home-logo-interactive[data-active-letter="P"] :is(#e, #e-two, #l-circle, #l-dot-one, #l-dot-two, #l-dot-three, #z-circle, #z-dot-one, #z-dot-two, #z-dot-three, #i-circle, #i-line, #i-line-dot-one, #i-line-dot-two, #i-line-dot-three),
        .home-logo-interactive[data-active-letter="E"] :is(#p-circle, #p-line, #l-circle, #l-dot-one, #l-dot-two, #l-dot-three, #z-circle, #z-dot-one, #z-dot-two, #z-dot-three, #i-circle, #i-line, #i-line-dot-one, #i-line-dot-two, #i-line-dot-three),
        .home-logo-interactive[data-active-letter="L"] :is(#p-circle, #p-line, #e, #e-two, #z-circle, #z-dot-one, #z-dot-two, #z-dot-three, #i-circle, #i-line, #i-line-dot-one, #i-line-dot-two, #i-line-dot-three),
        .home-logo-interactive[data-active-letter="Z"] :is(#p-circle, #p-line, #e, #e-two, #l-circle, #l-dot-one, #l-dot-two, #l-dot-three, #i-circle, #i-line, #i-line-dot-one, #i-line-dot-two, #i-line-dot-three),
        .home-logo-interactive[data-active-letter="I"] :is(#p-circle, #p-line, #e, #e-two, #l-circle, #l-dot-one, #l-dot-two, #l-dot-three, #z-circle, #z-dot-one, #z-dot-two, #z-dot-three) {
          opacity: 0.24;
        }

        .home-logo-interactive[data-active-letter="ALL"] #p-circle,
        .home-logo-interactive[data-active-letter="ALL"] #p-line,
        .home-logo-interactive[data-active-letter="ALL"] #e,
        .home-logo-interactive[data-active-letter="ALL"] #e-two,
        .home-logo-interactive[data-active-letter="ALL"] #l-circle,
        .home-logo-interactive[data-active-letter="ALL"] #l-dot-one,
        .home-logo-interactive[data-active-letter="ALL"] #l-dot-two,
        .home-logo-interactive[data-active-letter="ALL"] #l-dot-three,
        .home-logo-interactive[data-active-letter="ALL"] #z-circle,
        .home-logo-interactive[data-active-letter="ALL"] #z-dot-one,
        .home-logo-interactive[data-active-letter="ALL"] #z-dot-two,
        .home-logo-interactive[data-active-letter="ALL"] #z-dot-three,
        .home-logo-interactive[data-active-letter="ALL"] #i-circle,
        .home-logo-interactive[data-active-letter="ALL"] #i-line,
        .home-logo-interactive[data-active-letter="ALL"] #i-line-dot-one,
        .home-logo-interactive[data-active-letter="ALL"] #i-line-dot-two,
        .home-logo-interactive[data-active-letter="ALL"] #i-line-dot-three {
          opacity: 1 !important;
        }

        .home-logo-interactive[data-active-letter="P"] #p-circle,
        .home-logo-interactive[data-active-letter="P"] #p-line,
        .home-logo-interactive[data-active-letter="E"] #e,
        .home-logo-interactive[data-active-letter="E"] #e-two,
        .home-logo-interactive[data-active-letter="L"] #l-circle,
        .home-logo-interactive[data-active-letter="L"] #l-dot-one,
        .home-logo-interactive[data-active-letter="L"] #l-dot-two,
        .home-logo-interactive[data-active-letter="L"] #l-dot-three,
        .home-logo-interactive[data-active-letter="Z"] #z-circle,
        .home-logo-interactive[data-active-letter="Z"] #z-dot-one,
        .home-logo-interactive[data-active-letter="Z"] #z-dot-two,
        .home-logo-interactive[data-active-letter="Z"] #z-dot-three,
        .home-logo-interactive[data-active-letter="I"] #i-circle,
        .home-logo-interactive[data-active-letter="I"] #i-line,
        .home-logo-interactive[data-active-letter="I"] #i-line-dot-one,
        .home-logo-interactive[data-active-letter="I"] #i-line-dot-two,
        .home-logo-interactive[data-active-letter="I"] #i-line-dot-three {
          opacity: 1 !important;
          transform: scale(1.015);
        }

        .home-logo-interactive #p-circle,
        .home-logo-interactive #p-line,
        .home-logo-interactive #e,
        .home-logo-interactive #e-two,
        .home-logo-interactive #l-circle,
        .home-logo-interactive #l-dot-one,
        .home-logo-interactive #l-dot-two,
        .home-logo-interactive #l-dot-three,
        .home-logo-interactive #z-circle,
        .home-logo-interactive #z-dot-one,
        .home-logo-interactive #z-dot-two,
        .home-logo-interactive #z-dot-three,
        .home-logo-interactive #i-circle,
        .home-logo-interactive #i-line,
        .home-logo-interactive #i-line-dot-one,
        .home-logo-interactive #i-line-dot-two,
        .home-logo-interactive #i-line-dot-three {
          cursor: pointer;
        }
      `}</style>

      <Home2 />

      <div className="w-full px-6 py-14 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Me Encontre</p>
        <p className="mt-3 text-sm text-white/80">
          Fique à vontade para se <span className="text-accent">conectar</span> comigo
        </p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <a
            href="https://github.com/Pelezi"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/40 bg-accent/10 text-accent transition-all duration-300 hover:bg-accent/25 hover:-translate-y-0.5"
          >
            <AiFillGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/alessandro-cardoso-500418163/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/40 bg-accent/10 text-accent transition-all duration-300 hover:bg-accent/25 hover:-translate-y-0.5"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
          <a
            href="https://www.instagram.com/opelezi"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-accent/40 bg-accent/10 text-accent transition-all duration-300 hover:bg-accent/25 hover:-translate-y-0.5"
          >
            <AiFillInstagram className="text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
