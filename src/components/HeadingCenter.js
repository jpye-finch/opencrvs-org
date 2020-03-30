/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import { Styled } from "theme-ui";

const HeadingCenter = props => (
  <Box
    sx={{
      mt: [7, 7, 7],
      mb: [2, 3, 4],
      textAlign: "center",
      alignItems: "center",
      pl: [1, 6, 7],
      pr: [1, 6, 7]
    }}
  >
    <Styled.h2>{props.headingCenter.heading}</Styled.h2>
    <Styled.h4>{props.headingCenter.body}</Styled.h4>
  </Box>
);

export default HeadingCenter;
