import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <>
    <Helmet>
      <title>iGEM BITS Goa 2020</title>
    </Helmet>
    <Layout>
      <div className="container" style={{ height: 800 + 'px' }}>
        <div className="row h-100 w-100 align-items-center text-center">
          <div className="col">
            <Image />
          </div>
        </div>
      </div>
    </Layout>
  </>
)

export default IndexPage
