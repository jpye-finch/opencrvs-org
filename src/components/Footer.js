/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Grid } from "theme-ui";
import { Box } from "theme-ui";

const Footer = () => (
  <footer>
    <Box
      sx={{
        mt: 5,
        mb: 6,
        alignItems: "center",
        pl: [2, 2, 4, 4],
        pr: [2, 2, 4, 4]
      }}
    >
      <Grid columns={[1, 1, 1, 5, "1.5fr 1fr 1fr 1fr 1fr"]}>
        <Box>
          <h2>OpenCRVS</h2>
          <p sx={{ fontSize: 0 }}>A global solution for civil registration</p>
          <Link to="/privacy-policy" sx={{ color: "inherit", fontSize: 0 }}>
            Privacy Policy
          </Link>
          <div />
          <Link to="/terms-of-use" sx={{ color: "inherit", fontSize: 0 }}>
            Terms of Use
          </Link>
          <div />
          <p sx={{ fontSize: 0 }}>© OpenCRVS 20202</p>
        </Box>

        <Box>
          <h5 sx={{ pl: 2 }}>Product</h5>
          <Link
            to="/features"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Features
          </Link>
          <Link
            to="/"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Contributing{" "}
          </Link>
          <Link
            to="/implementation"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Implementation
          </Link>
          <Link
            to="/license"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            License
          </Link>
        </Box>

        <Box>
          <h5 sx={{ pl: 2 }}>Case studies</h5>
          <Link
            to="/"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Bangladesh
          </Link>
          <Link
            to="/work"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Zambia
          </Link>
          <Link
            to="/about"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            You?
          </Link>
        </Box>

        <Box>
          <h5 sx={{ pl: 2 }}>Foundation</h5>
          <Link
            to="/"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            About
          </Link>
          <Link
            to="/work"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Team
          </Link>
          <Link
            to="/blog"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Media Kit
          </Link>
          <Link
            to="/about"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Community
          </Link>
        </Box>

        <Box>
          <h5 sx={{ pl: 2 }}>Help & Contact</h5>
          <Link
            to="/"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Help & support
          </Link>
          <Link
            to="/work"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Twitter @OpenCRVS
          </Link>
          <Link
            to="/blog"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Status
          </Link>
          <Link
            to="/about"
            sx={{ variant: "styles.navlink", pb: 2, fontWeight: "body" }}
          >
            Email us
          </Link>
        </Box>
      </Grid>
    </Box>
  </footer>
);

export default Footer;
