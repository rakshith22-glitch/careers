import React from "react";
import Head from "./header";
import Jobs from "./jobs";
import Team from "./team";
import Values from "./values";
import About from "./about";
import Mission from "./mission";
import Footer from "./footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
function Bod() {
  return (
    <Container maxWidth="x-lg">
      <Head />
      <div
        style={{
          backgroundImage: `url("https://careers.qvin.com/uploads/1/2/3/5/123547525/background-images/800799635.png")`,
          backgroundRepeat: "yes-repeat",
          width: "100%",
          height: "200px",
          color: "blue",
        }}
      ></div>
      <section id="about">
        <About />
      </section>
      <section id="values">
        <Values />
      </section>
      <section id="team">
        <Team />
      </section>
      <section id="jobs">
        <Jobs />
      </section>
      <section id="mission">
        <Mission />
      </section>
      <Footer />
    </Container>
  );
}

export default Bod;
