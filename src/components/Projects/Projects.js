import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import booksHub from "../../Assets/Projects/BookHub.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booksHub}
              isBlog={false}
              title="BooksHub"
              description="Discover, Compare and Buy Books.The online Hub for all Book Lovers where you can get your hands on the best offer price."
              ghLink="https://github.com/aditya7ss/BooksHub"
              demoLink="https://bookshub-ier7.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Placement Cell"
              description="This placement cell web application is created for users/employees to manage interviews of students, and allocate students to companies` interviews."
              ghLink="https://github.com/aditya7ss/Placement_cell"
              demoLink="https://placement-cell-gtdd.onrender.com/sign-up"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hospital Api"
              description="An API created using NodeJS for the doctors of a hospital to cater to the need of the healthcare system during Covid-19. "
              ghLink="https://github.com/aditya7ss/Hospital_Api"
              demoLink="https://hospital-api-6xfd.onrender.com"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
