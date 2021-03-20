import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../context/context";
import Title from "./Title";

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 990) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project, idx) => {
            const { title, info, url, id } = project;
            const inverted = idx % 2 === 0 ? "inverted" : "";

            return (
              <Row key={id} className={`align-items-center ${inverted}`}>
                <Col
                  lg={4}
                  sm={12}
                  className={`text-center ${
                    inverted ? "text-lg-left" : "text-lg-right"
                  }`}
                >
                  <Fade
                    left={!!inverted && isDesktop}
                    right={!inverted && isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title}</h3>
                      <p>{info}</p>
                    </div>
                  </Fade>
                </Col>
                <Col
                  lg={8}
                  sm={12}
                  className={`text-center ${
                    inverted ? "text-lg-right" : "text-lg-left"
                  }`}
                >
                  <Fade
                    left={!!inverted && isDesktop}
                    right={!inverted && isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={250}
                    distance="30px"
                  >
                    <iframe
                      title={id}
                      width="560"
                      height="315"
                      src={url}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
