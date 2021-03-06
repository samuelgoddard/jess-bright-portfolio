import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"

const Teaser = ({ link, image, backgroundColor }) => {
  const bgColorStyles = { backgroundColor: backgroundColor }
  return (
  <Link to={ link } className="block h-full relative group grid-item">

    <div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-90 flex items-center justify-center z-10 opacity-0 group-hover:opacity-90 group-focus:opacity-90 transition duration-500 ease-in-out" style={ bgColorStyles }>
      <span className="w-24 lg:w-32 xl:w-40 h-24 lg:h-32 xl:h-40 rounded-full bg-black flex items-center justify-center text-white font-serif text-xl lg:text-2xl xl:text-3xl leading-none text-center transform scale-75 group-hover:scale-100 transition duration-500 ease-in-out">
        <span className="block -mt-2">Case<br/>Study</span>
      </span>
    </div>
    <Img backgroundColor={ backgroundColor } fluid={ image } className="w-full h-full object-cover object-center mb-0 pb-0" />
  </Link>
  )
}

export default Teaser
