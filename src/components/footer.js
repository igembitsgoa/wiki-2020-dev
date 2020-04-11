import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import footerStyles from "./footer.module.scss"

const Footer = () => {
    return (
        <StaticQuery
            query={pageQuery}
            render={data => (
                <footer class="bgGreen">
                    <div className="container">
                        <div className="row">
                            <div className="col col-3">
                                <div className={[`${footerStyles.logo}`, "shadow p-4 bg-white"].join(" ")}>
                                    <Img fluid={data.footerLogo.childImageSharp.fluid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        />
    );
};

export default Footer

const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

const pageQuery = graphql`
  query {
    footerLogo: file(relativePath: { eq: "igembitslogo.png" }) {
      ...fluidImage
    }
  }
`