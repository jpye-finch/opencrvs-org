import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout.js";
import { Styled, Container } from "theme-ui";
import { Box } from "theme-ui";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <React.Fragment>
      <Layout>
        <Container>
          <Box
            sx={{
              maxWidth: "720px",
              mx: "auto"
            }}
          >
            <Styled.h2>{frontmatter.title}</Styled.h2>
            <Styled.p>{frontmatter.date}</Styled.p>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Box>
        </Container>
      </Layout>
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
