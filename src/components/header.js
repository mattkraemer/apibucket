import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="bg-blue-900">
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <Link to="/" className="text-xl text-blue-100">
        <span className="font-bold">api</span><span>pedia</span>
      </Link>
      <div className="w-full px-6">
        <form>
          <input type="text" className="px-4 py-2 bg-blue-800 text-blue-300 placeholder-blue-400 w-full rounded-lg" placeholder="Search for an API..." />
        </form>
      </div>
      <div className="flex-shrink-0">
        <span className="text-blue-200 opacity-75">Open Data API Library</span>
      </div>
    </div>
  </header>
)

export default Header
