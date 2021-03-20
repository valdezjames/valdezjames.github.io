import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import PortfolioContext from "../context/context";
import Title from "./Title";

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, email, networks } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>
            <div className="social-links">
              {networks &&
                networks.map(({ id, name, url }) => (
                  <a
                    key={id}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                    title={name}
                  >
                    <i className={`fa fa-${name || "refresh"}`} />
                  </a>
                ))}
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              title="email"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
