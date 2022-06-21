import React from "react";
import Container from "@mui/material/Container";
import Box, { BoxProps } from "@mui/material/Box";
function Mission() {
  return (
    <Container
      style={{
        textAlign: "center",

        fontSize: "22",
      }}
    >
      <h1 style={{ fontSize: 44, textAlign: "center" }}> MISSION </h1>
      <Box
        sx={{
          justifyContent: "center",
          fontSize: 22,
        }}
      >
        Building Qvin, we made it our mission to close this medical gender gap.
        <br />
        <br />
        Creating a healthcare system that is more enlightened to our
        differences, so women can achieve a more equitable level of care.
        <br /> <br />
        Qvin : [ Kvin ] <br />
        <br />
        Our unique name speaks to this mission. It’s crafted in honor of our
        heritage—and you. As a company founded by two Danes, Qvin (pronounced
        Kvin) is a variation on the Danish word for women.
        <br />
        <br /> Women being the catalyst for everything we, as a company, pursue.
        <br />
        <br />
      </Box>
    </Container>
  );
}

export default Mission;
