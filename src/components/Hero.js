/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import { Styled } from "theme-ui";

const Hero = props => (
  <Box
    sx={{
      textAlign: "center",
      alignItems: "center",
      pl: [1, 6, 7],
      pr: [1, 6, 7],
      mt: [0, 5, 5],
      mb: [0, 4, 4]
    }}
  >
    <Styled.h1>{props.hero.heading}</Styled.h1>
    <Styled.h4>{props.hero.body}</Styled.h4>
  </Box>
);

export default Hero;
