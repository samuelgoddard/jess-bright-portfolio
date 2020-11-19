import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import Img from "gatsby-image"
import { revealInOut, fade } from "../helpers/transitionHelper"

const AboutPage = ({ data: { about, categories }, location }) => {
  return (
    <>
      <SEO title="About" />

      <Scroll callback={location} />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex flex-wrap md:-mx-8 text-blue-light pt-32 pb-6 px-6 md:p-10"
      >
        <motion.div variants={fade} className="absolute top-0 right-0 bottom-0 left-0 bg-blue z-0"></motion.div>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.055 } }
          }}
          className="w-full md:px-8 relative z-10"
        >
          <h1 className="text-blue-light mb-20 md:mb-24 xl:mb-32 md:max-w-md xl:max-w-xl pb-0">
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">Some headline text</motion.span>
            </span>
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">that goes on the</motion.span>
            </span>
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">about page</motion.span>
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { delayChildren: 0.5 } }
          }}
          className="flex flex-wrap relative z-10"
        >

          <motion.div variants={fade} className="w-full md:w-5/12 md:px-8">
            <Img fluid={ about.image.fluid } className="w-full mb-8 md:mt-20 xl:mt-32" />
          </motion.div>

          <motion.div variants={fade} className="content w-11/12 md:w-6/12 xl:w-5/12 md:px-8">
            <div className="text-xl md:text-2xl xl:text-3xl leading-tight" dangerouslySetInnerHTML={{ __html: about.content}}></div>

            <ul className="text-lg md:text-lg xl:text-xl leading-tight">
              {categories.edges.map(({ node }, i) => {
                return (
                  <li key={i}>- { node.name }</li>
                )
              })}
            </ul>
          </motion.div>
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
      headline
      content
      slug
      image {
        fluid(
          imgixParams: {auto: "format", sharp:0, h: "1600", w: "1600", fit: "crop", crop: "faces, center"}) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
    }
  }
`