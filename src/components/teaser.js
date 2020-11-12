import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Teaser = ({ link, image }) => (
  <Link to={ link } className="block h-full relative group">
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-orange bg-opacity-90 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition duration-500 ease-in-out">
      <span className="w-24 lg:w-32 xl:w-40 h-24 lg:h-32 xl:h-40 rounded-full bg-black flex items-center justify-center text-white font-serif text-xl lg:text-2xl xl:text-3xl leading-none text-center transform scale-75 group-hover:scale-100 transition duration-500 ease-in-out">
        <span className="block -mt-2">Case<br/>Study</span>
      </span>
    </div>
    <Img fluid={ image } className="w-full h-full object-cover mb-0 pb-0" />
  </Link>
)

export default Teaser
