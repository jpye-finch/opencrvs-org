/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import ReactPlayer from "react-player";

const SolutionVideo = () => (
  <Box
    sx={{
      position: "relative",
      mb: [4, 4, 5],
      pt: "56.25%"
    }}
  >
    <ReactPlayer
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        pt: [0, 0, 3]
      }}
      url="https://vimeo.com/333095063"
      light={false}
      preload={true}
      width="100%"
      height="100%"
      controls
    />
  </Box>
);

export default SolutionVideo;
