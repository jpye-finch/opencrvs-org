/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Link } from "theme-ui";
import { IconButton } from "theme-ui";
import { X } from "react-feather";

const TopDraw = props => (
  <div
    sx={{
      top: 0,
      position: "fixed",
      zIndex: 998,
      width: "100%",
      height: "100vh",
      bg: "#fff"
    }}
  >
    <div
      sx={{
        height: 64,
        borderBottom: "1px solid",
        borderColor: "muted",
        display: "flex",
        alignItems: "center",
        pl: 3,
        pr: 3
      }}
    >
      <Link to="/" title="Home">
        <img alt="OpenCRCS Logo" src="https://via.placeholder.com/120x40" />
      </Link>
      <div
        sx={{
          mx: "auto"
        }}
      />
      <IconButton onClick={props.closeTopDraw}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentcolor"
        >
          <X />
        </svg>
      </IconButton>
    </div>

    <div
      sx={{
        pt: 4,
        display: "block"
      }}
    >
      <Link
        to="../page-2"
        activeClassName="active"
        sx={{
          variant: "styles.navlink",
          fontSize: 2
        }}
      >
        Features
      </Link>
      <Link
        to="/examples"
        activeClassName="active"
        sx={{
          variant: "styles.navlink",
          fontSize: 2
        }}
      >
        Showcase
      </Link>
    </div>
  </div>
);

export default TopDraw;
