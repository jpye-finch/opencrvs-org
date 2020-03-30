/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button } from "theme-ui";
import { Box } from "theme-ui";
import top from "../images/chrome-windows-top.png";
import page from "../images/ocrvs-desktop-inprogress.png";
import page2 from "../images/ocrvs-desktop-certificate.png";

const Browser = () => (
  <div
    sx={{
      position: "relative",
      maxWidth: "100%",
      width: "100%",
      mt: 5,
      mb: 5
    }}
  >
    <Box
      sx={{
        mb: 4
      }}
    >
      <Button onClick={() => (document.getElementById("page").src = page)}>
        Feature 1
      </Button>
      <Button onClick={() => (document.getElementById("page").src = page2)}>
        Performance dashboard
      </Button>
      <Button onClick={() => (document.getElementById("page").src = page2)}>
        DHIS2 Integration
      </Button>
    </Box>
    <div
      sx={{
        position: "relative",
        borderRadius: "4px",
        width: "100%",
        overflow: "hidden",
        bg: "#fff",
        boxShadow:
          "rgba(84, 70, 35, 0.15) 0px 2px 8px, rgba(84, 70, 35, 0.15) 0px 1px 3px",
        lineHeight: "0px"
      }}
    >
      <div
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          margin: "0px auto"
        }}
      >
        <div
          sx={{
            height: 0,
            paddingTop: "7.977%"
          }}
        >
          <img
            src={top}
            alt="header"
            sx={{
              display: "block",
              width: "100%",
              position: "absolute",
              top: "0px",
              left: "0px"
            }}
          />
        </div>
      </div>
      <div
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          margin: "0px auto"
        }}
      >
        <div
          sx={{
            height: 0,
            paddingTop: "56.2766%"
          }}
        >
          <img
            id="page"
            src={page}
            alt="desktop"
            sx={{
              display: "block",
              width: "100%",
              position: "absolute",
              top: "0px",
              left: "0px"
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default Browser;
