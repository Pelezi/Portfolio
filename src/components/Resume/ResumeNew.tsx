"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const pdf = "/assets/Soumyajit_Behera.pdf";

const ResumeNew: React.FC = () => {
  const [width, setWidth] = useState<number>(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <div className="relative w-full pt-[110px] pb-8 text-white">
        <div className="flex justify-center relative">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 bg-accent text-white no-underline py-1.5 px-6 rounded transition-colors duration-300 hover:bg-accent-dark max-w-[250px]"
          >
            <AiOutlineDownload className="inline-block" />
            &nbsp;Baixar Currículo
          </a>
        </div>

        <div className="flex justify-center pt-12 pb-12">
          <Document file={pdf} className="flex justify-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>

        <div className="flex justify-center relative">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 bg-accent text-white no-underline py-1.5 px-6 rounded transition-colors duration-300 hover:bg-accent-dark max-w-[250px]"
          >
            <AiOutlineDownload className="inline-block" />
            &nbsp;Baixar Currículo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeNew;
