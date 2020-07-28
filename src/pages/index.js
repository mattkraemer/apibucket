import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import data from "../components/apis"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container mx-auto p-6">
      <ul>
        {
          data.map((item, index) => (
            <li key={index}>
              <h4>{item.title}</h4>
              <span>{item.category}</span>
              <p>{item.description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  </Layout>
)

export default IndexPage
