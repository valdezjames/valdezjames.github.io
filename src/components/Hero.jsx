import React from "react";

const Header = () => (
  <section id="hero" className="jumbotron">
    <video preload="true" muted={true} autoPlay={true} loop={true}>
      <source src="/images/demo.mp4" />
    </video>
  </section>
);

export default Header;
