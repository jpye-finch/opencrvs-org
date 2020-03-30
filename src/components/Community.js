/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "theme-ui";
import { Button } from "theme-ui";
import GitHubButton from "react-github-btn";
import { TwitterFollowButton } from "react-twitter-embed";

const Community = () => (
  <Flex
    sx={{
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <div sx={{ m: 1 }}>
      <Button
        sx={{
          height: "28px",
          textAlign: "center",
          textSize: "12px"
        }}
      >
        Giitter
      </Button>
    </div>
    <div sx={{ m: 1 }}>
      <GitHubButton
        href="https://github.com/opencrvs"
        data-size="large"
        aria-label="Follow @opencrvs on GitHub"
      >
        Follow @opencrvs
      </GitHubButton>
    </div>
    <div sx={{ m: 1 }}>
      {" "}
      <TwitterFollowButton
        screenName={"EdDuffus"}
        options={{ size: "large" }}
      />
    </div>
  </Flex>
);

export default Community;
