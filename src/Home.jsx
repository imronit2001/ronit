import React from "react";

const Home = () => {
  return (
    <>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container d-flex flex-column align-items-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h1>Ronit Singh</h1>
          <h2>I'm a Full Stack Developer</h2>
          <a href="about.html" class="btn-about">
            About Me
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
