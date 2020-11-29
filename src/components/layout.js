import React from "react"
import PropTypes from "prop-types"
import { AnimatePresence } from 'framer-motion'

import Header from "./header"
import Footer from "./footer"
import "../styles/main.css"

const Layout = ({ children, location }) => {
  return (
    <div id="scroll-container" className="content-inner" data-scroll-container>
      <Header location={location} color={ location.pathname === '/about' ? `text-blue-light` : `text-black` }/>

      <AnimatePresence exitBeforeEnter>
        {children}

        <Footer color={ location.pathname === '/about' ? `text-blue-light` : `text-black` }/>
      </AnimatePresence>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
