import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="relative md:absolute top-0 right-0 mb-12 md:mb-0">
    <nav className="">
      <ul className="flex flex-wrap">
        <li>
          <Link className="text-lg md:text-xl xl:text-2xl ml-0 mx-2 md:mx-3 py-2 relative focus:outline-none focus:shadow-outline" activeClassName="nav--active" to="/">Work</Link>
        </li>
        <li>
          <Link className="text-lg md:text-xl xl:text-2xl mx-2 md:mx-3 py-2 relative focus:outline-none focus:shadow-outline" activeClassName="nav--active" to="/about">About</Link>
        </li>
        <li>
          <a className="text-lg md:text-xl xl:text-2xl mx-2 md:mx-3 md:mr-0 py-2 relative focus:outline-none focus:shadow-outline" href="mailto:jess_bright@hotmail.co.uk">Mail</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
