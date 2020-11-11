import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { fade } from "../helpers/transitionHelper"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <motion.section
      initial="initial"
      animate="enter"
      exit="exit"
      variants={fade}
      className="pt-32 pb-6 px-6 md:p-10"
    >
      <h1>Sorry... This page could not be found!</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </motion.section>
  </>
)

export default NotFoundPage
