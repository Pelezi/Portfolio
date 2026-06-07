import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as PeleziLogo } from "../../Assets/Pelezi.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
  const [activeLetter, setActiveLetter] = useState<ActiveLogoState>(null);

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

        const onEnter = () => setActiveLetter(letter);
        const onLeave = () => setActiveLetter((current) => (current === letter ? null : current));

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

      const onEnter = () => setActiveLetter(letter);
      const onLeave = () => setActiveLetter((current) => (current === letter ? null : current));

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
  }, []);

  return (
    <section>
      <div className="relative w-full bg-top bg-no-repeat pb-8 pt-8" id="home">
        <Particle />
        <div className="max-w-7xl mx-auto px-4 pt-36 pb-8 text-left text-gray-100">
          <div className="flex flex-wrap">
            <div className="w-full md:w-7/12 pt-20">
              <h1 className="text-[2.4em] pl-[50px] pb-4">
                Olá!{" "}
                <span className="animate-wave inline-block origin-[70%_70%]" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="text-[2.5em] pl-[45px]">
                EU SOU
                <strong className="text-accent"> ALESSANDRO CARDOSO</strong>
              </h1>

              <p className="pl-[45px] mt-3 text-white text-lg md:text-xl">
                Também conhecido como{" "}
                <span
                  className="text-[#f4d06f] cursor-pointer transition-all duration-200 hover:drop-shadow-[0_0_6px_rgba(244,208,111,0.9)]"
                  onMouseEnter={() => setActiveLetter("ALL")}
                  onMouseLeave={() => setActiveLetter(null)}
                >
                  Pelezi
                </span>
              </p>

              <div className="p-[50px] text-left">
                <Type />
              </div>
            </div>

            <div className="w-full md:w-5/12 pb-5 flex justify-center items-center">
              <div
                ref={logoWrapperRef}
                data-active-letter={activeLetter ?? ""}
                className="home-logo-interactive flex flex-col items-center"
              >
                <PeleziLogo
                  aria-label="Logo Pelezi interativa"
                  className="w-[78vw] max-w-[540px] md:w-[46vw] md:max-w-[640px] h-auto"
                />
                <span
                  className={`mt-2 min-h-[2.2rem] text-3xl font-semibold tracking-[0.25em] text-[#f4d06f] transition-all duration-300 ${
                    activeLetter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
                  }`}
                >
                  {activeLetter === "ALL" ? "PELEZI" : activeLetter ?? " "}
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

        .home-logo-interactive svg [id] {
          transition: opacity 220ms ease, filter 220ms ease, transform 220ms ease;
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
          filter: drop-shadow(0 0 7px rgba(244, 208, 111, 0.9));
          transform: translateZ(0) scale(1.012);
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
          filter: drop-shadow(0 0 6px rgba(244, 208, 111, 0.85));
          transform: translateZ(0) scale(1.015);
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

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap pt-[50px] pb-[80px]">
          <div className="w-full text-center pt-6 text-white">
            <h1>Me Encontre</h1>
            <p>
              Fique à vontade para se <span className="text-accent">conectar </span>comigo
            </p>
            <ul className="flex justify-center pt-4 list-none p-0">
              <li className="inline-block px-4">
                <a
                  href="https://github.com/Pelezi"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center justify-center w-10 h-10 text-[1.2em] leading-8 bg-white rounded-full transition-all duration-500 text-accent-dark hover:text-accent hover:shadow-[0_0_5px_theme(colors.accent.DEFAULT)] group"
                >
                  <span className="absolute inset-0 rounded-full bg-accent-dark transition-transform duration-500 scale-90 -z-10 group-hover:scale-110 group-hover:shadow-[0_0_15px_theme(colors.accent.DEFAULT)]" />
                  <AiFillGithub />
                </a>
              </li>
              <li className="inline-block px-4">
                <a
                  href="https://www.linkedin.com/in/alessandro-cardoso-500418163/"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center justify-center w-10 h-10 text-[1.2em] leading-8 bg-white rounded-full transition-all duration-500 text-accent-dark hover:text-accent hover:shadow-[0_0_5px_theme(colors.accent.DEFAULT)] group"
                >
                  <span className="absolute inset-0 rounded-full bg-accent-dark transition-transform duration-500 scale-90 -z-10 group-hover:scale-110 group-hover:shadow-[0_0_15px_theme(colors.accent.DEFAULT)]" />
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="inline-block px-4">
                <a
                  href="https://www.instagram.com/opelezi"
                  target="_blank"
                  rel="noreferrer"
                  className="relative inline-flex items-center justify-center w-10 h-10 text-[1.2em] leading-8 bg-white rounded-full transition-all duration-500 text-accent-dark hover:text-accent hover:shadow-[0_0_5px_theme(colors.accent.DEFAULT)] group"
                >
                  <span className="absolute inset-0 rounded-full bg-accent-dark transition-transform duration-500 scale-90 -z-10 group-hover:scale-110 group-hover:shadow-[0_0_15px_theme(colors.accent.DEFAULT)]" />
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
