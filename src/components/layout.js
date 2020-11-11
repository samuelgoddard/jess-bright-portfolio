import React from "react"
import PropTypes from "prop-types"
import { AnimatePresence } from 'framer-motion'

import Header from "./header"
import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <div className="min-h-screen">
      <Header location={location} />

      <AnimatePresence exitBeforeEnter>
        {children}
      </AnimatePresence>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
