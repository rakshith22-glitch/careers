import React from "react";
import { Link } from "react-scroll";
import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
function About() {
  function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          ...sx,
        }}
        {...other}
      />
    );
  }
  return (
    <Container
      style={{
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 44 }}> ABOUT</h1>
      <Box
        sx={{
          justifyContent: "center",
          fontSize: 22,
        }}
      >
        <Item>
          {" "}
          By using Qvin, you're actively helping our healthcare system
          understand women's bodies and craft care that positively impacts lives
          for the generations to come.
          <br /> We know that together, we can change the world. At Qvin, you
          will make an impact on the future of women's health and carve your
          path as a leader, innovator, and change-maker. <br /> <br />
          We're San Francisco based, pending FDA clearance, and raised Series A
          in late 2020.
        </Item>
      </Box>
    </Container>
  );
}

export default About;
