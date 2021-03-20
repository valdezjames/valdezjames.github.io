import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import PortfolioContext from "../context/context";

const Marker = ({ appRef, footerRef }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!appRef?.current || !footerRef?.current) return;

      const { top, height } = appRef.current.getBoundingClientRect();
      const { width } = footerRef.current.getBoundingClientRect();
      const progress = (top * -1) / (height - window.innerHeight);
      const pos = width * progress;
      setScrollPosition(Math.min(pos, width - 8));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [appRef, footerRef]);

  return (
    <div id="scrubber" style={{ left: `${scrollPosition}px` }}>
      <div id="handle"></div>
      <div id="line"></div>
    </div>
  );
};

const Footer = ({ appRef }) => {
  const { sections } = useContext(PortfolioContext);
  const ref = useRef();

  return (
    <footer className="footer pt-5 pb-2">
      <Container className="px-5">
        <div className="w-100" ref={ref}>
          <Row className="mx-auto">
            {sections.map(({ id, name, size }) => (
              <Col key={id} xs={size}>
                <Link to={id} smooth duration={1000}>
                  <div className="section-label">{name}</div>
                </Link>
              </Col>
            ))}
          </Row>

          <div className="major-lines"></div>
          <div className="minor-lines"></div>

          <Row className="mx-auto pt-1 position-relative">
            <Marker appRef={appRef} footerRef={ref} />

            {sections.map(({ id, _name, size }) => (
              <Col key={id} xs={size} className="px-1">
                <Link to={id} smooth duration={1000}>
                  <div className="section"></div>
                </Link>
              </Col>
            ))}
          </Row>
        </div>

        <p className="footer__text">
          © {new Date().getFullYear()} James Valdez
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
