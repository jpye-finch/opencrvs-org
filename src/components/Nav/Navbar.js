/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { IconButton } from "theme-ui";
import { Twitter } from "react-feather";
import { GitHub } from "react-feather";
import { MenuButton } from "theme-ui";

const Navbar = props => (
  <header
    sx={{
      top: 0,
      position: "fixed",
      zIndex: 998,
      maxWidth: "1260px",
      width: "100%",
      borderBottom: "1px solid",
      borderColor: "muted",
      bg: "background"
    }}
  >
    <div
      sx={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pl: 3,
        pr: 3
      }}
    >
      <Link sx={{ mt: "6px" }} to="/" title="Home">
        <img alt="OpenCRCS Logo" src="https://via.placeholder.com/160x40" />
      </Link>{" "}
      <div
        sx={{
          marginBottom: 0,
          mx: 3
        }}
      />
      <div
        sx={{
          display: "flex",
          "@media screen and (max-width: 764px)": {
            display: "none"
          }
        }}
      >
        <Link
          to="/crvs"
          activeClassName="active"
          sx={{
            variant: "styles.navlink",
            mx: 1
          }}
        >
          CRVS?
        </Link>
        <Link
          to="/features"
          activeClassName="active"
          sx={{
            variant: "styles.navlink",
            mx: 1
          }}
        >
          Features
        </Link>
        <Link
          to="/showcase"
          activeClassName="active"
          sx={{
            variant: "styles.navlink",
            mx: 1
          }}
        >
          Showcase
        </Link>
        <Link
          to="/implement"
          activeClassName="active"
          sx={{
            variant: "styles.navlink",
            mx: 1
          }}
        >
          Implement
        </Link>
        <Link
          to="/Contributing"
          activeClassName="active"
          sx={{
            variant: "styles.navlink",
            mx: 1
          }}
        >
          Contributing
        </Link>
        <Link
          to="/Examples"
          activeClassName="active"
          sx={{
            variant: "styles.navlink",
            mx: 1
          }}
        >
          About
        </Link>
      </div>
      <div
        sx={{
          mx: "auto"
        }}
      />
      <div
        sx={{
          display: "flex",
          "@media screen and (max-width: 764px)": {
            display: "none"
          }
        }}
      >
        <IconButton aria-label="Twitter">
          <a
            href="https://twitter.com/eduffus?lang=en"
            target="_blank"
            title="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <Twitter />
            </svg>
          </a>
        </IconButton>
        <IconButton aria-label="Toggle dark mode">
          <a
            href="https://github.com/opencrvs/opencrvs-core"
            target="_blank"
            title="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <GitHub />
            </svg>
          </a>
        </IconButton>
      </div>
      <div
        sx={{
          display: "block",
          "@media screen and (min-width: 764px)": {
            display: "none"
          }
        }}
      >
        <MenuButton onClick={props.drawerClickHandler} />
      </div>
    </div>
  </header>
);

export default Navbar;
