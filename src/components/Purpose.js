/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import { Grid } from "theme-ui";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Message } from "theme-ui";
import TedVideo from "./TedVideo.js";

const Purpose = () => (
  <React.Fragment>
    <StaticQuery
      query={query}
      render={data => <Img fluid={data.bgImg.childImageSharp.fluid} />}
    />
    <Message
      sx={{
        mt: [4, 5, 5],
        mb: [4, 5, 5],
        ml: [1, 6, 7],
        mr: [1, 6, 7],
        variant: "styles.messages"
      }}
    >
      "An estimated 1 billion people around the world cannot officially prove
      their identity, and 47% of these are children" <p>World Bank, 2018</p>
    </Message>

    <Grid gap={5} columns={[1, 1, 2]}>
      <Box>
        <p>
          Birth registration is the first step in securing legal identity and
          accessing other basic rights like education, healthcare and social
          protection.
        </p>
        <p>
          As the sole continuous source of population data, it provides the
          foundation for human rights, government service delivery, and the
          measurement of development goals. Despite this, over 100 countries
          around the world do not have functioning CRVS systems.
        </p>
      </Box>
      <Box>
        <TedVideo />
      </Box>
    </Grid>
  </React.Fragment>
);

export default Purpose;

const query = graphql`
  query {
    bgImg: file(relativePath: { eq: "resma-certificate.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
