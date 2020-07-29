import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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
              <div key={index} className="col-span-3">
                <div className="bg-white rounded shadow-sm hover:shadow transition duration-300 ease-in-out">
                  <div className="p-6 h-32 flex bg-gray-200 rounded-t">
                    <h4 className="font-medium truncate mt-auto">{item.title}</h4>
                  </div>
                  <div className="p-6">
                    <p>{item.description}</p>
                    <div className="grid grid-cols-6 gap-px border-t mt-4">
                      <div className="col-span-3 pt-4 leading-none">
                        <span className="block text-xs font-semibold">Category</span>
                        <span className="text-xs">{item.category}</span>
                      </div>
                      <div className="col-span-3 pt-4 leading-none">
                        <span className="block text-xs font-semibold">Last updated</span>
                        <span className="text-xs">{moment(item.added).fromNow()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
