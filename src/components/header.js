import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="bg-white border-b">
    <div className="container mx-auto px-6 h-16 flex items-center">
      <Link to="/" className="text-xl">
        <span className="font-semibold bg-gray-200 py-1 px-2">api</span><span className="py-1 px-2 bg-gray-100">pedia</span>
      </Link>
    </div>
  </header>
)

export default Header
