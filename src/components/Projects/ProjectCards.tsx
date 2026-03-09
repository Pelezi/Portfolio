import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface ProjectCardsProps {
  imgPath: string;
  title: string;
  description: string;
  ghLink: string;
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
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-justify">
          {description}
        </Card.Text>
        <Button variant="primary" href={ghLink} target="_blank" className="inline-flex items-center gap-1">
          <BsGithub className="inline-block" />
          {isBlog ? "Blog" : "GitHub"}
        </Button>

        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            className="ml-2.5 inline-flex items-center gap-1"
          >
            <CgWebsite className="inline-block" />
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
