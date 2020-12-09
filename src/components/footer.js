import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Footer = (color) => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          global: datoCmsGlobal {
            socialProfiles {
              ... on DatoCmsSocialProfile {
                id
                model { apiKey }
                title
                url
              }
            }
            emailAddress
          }
        }
      `}
      render={data => (
        <footer className={ color.color + ` p-6 md:p-10 md:pb-8 relative z-10` }>
          <nav className="flex flex-wrap">
            <div className="w-full md:flex-1">
              <ul className="flex">
                { data.global.socialProfiles.map((block) => (
                  <li key={block.id}>
                    {
                      block.model.apiKey === 'social_profile' &&
                      <a href={ block.url } target="_blank" rel="noreferrer noopener" className="text-lg md:text-xl xl:text-2xl 3xl:text-3xl mr-4 md:mr-5 xl:mr-6 block nav--item--current ">{ block.title }</a>
                    }
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-auto ml-auto">
              <span className="text-lg md:text-xl xl:text-2xl 3xl:text-3xl md:pl-5">Site by <a href="https://ijpowell.co.uk/" target="_blank" rel="noopener noreferrer" className="inline-block nav--item--current">IJP</a> <span className="">+</span> <a href="https://samgoddard.co.uk/" target="_blank" rel="noopener noreferrer" className="inline-block nav--item--current">Snugs</a></span>
            </div>
          </nav>
        </footer>
      )}
    />
  )
}

export default Footer