import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "theme-ui";
import { StaticQuery, graphql } from "gatsby";
import Footer from "./footer.js";
import "../gatsby-plugin-theme-ui/index.js";
import Navbar from "./Nav/Navbar.js";
import TopDraw from "./Nav/TopDraw.js";

class Layout extends Component {
  state = {
    topDrawOpen: false
  };

  drawToggleClickHandler = () => {
    this.setState(prevState => {
      return { topDrawOpen: !prevState.topDrawOpen };
    });
  };

  closeTopDraw = () => {
    this.setState({ topDrawOpen: false });
  };

  render() {
    const { children } = this.props;
    let topDraw;

    if (this.state.topDrawOpen) {
      topDraw = <TopDraw closeTopDraw={this.closeTopDraw} />;
    }
    return (
      <React.Fragment>
        <StaticQuery
          data={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
        />
        <Navbar drawerClickHandler={this.drawToggleClickHandler} />
        {topDraw}
        <Container>
          <main>{children}</main>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
