import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import Title from "./Title";
import PortfolioContext from "../context/context";

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  return (
    <section id="about">
      <Container>
        <Title title="About" />
        <Row className="about-wrapper">
          <Col md={4} sm={12} className="justify-content-center">
            <Fade left={true} duration={1000} delay={600} distance="30px">
              <img
                className="w-100 rounded shadow-lg"
                alt="James Valdez headshot"
                src={`images/${img}`}
              />
            </Fade>
          </Col>
          <Col
            md={8}
            sm={12}
            className="text-center text-md-left pt-5 py-md-0 px-5"
          >
            <Fade left={true} duration={1000} delay={1000} distance="30px">
              <div>
                <p>
                  {paragraphOne ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                </p>
                <p>
                  {paragraphTwo ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                </p>
                <p>
                  {paragraphThree ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
                </p>
                {resume && (
                  <span className="d-flex mt-5 justify-content-center justify-content-md-start">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Download Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
