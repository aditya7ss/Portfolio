import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is{" "}
            <span className="purple">Aditya Shukla </span>
            from <span className="purple"> Rewa Madhya Pradesh.</span>
            <br /> I have done the BTech Engineering from
            <span className="purple"> RUSTAM JI INSTITUTE OF TECHNOLOGY </span>a
            four year of UG Program in{" "}
            <span className="purple">Electronics and Communication </span>{" "}
            Passout of 2021 batch.
            <br />After I have strong interset in webdevlopmet so i decided to go
            through a course of{" "}
            <span className="purple">Full Stack Webdevlopmet</span>
            from <span style={{ color: "black" }}>Coding Ninja </span>where I
            learnt and enhance my knowledge on this field.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket/Badmintion
            </li>
            <li className="about-activity">
              <ImPointRight /> Tutoring
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ color: "black" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
