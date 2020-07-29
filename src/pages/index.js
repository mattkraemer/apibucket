import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Item from "../components/item"

import importData from "../components/apis"

var moment = require('moment');

const IndexPage = () => {
  const [ data, setData ] = useState(importData);

  const sorting = (event) => {
    const sorting = event.target.value;
    
    if(sorting == "newestFirst") {
      setData(
        importData.slice().sort((a,b) => new Date(b.added).getTime() - new Date(a.added).getTime())
      )
    }
    if(sorting == "oldestFirst") {
      setData(
        importData.slice().sort((a,b) => new Date(a.added).getTime() - new Date(b.added).getTime())
      )
    }
    if(sorting == "popularFirst") {
      setData(
        importData.slice().sort((a,b) => new Date(b.added).getTime() - new Date(a.added).getTime())
      )
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex">
            <div className="flex items-center">
              <span>{data.length} entries found.</span>
            </div>
            <div className="ml-auto flex items-center">
              <span className="font-semibold mr-3 text-sm text-gray-700">Filter by</span>
              <form>
                <select onChange={(event) => sorting(event)} className="bg-white border bg-opacity-50 px-3 py-2 rounded-lg">
                  <option value="newestFirst">Newest first</option>
                  <option value="oldestFirst">Oldest first</option>
                  <option value="popularFirst">Most popular first</option>
                </select>
              </form>
            </div>
          </div>
      </div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-12 gap-4">
          {
            data.map((item, index) => (
              <Item item={item} index={index} />
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
