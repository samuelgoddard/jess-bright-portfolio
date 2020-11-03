import React from "react"
import PropTypes from "prop-types"
import { motion, AnimatePresence } from 'framer-motion'

import Header from "./header"
import "../styles/main.css"

const duration = 0

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
    },
  },
}

const Layout = ({ children, location }) => {
  return (
    <div className={location.pathname === '/about' ? `min-h-screen bg-blue p-6 text-blue-light md:p-10 ` : ` bg-white text-black p-6 md:p-10 min-h-screen`}>
      <div className="relative">
        <Header location={location} />
        
        { location.pathname.includes("about") || location.pathname === "/" ? (
            <h1 className={location.pathname === '/about' ? `text-blue-light mb-20 md:mb-24 xl:mb-32` :`mb-20 md:mb-24 xl:mb-32`}>Jess Bright is a<br/>freelance <span className="font-serif inline">illustrator</span><br/>from Nottingham</h1>
          
        ) : (<></>)}

        <AnimatePresence>
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <div className="">
              {children}
            </div>
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
