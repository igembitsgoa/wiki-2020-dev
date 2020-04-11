import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from "../components/layout"
import indexStyles from "../components/index.module.scss"


const IndexPage = (props) => (
  <>
    <Helmet>
      <title>iGEM BITS Goa 2020</title>
    </Helmet>
    <Layout>
      <main className="container" style={{ height: 800 + 'px' }}>
        <div className="row h-100 w-100 align-items-center text-center">
          <div className="col">
            <div className={indexStyles.logo}>
              <Img fluid={props.data.logoCenter.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  </>
)

export default IndexPage

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    logoCenter: file(relativePath: { eq: "igembitslogo.png" }) {
      ...fluidImage
    }
  }
`