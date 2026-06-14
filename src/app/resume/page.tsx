"use client";

import dynamic from "next/dynamic";

const ResumeNew = dynamic(() => import("@/components/Resume/ResumeNew"), { ssr: false });

export default function ResumePage() {
  return <ResumeNew />;
}
