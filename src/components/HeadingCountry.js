/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import { Styled } from "theme-ui";
import { Image } from "theme-ui";

const HeadingCountry = props => (
  <Box
    sx={{
      mt: [2, 6, 6],
      mb: [2, 3, 4],
      textAlign: "left",
      alignItems: "left"
    }}
  >
    <Image
      sx={{
        ml: 2,
        maxHeight: "80px"
      }}
      src={props.headingCountry.logo}
      alt="Country logo"
    />
    <div
      sx={{
        mt: "1em"
      }}
    >
      <Styled.h1>{props.headingCountry.heading}</Styled.h1>
      <Styled.h4
        sx={{
          maxWidth: "800px"
        }}
      >
        {props.headingCountry.body}
      </Styled.h4>
    </div>
  </Box>
);

export default HeadingCountry;
