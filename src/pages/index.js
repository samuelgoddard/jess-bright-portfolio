import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
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

const IndexPage = ({ data: { categories, work }}) => {
  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className=""
      >
        <motion.div 
          className="content mb-6"
          variants={item}
          transition="easeInOut"
        >
          <ul className="text-lg md:text-lg xl:text-xl leading-tight flex flex-wrap">
            <li className="mr-3 mb-2 ml-0 border-b border-black"><button className="focus:outline-none focus:shadow-outline">All</button></li>
            {categories.edges.map(({ node }, i) => {
              return (
                <li className="mr-3 mb-2 text-gray" key={i}><button className="focus:outline-none focus:shadow-outline">{ node.name }</button></li>
              )
            })}
          </ul>
        </motion.div>
        
        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >
          <p className="text-base md:text-lg max-w-2xl leading-snug block md:pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

          {work.edges.map(({ node }, i) => {
            return (
              <Link to={`/${node.slug}`} className="block w-full md:w-7/12" key={i}>
                <Img fluid={ node.featuredImage.fluid } className="w-full h-full object-cover mb-0 pb-0" />
              </Link>
            )
          })}
        </motion.div>
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
    work: allDatoCmsWork {
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