import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import { fade } from "../helpers/transitionHelper"

const AboutPage = ({ data: { about, categories }, location }) => {
  return (
    <>
      <SEO title="About" />

      <Scroll callback={location} />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
        className="bg-blue flex flex-wrap md:-mx-8 text-blue-light pt-32 pb-6 px-6 md:p-10"
      >
        <div className="w-full md:px-8">
          <h1 className="text-blue-light mb-20 md:mb-24 xl:mb-32 md:max-w-md xl:max-w-xl">{ about.headline }</h1>
        </div>

        <div className="w-full md:w-5/12 md:px-8">
          <svg width="100%" height="450" className="text-blue-light mb-8 md:mt-20 xl:mt-32">
            <rect width="100%" height="100%" fill="currentColor" />
          </svg>
        </div>

        <div className="content w-11/12 md:w-6/12 xl:w-5/12 md:px-8">
          <div className="text-xl md:text-2xl xl:text-3xl leading-tight" dangerouslySetInnerHTML={{ __html: about.content}}></div>

          <ul className="text-lg md:text-lg xl:text-xl leading-tight">
            {categories.edges.map(({ node }, i) => {
              return (
                <li key={i}>- { node.name }</li>
              )
            })}
          </ul>
        </div>
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
      headline
      content
      slug
    }
  }
`