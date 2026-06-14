"use client";

import { useState, useEffect } from "react";
import Pre from "@/components/Pre";

const MIN_PRELOADER_MS = 5000;

export default function PreloaderGate({ children }: { children: React.ReactNode }) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoad(false), MIN_PRELOADER_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Pre load={load} />
      <div className={load ? "overflow-hidden h-screen" : ""}>{children}</div>
    </>
  );
}
