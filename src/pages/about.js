import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

const duration = 0

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const AboutPage = ({ data: { about, categories }}) => {
  return (
    <>
      <SEO title="About" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className="flex flex-wrap md:-mx-8"
      >
        <motion.div 
          className="w-full md:w-5/12 md:px-8"
          variants={item}
          transition="easeInOut"
        >
          <svg width="100%" height="450" className="text-blue-light mb-8 md:mt-20 xl:mt-32">
            <rect width="100%" height="100%" fill="currentColor" />
          </svg>
        </motion.div>
        <motion.div 
          className="content w-11/12 md:w-6/12 xl:w-5/12 md:px-8"
          variants={item}
          transition="easeInOut"
        >
          <div className="text-xl md:text-2xl xl:text-3xl leading-tight" dangerouslySetInnerHTML={{ __html: about.content}}></div>

          <ul className="text-lg md:text-lg xl:text-xl leading-tight">
            {categories.edges.map(({ node }, i) => {
              return (
                <li key={i}>- { node.name }</li>
              )
            })}
          </ul>
        </motion.div>
      </motion.section>
    </>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    categories: allDatoCmsCategory {
      edges {
        node {
          name
          slug
        }
      }
    }
    about: datoCmsAbout {
      title
      content
      slug
    }
  }
`