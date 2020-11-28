import React from "react"
import SEO from "../components/seo"
import Teaser from "../components/teaser"
import { graphql } from "gatsby"
import { motion } from "framer-motion"
import Scroll from "../components/locomotiveScroll"
import Img from "gatsby-image"
import { fade, revealInOut } from "../helpers/transitionHelper"

const IndexPage = ({ data: { home, categories, work }, location}) => {
  return (
    <>
      <SEO title="Home" />

      <Scroll callback={location} />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="pt-32 pb-6 px-6 md:p-10"
      >
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.055 }}
          }}
          className="mb-20 md:mb-24 xl:mb-32"
        >
          <h1 className="pb-0 mb-0">
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">Jess Bright is a</motion.span>
            </span>
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">freelance <span className="font-serif inline">illustrator</span></motion.span>
            </span>
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">from Nottingham</motion.span>
            </span>
          </h1>
        </motion.div>
        
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { delayChildren: 0.5 }}
          }}
        >
          <ul className="text-lg md:text-lg xl:text-xl leading-tight flex flex-wrap mb-4">
            <li className="mr-3 md:mr-4 mb-2 ml-0 overflow-hidden relative"><motion.button variants={fade} className="focus:outline-none focus:shadow-outline border-b border-black">All</motion.button></li>
            {categories.edges.map(({ node }, i) => {
              return (
                <li className="mr-3 md:mr-4 mb-2 overflow-hidden relative text-gray" key={i}>
                  <motion.button variants={fade} className="focus:outline-none focus:shadow-outline">
                    { node.name }
                  </motion.button>
                </li>
              )
            })}
          </ul>
          
          <div className="overflow-hidden relative mb-8">
            <motion.div dangerouslySetInnerHTML={{ __html: home.filtersTextBlock }} variants={ fade } className="text-base md:text-lg max-w-2xl leading-snug block pb-0 mb-0"></motion.div>
          </div>
          
          <div className="overflow-hidden">
            <div className="grid grid-work md:grid-cols-12 gap-8">
              {work.edges.map(({ node }, i) => {
                return (
                  <div key={i} className={`relative overflow-hidden grid-work__item w-full`}>
                    <motion.div className="h-full" variants={fade}>
                      { node.imageOnly ? (
                        <div className="block h-full relative">
                          <Img fluid={ node.featuredImage.fluid } className="w-full h-full object-cover mb-0 pb-0" />
                        </div>
                      ) : (
                        <Teaser
                          backgroundColor={node.teaserHoverBackgroundColour.hex}
                          link={`/${node.slug}`}
                          image={node.featuredImage.fluid}
                        />
                      )}
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
      title
      filtersTextBlock
    }
    categories: allDatoCmsCategory(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          name
          slug
        }
      }
    }
    work: allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          title
          slug
          imageOnly
          teaserHoverBackgroundColour {
            hex
          }
          featuredImage {
            fluid(imgixParams: { w: "1600", h: "1200", fit: "fillmax", crop: "center" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`