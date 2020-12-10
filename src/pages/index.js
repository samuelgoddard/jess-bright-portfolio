import React from "react"
import SEO from "../components/seo"
import Teaser from "../components/teaser"
import Badges from "../components/badges"
import Header from "../components/header"
import { graphql, Link } from "gatsby"
import { motion } from "framer-motion"
import { SmoothScrollProvider } from "../components/locomotiveScroll"
import Img from "gatsby-image"
import { fade, revealInOut } from "../helpers/transitionHelper"
var ReactRotatingText = require('react-rotating-text');

const IndexPage = ({ data: { home, categories, work }, location}) => {
  let headingWords = []
  {categories.edges.map(({ node }, i) => {
    headingWords.push(node.headingWord)
  })}

  return (
    <>
      <SEO
        titleOverride={home.metaTags && home.metaTags.title ? home.metaTags.title : home.title }
        descriptionOverride={home.metaTags && home.metaTags.description ? home.metaTags.description : null }
        pathnameOverride={location.pathname}
        imageOverride={home.metaTags && home.metaTags.image ? home.metaTags.image.url : null }
      />

      <SmoothScrollProvider
        options={{
          smooth: true,
          lerp: 0.12
        }}
      >

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="relative z-20"
        >
          <motion.div variants={fade}>
            <Header color="text-black" workActiveOverride />
          </motion.div>

          <motion.div variants={fade}>
            <div className="absolute top-0 right-0 mr-5 md:mr-10 mt-5 md:mt-24 3xl:mt-28">
              <Badges width="w-24 md:w-32 3xl:w-40" theme="text-black" icon="branding" />
            </div>
          </motion.div>
        </motion.div>

        <motion.section
          initial="initial"
          animate="enter"
          exit="exit"
          className="pt-40 pb-6 px-6 md:p-10"
        >
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              enter: { transition: { staggerChildren: 0.055 }}
            }}
            className="mb-20 md:mb-24 xl:mb-32 pr-12 md:pr-0 hidden md:block"
          >
            <h1 className="pb-0 mb-0">
              <span className="block relative overflow-hidden">
                <motion.span variants={revealInOut} className="block">Jess Bright is a</motion.span>
              </span>
              <span className="block relative overflow-hidden">
                <motion.span variants={revealInOut} className="block">freelance <span className="font-serif italic inline font-light">
                  <ReactRotatingText
                    items={headingWords}
                    pause={2500}
                    emptyPause={500}
                  />
                </span></motion.span>
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
              enter: { transition: { staggerChildren: 0.055 }}
            }}
            className="mb-20 md:mb-24 xl:mb-32 pr-12 md:pr-0 block md:hidden overflow-hidden"
          >
            <motion.h1 variants={revealInOut } className="pb-0 mb-0">
              Jess Bright<br/>is a freelance
              <span className="font-serif italic block h-14">
                  <ReactRotatingText
                    items={headingWords}
                    pause={2500}
                    emptyPause={500}
                  />
                </span>from <br/>Nottingham
            </motion.h1>
          </motion.div>
          
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              enter: { transition: { delayChildren: 0.5 }}
            }}
          >
            <ul className="text-lg md:text-lg xl:text-xl 3xl:text-2xl leading-tight mb-4 flex flex-wrap">
              <motion.li variants={fade} className="mr-3 md:mr-4 3xl:mr-6 mb-2 ml-0 overflow-hidden relative inline-block">
                <Link to="/" className="border-b border-black block">All</Link>
              </motion.li>
              {categories.edges.map(({ node }, i) => {
                return (
                  <motion.li variants={fade} className="mr-3 md:mr-4 3xl:mr-6 mb-2 overflow-hidden relative text-gray inline-block" key={i}>
                    <Link to={`/${node.slug}`} className="nav--item border-b-2 border-white block hover:text-black pb-px focus:text-black">
                      { node.name }
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
            
            <div className="overflow-hidden relative mb-8">
              <motion.div dangerouslySetInnerHTML={{ __html: home.filtersTextBlock }} variants={ fade } className="text-base md:text-lg 3xl:text-xl max-w-2xl leading-snug block pb-0 mb-0"></motion.div>
            </div>
            
            <div className="overflow-hidden">
              <div className="grid grid-work md:grid-cols-12 gap-8">
                {work.edges.map(({ node }, i) => {
                  return (
                    <div key={i} className={`relative overflow-hidden grid-work__item w-full`}>
                      <motion.div className="h-full" variants={fade}>
                        { node.imageOnly ? (
                          <div className="block relative h-full grid-item">
                            <Img fluid={ node.teaserImage ? node.teaserImage.fluid : node.featuredImage.fluid } className="w-full h-full object-cover mb-0 pb-0" />
                          </div>
                      ) : (
                          <Teaser
                            backgroundColor={node.teaserHoverBackgroundColour.hex}
                            link={`/${node.slug}`}
                            image={node.teaserImage ? node.teaserImage.fluid : node.featuredImage.fluid}
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
      </SmoothScrollProvider>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
      title
      filtersTextBlock
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
    }
    categories: allDatoCmsCategory(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          name
          headingWord
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
          teaserImage {
            fluid(imgixParams: { w: "1920", h: "1400" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          featuredImage {
            fluid(imgixParams: { w: "1920", h: "1400" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
        }
      }
    }
  }
`