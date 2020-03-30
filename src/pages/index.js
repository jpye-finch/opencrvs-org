import React, { Component } from "react";
import Layout from "../components/Layout.js";
import Hero from "../components/Hero.js";
import HeadingCenter from "../components/HeadingCenter.js";
import Purpose from "../components/Purpose.js";
import Community from "../components/Community.js";
// import CommunityLogos from "../components/CommunityLogos.js";
import Browser from "../components/Browser.js";
import SolutionVideo from "../components/SolutionVideo.js";
import { Message } from "theme-ui";
import { Flex } from "theme-ui";
import { Avatar } from "theme-ui";
import ed from "../images/ed-profile.png";

// import Image from "../components/image"
// import SEO from "../components/seo"

class IndexPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Hero
            hero={{
              heading: "Civil registration for low resource settings",
              body:
                "A digital public good for low- and middle-income countries to increase registration coverage and support inclusive service delivery."
            }}
          />
          <Browser />
          {/* <StaticQuery
            query={query}
            render={data => <Img fluid={data.bgImg.childImageSharp.fluid} />}
          /> */}
          <HeadingCenter
            headingCenter={{
              heading: "For people to count, they must first be counted",
              body:
                "A Civil Registration and Vital Statistics (CRVS) system does just that, recording the details of all major life events, such as births and deaths."
            }}
          />
          <Purpose />
          <HeadingCenter
            headingCenter={{
              heading: "Free and configurable",
              body:
                "An open-source digital CRVS system that works in every country and for every individual. Designed with and for the people it serves."
            }}
          />
          <SolutionVideo />
          <Message
            sx={{
              mt: [4, 5, 5],
              mb: [4, 5, 5],
              ml: [1, 6, 7],
              mr: [1, 6, 7],
              variant: "styles.messages"
            }}
          >
            “We want to revolutionise the way that births and deaths are
            registered around the world to ensure that all individuals are
            recognised, protected and provided for from birth”
            <Flex
              sx={{
                justifyContent: "center",
                alignText: "center"
              }}
            >
              <Avatar
                src={ed}
                sx={{
                  width: "40px",
                  height: "40px",
                  mr: 3
                }}
              />
              <p>Edward Duffus - Head of Innovation @ Plan International</p>
            </Flex>
          </Message>
          <HeadingCenter
            headingCenter={{
              heading: "Join the communtiy",
              body:
                "Through the OpenCRVS Community, we are uniting experts in civil registration and other interested parties."
            }}
          />
          <Community />
          {/* <CommunityLogos /> */}
        </Layout>
      </React.Fragment>
    );
  }
}

export default IndexPage;

// siteTitle={data.site.siteMetadata.title}
