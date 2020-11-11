import React from "react"
import SEO from "../components/seo"
import Teaser from "../components/teaser"
import { graphql } from "gatsby"
import { motion } from 'framer-motion'
import { fade, revealInOut, revealInOutMini } from "../helpers/transitionHelper"

const IndexPage = ({ data: { categories, work }}) => {
  return (
    <>
      <SEO title="Home" />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={fade}
        className="pt-32 pb-6 px-6 md:p-10"
      >
        <div className="relative overflow-hidden mb-20 md:mb-24 xl:mb-32">
          <motion.div variants={revealInOut}>
            <h1 className="pb-0 mb-0">
              Jess Bright is a<br/>freelance <span className="font-serif inline">illustrator</span><br/>from Nottingham
            </h1>
          </motion.div>
        </div>
        
        <ul className="text-lg md:text-lg xl:text-xl leading-tight flex flex-wrap mb-4">
          <li className="mr-3 mb-2 ml-0 overflow-hidden relative"><motion.button variants={revealInOut} className="focus:outline-none focus:shadow-outline border-b border-black">All</motion.button></li>
          {categories.edges.map(({ node }, i) => {
            return (
              <li className="mr-3 mb-2 overflow-hidden relative text-gray" key={i}>
                <motion.button variants={revealInOut} className="focus:outline-none focus:shadow-outline">
                  { node.name }
                </motion.button>
              </li>
            )
          })}
        </ul>
        
        <div className="overflow-hidden relative pb-8">
          <motion.p variants={revealInOut} className="text-base md:text-lg max-w-2xl leading-snug block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</motion.p>
        </div>
        
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8">
            {work.edges.map(({ node }, i) => {
              let classes = ``
              if (i%7 === 0) { classes = `md:col-span-5`}
              else if (i%6 === 0) { classes = `md:col-span-7`}
              else if (i%4 === 0) { classes = `md:col-span-5`}
              else if (i%3 === 0) { classes = `md:col-span-5`}
              else if (i%2 === 0) { classes = `md:col-span-7`} 
              else { classes = `md:col-span-7` }
              return (
                <div key={i} className={`relative overflow-hidden ` + classes}>
                  <motion.div className="h-full" variants={revealInOutMini}>
                    <Teaser
                      link={`/${node.slug}`}
                      image={node.featuredImage.fluid}
                    />
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    categories: allDatoCmsCategory {
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