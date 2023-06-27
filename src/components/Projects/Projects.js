import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import auth from "../../Assets/Projects/Auth.png"
import booksHub from "../../Assets/Projects/BookHub.png";
import chatify from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/placementcell.png";
import Ers from '../../Assets/Projects/ERS.png'
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
              imgPath={Ers}
              isBlog={false}
              title="Employee Reviewe System"
              description="This Employee review web application is created for employees to submit feedback toward each other's performance."
              ghLink="https://github.com/aditya7ss/Employee_Review-System.github.ibo"
              demoLink="https://kind-pear-clam-vest.cyclic.app/"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auth}
              isBlog={false}
              title="Authentication"
              description="A complete authentication app with login, logout, register, forget password, email verification(for added security), and access control."
              ghLink="https://github.com/aditya7ss/Autherization"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
