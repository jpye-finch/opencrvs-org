import React, { Component } from "react";
import { Box } from "theme-ui";
import "../gatsby-plugin-theme-ui/index.js";

const Section = props => (
  <Box
    sx={{
      width: "100%",
      pl: [1, 6, 7],
      pr: [1, 6, 7],
      mt: [2, 5, 5],
      mb: [2, 4, 4]
    }}
  ></Box>
);

export default Section;
