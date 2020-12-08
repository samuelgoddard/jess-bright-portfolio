import React from "react"
import SEO from "../components/seo"
import Teaser from "../components/teaser"
import Header from "../components/header"
import Badges from "../components/badges"
import { graphql, Link } from "gatsby"
import { motion } from "framer-motion"
import Scroll from "../components/locomotiveScroll"
import Img from "gatsby-image"
import { fade, revealInOut } from "../helpers/transitionHelper"

const CategoryPage = ({ data: { home, categories, work, currentCat }, location}) => {
  return (
    <>
      <SEO
        titleOverride={currentCat.name }
        descriptionOverride={home.metaTags && home.metaTags.description ? home.metaTags.description : null }
        pathnameOverride={location.pathname}
        imageOverride={home.metaTags && home.metaTags.image ? home.metaTags.image.url : null }
      />

      <Scroll callback={location} />

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
          <div className="absolute top-0 right-0 mr-5 md:mr-10 mt-5 md:mt-24">
            <Badges width="w-24 md:w-32" theme="text-black" icon="branding" />
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
              <motion.span variants={revealInOut} className="block">freelance <span className="font-serif inline font-light">{currentCat.headingWord ? currentCat.headingWord.toLowerCase() : `creative`}</span></motion.span>
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
          className="mb-24 md:mb-24 xl:mb-32 pr-12 md:pr-0 block md:hidden"
        >
          <motion.h1 variants={fade } className="pb-0 mb-0">
            Jess Bright is <br/>a freelance <span className="font-serif inline font-light">{currentCat.headingWord ? currentCat.headingWord.toLowerCase() : `creative`}</span> from <br/>Nottingham
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
          <ul className="text-lg md:text-lg xl:text-xl leading-tight mb-4 overflow-scroll whitespace-no-wrap md:overflow-hidden md:flex md:flex-wrap">
            <motion.li variants={fade} className="mr-3 md:mr-4 mb-2 ml-0 overflow-hidden relative inline-block">
              <Link to="/" className="text-gray nav--item hover:text-black pb-px focus:text-black border-b block border-white">All</Link>
            </motion.li>
            {categories.edges.map(({ node }, i) => {
              let active = `/` + node.slug.toLowerCase() === location.pathname.toLowerCase()  ? `text-black border-b block border-black opacity-100` : `block text-gray nav--item hover:text-black focus:text-black border-b border-white`;
              return (
                <motion.li variants={fade} className={`mr-3 md:mr-4 mb-2 overflow-hidden relative inline-block`} key={i}>
                  <Link to={`/${node.slug}`} className={active}>
                    { node.name }
                  </Link>
                </motion.li>
              )
            })}
          </ul>
          
          <div className="overflow-hidden relative mb-8">
            <motion.div dangerouslySetInnerHTML={{ __html: currentCat.filtersTextBlock }} variants={ fade } className="text-base md:text-lg max-w-2xl leading-snug block pb-0 mb-0"></motion.div>
          </div>
          
          <div className="overflow-hidden">
            <div className="grid grid-work md:grid-cols-12 gap-8">
              {work.edges.map(({ node }, i) => {
                let imageTern = node.featuredImage
                if (node.teaserImageSquareOverride) {
                  imageTern = node.teaserImageSquareOverride
                } else if (node.teaserImage) {
                  imageTern = node.teaserImage
                }
                return (
                  <div key={i} className={`relative overflow-hidden col-span-6 w-full`}>
                    <motion.div className="h-full" variants={fade}>
                      { node.imageOnly ? (
                        <div className="block relative h-full grid-item">
                          <Img fluid={ node.featuredImage.fluid } className="w-full h-full object-cover mb-0 pb-0" />
                        </div>
                    ) : (
                        <Teaser
                          backgroundColor={node.teaserHoverBackgroundColour.hex}
                          link={`/${node.slug}`}
                          image={ imageTern.fluid }
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

export default CategoryPage

export const query = graphql`
  query CategoryPageQuery($slug: String!) {
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
          slug
        }
      }
    }
    currentCat: datoCmsCategory(slug: {eq: $slug}) {
      name
      slug
      headingWord
      filtersTextBlock
    }
    work: allDatoCmsWork(sort: { fields: [position], order: ASC }, filter: {category: {elemMatch: {slug: {eq: $slug}}}}) {
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
              ...GatsbyDatoCmsFluid
            }
          }
          teaserImageSquareOverride {
            fluid(imgixParams: { w: "1400", h: "1400" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          featuredImage {
            fluid(imgixParams: { w: "1920", h: "1400" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`