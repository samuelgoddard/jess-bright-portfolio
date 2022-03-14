import React from "react"
import { Link } from "gatsby"

const Header = ({ color, workActiveOverride, aboutActiveOverride }) => (
  <header className="absolute top-0 md:right-0 p-6 md:p-10">
    <nav className="">
      <ul className="flex flex-wrap">
        <li>
          <Link className={ workActiveOverride ? color + ` nav--active text-lg md:text-xl xl:text-2xl 3xl:text-3xl ml-0 mx-4 md:mx-3 py-2 relative nav-transition` : color + ` nav--item--current text-lg md:text-xl xl:text-2xl 3xl:text-3xl ml-0 mx-4 md:mx-3 py-2 relative nav-transition`} to="/">Work</Link>
        </li>
        <li>
          <Link className={ aboutActiveOverride ? color + ` nav--active text-lg md:text-xl xl:text-2xl 3xl:text-3xl ml-0 mx-4 md:mx-3 py-2 relative nav-transition` : color + ` nav--item--current text-lg md:text-xl xl:text-2xl 3xl:text-3xl ml-0 mx-4 md:mx-3 py-2 relative nav-transition`} to="/about">About</Link>
        </li>
        <li>
          <a className={ color + ` nav--item--current text-lg md:text-xl xl:text-2xl 3xl:text-3xl ml-0 mx-4 md:mx-3 py-2 relative nav-transition`} href="mailto:jess_bright@hotmail.co.uk">Mail</a>
        </li>
        <li>
          <a className={ color + ` nav--item--current text-lg md:text-xl xl:text-2xl 3xl:text-3xl ml-0 mx-4 md:mx-3 py-2 relative nav-transition`} href="https://shop.jessbrightdesign.com" target="_blank" rel="noreferrer noopener">Shop</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
