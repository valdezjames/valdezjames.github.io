import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "bootstrap/dist/css/bootstrap.min.css";

import { headData } from "../data/data";
import "../style/main.scss";

export default () => {
  const { lang } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || "en"} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section>
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center pb-5">
              Whoops! (404)
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="justify-content-center">
              <Link className="cta-btn cta-btn--resume" to="/">
                Back to homepage
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
