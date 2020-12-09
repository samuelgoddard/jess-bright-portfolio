import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Scroll from "../components/locomotiveScroll"
import Header from "../components/header"
import { motion } from "framer-motion"
import { fade, revealInOut } from "../helpers/transitionHelper"

const WorkPage = ({ data: { work }, location}) => {
  return (
    <>
      <SEO
        titleOverride={work.metaTags && work.metaTags.title ? work.metaTags.title : work.title }
        descriptionOverride={work.metaTags && work.metaTags.description ? work.metaTags.description : null }
        pathnameOverride={location.pathname}
        imageOverride={work.metaTags && work.metaTags.image ? work.metaTags.image.url : null }
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
        >
          <motion.div variants={fade}>
            <Link to="/" className="inline-block text-gray text-xl md:text-2xl 3xl:text-3xl mx-2 md:mx-3 md:ml-0 relative hover:text-black focus:text-black transition ease-in-out duration-300">← Back to work</Link>
          </motion.div>

          <div className="mb-8">
            <div className="block relative overflow-hidden mb-8 md:mb-12 mt-6 md:mt-20 xl:mt-24">
              <motion.div variants={revealInOut}>
                <h1 className="tracking-tighter mb-0 pb-0 max-w-xl 3xl:max-w-3xl">{work.title}</h1>
                {/* <span className="block text-gray text-xl md:text-2xl -mt-1">{ work.category[0].name }</span> */}
              </motion.div>
            </div>

            <motion.div variants={fade} className="flex flex-wrap items-end mb-8 md:mb-12">
              { work.introText ? (
                <div className="w-10/12 md:w-1/2 xl:w-5/12 3xl:w-4/12 mb-6 md:mb-0 md:text-lg 3xl:text-xl leading-snug content" dangerouslySetInnerHTML={{ __html: work.introText }}></div>
              ) : (<></>)}

              <div className="w-full md:w-6/12 ml-auto md:text-right">
                { work.metaBlocks.map((block) => (
                  <div key={block.id}>
                    {
                      block.model.apiKey === 'text_block' &&
                      <span className="block text-sm xl:text-base 3xl:text-lg leading-snug">{ block.title } — { block.text }</span>
                    }
                  </div>
                ))}

                <span className="block text-sm xl:text-base 3xl:text-lg leading-snug">Year — {work.date}</span>
              </div>
            </motion.div>
                  
            { work.featuredImage && (
              <motion.div variants={fade}>
                <Img fluid={ work.featuredImage.fluid } className="w-full mb-0 pb-0" />
              </motion.div>
            )}
          </div>

          <motion.div variants={fade} className="mb-8">
            {
              work.content.map((block) => (
                <div key={block.id}>
                  {
                    block.model.apiKey === 'text' &&
                      <div
                        className="w-10/12 md:w-1/2 xl:w-5/12 3xl:w-4/12 xl:pt-3 pt-6 md:pt-8 xl:pt-12 pb-16 md:pb-20 xl:pb-24 content xl:text-lg 3xl:text-xl"
                        dangerouslySetInnerHTML={{ __html: block.text }}
                      ></div>
                  }{
                    block.model.apiKey === 'image35050' &&
                      <div className="w-full overflow-hidden mb-8">
                        <div className="flex flex-wrap md:-mx-4">
                          <div className="w-full flex flex-col md:w-1/2 md:px-4 mb-8 md:mb-0">
                            <Img fluid={ block.image1.fluid } className="w-full h-full mb-0 pb-0" />
                          </div>
                          <div className="w-full md:w-1/2 md:px-4 flex flex-col">
                            <div className="flex flex-wrap sm:-mx-4 md:mx-0">
                              <div className="w-full sm:w-1/2 md:w-full mb-8 sm:mb-0 md:mb-8 sm:px-4 md:px-0">
                                <Img fluid={ block.image2.fluid } classame="w-full mb-0 pb-0" />
                              </div>
                              <div className="w-full sm:w-1/2 md:w-full sm:px-4 md:px-0">
                                <Img fluid={ block.image3.fluid } className="w-full mb-0 pb-0" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  }{
                    block.model.apiKey === 'image25050' &&
                      <div className="w-full overflow-hidden mb-8">
                        <div className="flex flex-wrap sm:-mx-4">
                          <div className="w-full sm:w-1/2 sm:px-4">
                            <Img fluid={ block.image1.fluid } className="w-full mb-8 pb-0" />
                          </div>
                          <div className="w-full sm:w-1/2 sm:px-4">
                            <Img fluid={ block.image2.fluid } className="w-full mb-0 pb-0" />
                          </div>
                        </div>
                      </div>
                  }{
                    block.model.apiKey === 'image27030' &&
                      <div className="w-full overflow-hidden mb-8">
                        <div className="flex flex-wrap sm:-mx-4">
                          <div className="w-full sm:w-7/12 sm:px-4 flex flex-col">
                            <Img fluid={ block.image1.fluid } className="w-full mb-8 sm:mb-0 pb-0 h-full" />
                          </div>
                          <div className="w-full sm:w-5/12 sm:px-4 flex flex-col">
                            <Img fluid={ block.image2.fluid } className="w-full h-full" />
                          </div>
                        </div>
                      </div>
                  }{
                    block.model.apiKey === 'image23070' &&
                      <div className="w-full overflow-hidden mb-8">
                        <div className="flex flex-wrap sm:-mx-4">
                          <div className="w-full sm:w-5/12 sm:px-4 flex flex-col">
                            <Img fluid={ block.image1.fluid } className="w-full h-full mb-8 sm:mb-0 pb-0" />
                          </div>
                          <div className="w-full sm:w-7/12 sm:px-4 flex flex-col">
                            <Img fluid={ block.image2.fluid } className="w-full h-full" />
                          </div>
                        </div>
                      </div>
                  }{
                    block.model.apiKey === 'image3333333_square' &&
                    <div className="w-full overflow-hidden mb-8">
                      <div className="flex flex-wrap sm:-mx-4">
                        <div className="w-full sm:w-4/12 sm:px-4 flex flex-col">
                          <Img fluid={ block.image1.fluid } className="w-full h-full mb-8 sm:mb-0 pb-0" />
                        </div>
                        <div className="w-full sm:w-4/12 sm:px-4 flex flex-col">
                          <Img fluid={ block.image2.fluid } className="w-full h-full mb-8 sm:mb-0 pb-0" />
                        </div>
                        <div className="w-full sm:w-4/12 sm:px-4 flex flex-col">
                          <Img fluid={ block.image3.fluid } className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  }{
                    block.model.apiKey === 'image25050_square' &&
                    <div className="w-full overflow-hidden mb-8">
                      <div className="flex flex-wrap sm:-mx-4">
                        <div className="w-full sm:w-1/2 sm:px-4 flex flex-col">
                          <Img fluid={ block.image1.fluid } className="w-full h-full mb-8 sm:mb-0 pb-0" />
                        </div>
                        <div className="w-full sm:w-1/2 sm:px-4 flex flex-col">
                          <Img fluid={ block.image2.fluid } className="w-full h-full" />
                        </div>
                      </div>
                    </div>
                  }{
                    block.model.apiKey === 'image1100' &&
                      <div className="w-full overflow-hidden mb-8">
                        <Img fluid={ block.image.fluid } className="w-full pb-0" />
                      </div>
                  }
                </div>
              ))
            }
          </motion.div>
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
      introText
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      date(formatString: "YYYY")
      featuredImage {
        fluid(imgixParams: {w: "2000", h: "1200", fit: "crop" }) {
          ...GatsbyDatoCmsFluid
        }
      }
      metaBlocks {
        ... on DatoCmsTextBlock {
          id
          model { apiKey }
          title
          text
        }
      }
      content {
        ... on DatoCmsText {
          id
          model { apiKey }
          text
        }
        ... on DatoCmsImage35050 {
          id
          model {
            apiKey
          }
          image1 {
            fluid(
              imgixParams: {h: "2000", w: "1200", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image2 {
            fluid(
              imgixParams: {h: "975", w: "1200", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image3 {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "975", w: "1200", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
        }
        ... on DatoCmsImage27030 {
          id
          model {
            apiKey
          }
          image1 {
            fluid(
              imgixParams: {h: "1100", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image2 {
            fluid(
              imgixParams: {h: "1600", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
        }
        ... on DatoCmsImage23070 {
          id
          model {
            apiKey
          }
          image1 {
            fluid(
              imgixParams: {h: "1600", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image2 {
            fluid(
              imgixParams: {h: "1100", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
        }
        ... on DatoCmsImage25050 {
          id
          model {
            apiKey
          }
          image1 {
            fluid(
              imgixParams: {h: "1100", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image2 {
            fluid(
              imgixParams: {h: "1100", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
        }
        ... on DatoCmsImage25050Square {
          id
          model {
            apiKey
          }
          image1 {
            fluid(
              imgixParams: {h: "1600", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image2 {
            fluid(
              imgixParams: {h: "1600", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
        }
        ... on DatoCmsImage3333333Square {
          id
          model {
            apiKey
          }
          image1 {
            fluid(
              imgixParams: {h: "1600", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image2 {
            fluid(
              imgixParams: {h: "1600", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image3 {
            fluid(
              imgixParams: {h: "1600", w: "1600", fit: "crop"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
        }
        ... on DatoCmsImage1100 {
          id
          model {
            apiKey
          }
          image {
            fluid(
              imgixParams: {w: "2000", h: "1200", fit: "crop" }) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
        }
      }
      category {
        slug
        name
      }
    }
  }
`