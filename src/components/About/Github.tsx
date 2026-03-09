import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github: React.FC = () => {
  return (
    <Row
      className="justify-center pb-2.5 text-white"
    >
      <h1 className="project-heading pb-5">
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="soumyajit4419"
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
      />
    </Row>
  );
};

export default Github;
