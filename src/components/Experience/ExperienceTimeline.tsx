"use client";

import React, { useRef, useEffect } from "react";
import experienceData from "../../data/experience.json";

interface ExperienceEntry {
  dateRange: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

const TimelineItem: React.FC<{ entry: ExperienceEntry; index: number }> = ({
  entry,
  index,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;
    el.classList.add("fade-in-hidden");
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            el.classList.remove("fade-in-hidden");
            el.classList.add("fade-in-visible");
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={itemRef} className="relative pl-10 mb-10">
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-accent shadow-[0_0_14px_4px_rgba(99,102,241,0.55)] border-2 border-[#0d0b1e] z-10" />

      {/* Card */}
      <div className="card-glow rounded-2xl p-6">
        <p className="text-accent/80 text-xs mb-1 font-mono">{entry.dateRange}</p>
        <h3 className="text-white font-semibold text-lg leading-tight mb-0.5">{entry.role}</h3>
        <p className="text-white/50 text-sm mb-4">
          {entry.company} · {entry.location}
        </p>
        <p className="text-white/75 text-sm mb-4 leading-relaxed">{entry.description}</p>

        {entry.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4 list-none p-0">
            {entry.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-white/65 text-sm">
                <span className="text-accent mt-0.5 shrink-0">▸</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {entry.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {entry.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-0.5 rounded-full border border-accent/30 text-accent/90 bg-accent/5"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperienceTimeline: React.FC = () => {
  const entries = experienceData as ExperienceEntry[];

  return (
    <div className="relative max-w-2xl mx-auto px-4">
      {/* Vertical connecting line */}
      <div
        className="absolute left-[7px] top-2 bottom-8 w-[2px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(99,102,241,0.85) 0%, rgba(99,102,241,0.15) 100%)",
        }}
      />

      {entries.map((entry, index) => (
        <TimelineItem key={index} entry={entry} index={index} />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
