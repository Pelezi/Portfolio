import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface ProjectCardsProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink?: string;
  isBlog: boolean;
  demoLink?: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({
  imgPath,
  title,
  description,
  ghLink,
  isBlog,
  demoLink,
}) => {
  return (
    <div className="flex flex-col h-full shadow-[0_4px_5px_3px_rgba(59,130,246,0.46)] text-white bg-transparent opacity-90 transition-all duration-500 rounded-lg overflow-hidden hover:scale-[1.02] hover:shadow-[0_4px_4px_5px_rgba(59,130,246,0.76)]">
      <img src={imgPath} alt="card-img" className="p-5 opacity-80 rounded-[10px] w-full" />
      <div className="flex flex-col flex-1 p-5">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
        <p className="text-justify flex-1 text-sm">
          {description}
        </p>
        <div className="mt-4">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 bg-accent text-white no-underline py-1.5 px-4 rounded transition-colors duration-300 hover:bg-accent-dark"
            >
              <BsGithub className="inline-block" />
              {isBlog ? "Blog" : "GitHub"}
            </a>
          )}

          {!isBlog && demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 bg-accent text-white no-underline py-1.5 px-4 rounded transition-colors duration-300 hover:bg-accent-dark ml-2.5"
            >
              <CgWebsite className="inline-block" />
              Visualizar
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
