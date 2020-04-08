import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
<div className="container" style={{height: 800 + 'px'}}>
      <div className="row h-100 w-100 align-items-center text-center">
        <div className="col">
          <Image />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
