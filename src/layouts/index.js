/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { ContextProviderComponent } from "../components/context"
import ContextConsumer from "../components/context"

const Layout = ({children}) => {
  const [ query, setQuery ] = useState();

  return (
    <ContextProviderComponent>
      <header className="bg-blue-900">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl text-blue-100">
            <span className="font-bold">API</span><span>Bucket</span>
          </Link>
          <div className="w-full px-6">
            <form>
              <ContextConsumer>
                {({ data, set }) => (
                  <input onChange={(event) => set({ query: event.currentTarget.value })} type="text" className="px-4 py-2 bg-blue-800 text-blue-300 placeholder-blue-400 w-full rounded-lg focus:outline-none" placeholder="Search for an API..." />
                )}
              </ContextConsumer>
            </form>
          </div>
          <div className="flex-shrink-0">
            <span className="text-blue-200 opacity-75">Big Data API Library</span>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="container mx-auto p-6">
        <div className="border-t py-6 flex justify-between">
          <div>
            © {new Date().getFullYear()}&nbsp;
            <Link to="/" className="">
              <span className="font-bold">API</span><span>Bucket</span>
            </Link>
          </div>
        </div>
      </footer>
    </ContextProviderComponent>
  )
}

export default Layout
