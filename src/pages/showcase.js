import React, { Component } from "react";
import Layout from "../components/Layout.js";
import Columns from "../components/Columns.js";
import HeadingCountry from "../components/HeadingCountry.js";
import logoB from "../images/bangladesh-logo.png";

class ShowcasePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <HeadingCountry
            headingCountry={{
              logo: logoB,
              heading: "Bangldesh",
              body:
                "In 2018, the Government of Bangladesh invited the OpenCRVS team to explore the viability of OpenCRVS in Bangladesh. Through close consultation with the CRVS Secretariat, Cabinet Division, Office of the Registrar General, and Directorate General of Health Services, a proof of concept was developed to demonstrate how OpenCRVS can work across the country."
            }}
          />

          <Columns
            column={{
              copy: "",
              image: ""
            }}
          />
        </Layout>
      </React.Fragment>
    );
  }
}

export default ShowcasePage;
