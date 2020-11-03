import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
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

const WorkPage = ({ data: { work }}) => {
  return (
    <>
      <SEO title={ work.title } />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className=""
      >
        <motion.div 
          className="mb-20 md:mb-24 xl:mb-32"
          variants={item}
          transition="easeInOut"
        >
          <div className="mb-8 md:mb-12">
            <h1 className="font-serif leading-snug pt-12 md:pt-20 xl:pt-24 tracking-tighter mb-0 pb-0">{work.title}</h1>
            <span className="block text-gray text-xl md:text-2xl -mt-1">{ work.category[0].name }</span>
          </div>

          <Img fluid={ work.featuredImage.fluid } className="w-full mb-0 pb-0" />
        </motion.div>
      </motion.section>
    </>
  )
}

export default WorkPage

export const query = graphql`
  query WorkQuery($slug: String!) {
    work: datoCmsWork(slug: { eq: $slug }) {
      title
      featuredImage {
        fluid(imgixParams: { w: "2000", h: "1200", fit: "fillmax", crop: "center" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      category {
        slug
        name
      }
    }
  }
`