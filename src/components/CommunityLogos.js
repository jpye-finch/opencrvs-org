import React from "react";
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import { StaticQuery, graphql } from "gatsby";
import { Img } from "theme-ui";

const CommunityLogos = () => (
  <StaticQuery
    query={query}
    render={data => (
      <Box
        sx={{
          mt: 5,
          textAlign: "center"
        }}
      >
        <Img
          fixed={data.plan.childImageSharp.fixed}
          sx={{ mr: "36px", mb: 4 }}
        />
        <Img
          fixed={data.jembi.childImageSharp.fixed}
          sx={{ mr: "36px", mb: 4 }}
        />
        <Img
          fixed={data.vital.childImageSharp.fixed}
          sx={{ mr: "36px", mb: 4 }}
        />
        <Img
          fixed={data.aus.childImageSharp.fixed}
          sx={{ mr: "36px", mb: 4 }}
        />
        <Img
          fixed={data.square.childImageSharp.fixed}
          sx={{ mr: "36px", mb: 4 }}
        />
        <Img
          fixed={data.dial.childImageSharp.fixed}
          sx={{ mr: "4px", mb: 4 }}
        />
      </Box>
    )}
  />
);

export const logos = graphql`
  fragment logos on File {
    childImageSharp {
      fixed(height: 64) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const query = graphql`
  query {
    plan: file(relativePath: { eq: "plan-international-logo.png" }) {
      ...logos
    }
    jembi: file(relativePath: { eq: "jembi-logo.png" }) {
      ...logos
    }
    vital: file(relativePath: { eq: "vital-strategies-logo.png" }) {
      ...logos
    }
    aus: file(relativePath: { eq: "australian-aid-logo.png" }) {
      ...logos
    }
    square: file(relativePath: { eq: "digital-square-logo.png" }) {
      ...logos
    }
    dial: file(relativePath: { eq: "dial-square-logo.png" }) {
      ...logos
    }
  }
`;

export default CommunityLogos;
