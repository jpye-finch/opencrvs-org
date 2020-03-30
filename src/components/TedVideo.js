/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "theme-ui";
import ReactPlayer from "react-player";

const TedVideo = () => (
  <Box
    sx={{
      position: "relative",
      mb: 5,
      pt: "56.25%"
    }}
  >
    <ReactPlayer
      sx={{
        position: "absolute",
        top: 0,
        left: 0
      }}
      url="https://www.youtube.com/watch?v=bLWzNimxwlE&feature=emb_title"
      light={false}
      preload={true}
      width="100%"
      height="100%"
      controls
    />
  </Box>
);

export default TedVideo;
