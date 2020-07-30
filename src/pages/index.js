import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../layouts"
import Image from "../components/image"
import SEO from "../components/seo"
import Item from "../components/item"

import importData from "../components/apis"

import ContextConsumer from "../components/context"

var moment = require('moment');

const IndexPage = () => {
  const [ apidata, setApidata ] = useState(importData);

  const sorting = (event) => {
    const sorting = event.target.value;
    
    if(sorting == "newestFirst") {
      setApidata(
        importData.slice().sort((a,b) => new Date(b.added).getTime() - new Date(a.added).getTime())
      )
    }
    if(sorting == "oldestFirst") {
      setApidata(
        importData.slice().sort((a,b) => new Date(a.added).getTime() - new Date(b.added).getTime())
      )
    }
    if(sorting == "popularFirst") {
      setApidata(
        importData.slice().sort((a,b) => new Date(b.added).getTime() - new Date(a.added).getTime())
      )
    }
  }

  return (
    <ContextConsumer>
      {({ data }) => (
        <>
          <SEO title="Home" />
          <div className="bg-white shadow-sm">
            <div className="container mx-auto px-6 py-4 flex">
                <div className="flex items-center">
                  <span>{apidata.length} entries found.</span>
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
            {
              data.query ?
                <>
                  <div className="mb-6">
                    Searching for <span className="font-bold">{data.query}</span>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    {
                      apidata.filter(function(entry) {
                        return entry.title.toUpperCase().indexOf(data.query.toUpperCase()) !== -1;
                      }).map((item, index) => (
                        <Item item={item} index={index} />
                      ))
                    }
                  </div>
                </>
                :
                <div className="grid grid-cols-12 gap-4">
                  {
                    apidata.map((item, index) => (
                      <Item item={item} index={index} />
                    ))
                  }
                </div>
            }
          </div>
        </>
      )}
    </ContextConsumer>
  )
}

export default IndexPage
