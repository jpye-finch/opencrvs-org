/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import { Styled } from "theme-ui";

const HeadingLeft = props => (
  <Box
    sx={{
      mt: [7, 7, 7],
      mb: [2, 3, 4],
      textAlign: "left",
      alignItems: "left"
    }}
  >
    <Styled.h3>{props.headingLeft.heading}</Styled.h3>
    <Styled.h5
      sx={{
        maxWidth: "600px"
      }}
    >
      {props.headingLeft.body}
    </Styled.h5>
  </Box>
);

export default HeadingLeft;
