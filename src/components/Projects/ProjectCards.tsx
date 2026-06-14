"use client";

import React, { useRef, useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface ProjectCardsProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink?: string;
  isBlog: boolean;
  demoLink?: string;
  tags?: string[];
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  imgPath,
  title,
  description,
  ghLink,
  isBlog,
  demoLink,
  tags = [],
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.classList.add("fade-in-hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("fade-in-hidden");
          el.classList.add("fade-in-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="card-glow rounded-2xl overflow-hidden flex flex-col h-full">
      {/* Project image */}
      <div className="w-full h-44 overflow-hidden">
        <img
          src={imgPath}
          alt={title}
          className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <p className="text-sm text-white/80 flex-1 leading-relaxed text-left">
          {description}
        </p>

        {/* Tech tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded-full border border-accent/30 text-accent/90 bg-accent/5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-2.5 flex-wrap mt-1">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent border border-accent/40 hover:bg-accent/25 text-sm transition-all no-underline"
            >
              <BsGithub />
              {isBlog ? "Blog" : "GitHub"}
            </a>
          )}
          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 text-accent border border-accent/40 hover:bg-accent/25 text-sm transition-all no-underline"
            >
              <CgWebsite />
              Visualizar
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
