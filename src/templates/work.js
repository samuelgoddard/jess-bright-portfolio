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
          className="mb-8"
          variants={item}
          transition="easeInOut"
        >
          <div className="mb-8 md:mb-12">
            <h1 className="font-serif leading-snug pt-12 md:pt-20 xl:pt-24 tracking-tighter mb-0 pb-0">{work.title}</h1>
            <span className="block text-gray text-xl md:text-2xl -mt-1">{ work.category[0].name }</span>
          </div>

          <div className="flex flex-wrap items-end mb-8 md:mb-12">
            { work.introText ? (
              <div className="w-10/12 md:w-5/12 mb-6 md:mb-0 md:text-lg leading-snug" dangerouslySetInnerHTML={{ __html: work.introText }}></div>
            ) : (<></>)}

            <div className="w-full md:w-6/12 ml-auto md:text-right">
              <span className="block text-sm leading-snug">Client — { work.client }</span>
              <span className="block text-sm leading-snug">Photographer — { work.photographer }</span>
              <span className="block text-sm leading-snug">Year — {work.date}</span>
            </div>
          </div>

          <Img fluid={ work.featuredImage.fluid } className="w-full mb-0 pb-0" />
        </motion.div>

        <motion.div 
          className="mb-8"
          variants={item}
          transition="easeInOut"
        >
          {
            work.content.map((block) => (
              <div key={block.id}>
                {
                  block.model.apiKey === 'text' &&
                    <div
                      className="w-10/12 md:w-1/2 xl:w-5/12 xl:pt-3 pb-12 md:pb-16 xl:pb-20"
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
                  block.model.apiKey === 'image1100' &&
                    <div className="w-full overflow-hidden mb-8">
                      <Img fluid={ block.image.fluid } className="w-full pb-0" />
                    </div>
                }
              </div>
            ))
          }
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
      client
      photographer
      date(formatString: "YYYY")
      featuredImage {
        fluid(imgixParams: { w: "2000", h: "1200", fit: "fillmax", crop: "center" }) {
          ...GatsbyDatoCmsFluid
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
              imgixParams: {auto: "format", sharp:0, h: "2000", w: "1200", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image2 {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "975", w: "1200", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image3 {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "975", w: "1200", fit: "crop", crop: "faces, center"}) {
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
              imgixParams: {auto: "format", sharp:0, h: "875", w: "1200", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image2 {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "1200", w: "1200", fit: "crop", crop: "faces, center"}) {
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
              imgixParams: {auto: "format", sharp:0, h: "1200", w: "1200", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image2 {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "875", w: "1200", fit: "crop", crop: "faces, center"}) {
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
              imgixParams: {auto: "format", sharp:0, h: "875", w: "1200", fit: "crop", crop: "faces, center"}) {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          image2 {
            fluid(
              imgixParams: {auto: "format", sharp:0, h: "875", w: "1200", fit: "crop", crop: "faces, center"}) {
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
              imgixParams: {auto: "format", sharp:0, h: "1200", w: "2000", fit: "crop", crop: "faces, center"}) {
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