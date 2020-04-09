import React from "react"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout>
<div className="container" style={{height: 800 + 'px'}}>
      <div className="row h-100 w-100 align-items-center text-center">
        <div className="col">
          <p>You just reached a route that doesn't exist.</p>
          <p>The sadness.. :/</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
