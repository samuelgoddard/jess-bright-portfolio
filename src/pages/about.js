import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"
import { motion } from 'framer-motion'
import Scroll from "../components/locomotiveScroll"
import Img from "gatsby-image"
import { revealInOut, fade } from "../helpers/transitionHelper"

const AboutPage = ({ data: { about, categories, globals }, location }) => {
  return (
    <>
      <SEO
        titleOverride={about.metaTags && about.metaTags.title ? about.metaTags.title : about.title }
        descriptionOverride={about.metaTags && about.metaTags.description ? about.metaTags.description : null }
        pathnameOverride={location.pathname}
        imageOverride={about.metaTags && about.metaTags.image ? about.metaTags.image.url : null }
      />

      <Scroll callback={location} />

      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="relative z-20"
      >
        <motion.div variants={fade}>
          <Header color="text-blue-light" aboutActiveOverride />
        </motion.div>
      </motion.div>

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="flex flex-wrap md:-mx-8 text-blue-light pt-32 pb-6 px-6 md:p-10 relative"
      >
        <motion.div variants={fade} className="fixed top-0 right-0 bottom-0 left-0 bg-blue z-0"></motion.div>

        <motion.div variants={revealInOut} className="relative z-10">
          <Header color="text-blue-light" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.055 }}
          }}
          className="w-full md:px-8 relative z-10"
        >
          <h1 className="text-blue-light mb-20 md:mb-24 xl:mb-32 md:max-w-md xl:max-w-xl pb-0">
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">Finding humour in</motion.span>
            </span>
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">the small, everyday</motion.span>
            </span>
            <span className="block relative overflow-hidden">
              <motion.span variants={revealInOut} className="block">struggles of life</motion.span>
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

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { delayChildren: 0.5 }}
          }}
          className="min-h-halfscreen w-full flex flex-wrap items-center justify-center relative z-10"
        >
          <motion.a href={ `mailto:` + globals.emailAddress } variants={fade} className="block italic font-serif text-3xl md:text-4xl xl:text-5xl nav--active nav--active--large relative hover:text-white focus:text-white transition ease-in-out duration-300">Drop me a line!</motion.a>
        </motion.div>
      </motion.section>
    </>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    globals: datoCmsGlobal {
      emailAddress
    }
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
          imgixParams: {h: "1600", w: "1600", fit: "crop"}) {
          ...GatsbyDatoCmsFluid
        }
        alt
      }
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
    }
  }
`