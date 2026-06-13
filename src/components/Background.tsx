import React from "react";

const Background: React.FC = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0d0b1e]">
    <div className="absolute inset-0 aurora opacity-70" />
    <div className="absolute inset-0 stars" />
    <div className="absolute inset-0 stars stars-2" />
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0d0b1e] to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0d0b1e] to-transparent" />
  </div>
);

export default Background;
