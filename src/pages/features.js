import React, { Component } from "react";
import Layout from "../components/Layout.js";
import Hero from "../components/Hero.js";
import HeadingLeft from "../components/HeadingLeft.js";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

class FeaturesPage extends Component {
  render() {
    return (
      <Layout>
        <Hero
          hero={{
            heading: "A new standard in digital CRVS",
            body:
              "Responding to the challenges experienced in offering civil registration services in low- and middle-income countries."
          }}
        />
        <HeadingLeft
          headingLeft={{
            heading: "Registration within the community",
            body:
              "Responding to the challenges experienced in offering civil registration services in low- and middle-income countries."
          }}
        />
        <StaticQuery
          query={query}
          render={data => <Img fluid={data.bgImg.childImageSharp.fluid} />}
        />
      </Layout>
    );
  }
}

export default FeaturesPage;

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
