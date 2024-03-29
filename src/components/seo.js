import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const SEO = ({ pathname, titleOverride, descriptionOverride, pathnameOverride, imageOverride, noIndex }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
    datoCmsSite: {
      globalSeo: { 
        siteName,
        titleSuffix,
        twitterAccount,
        fallbackSeo: {
          title,
          description,
          image: {
            url
          }
        }
      }
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
        }
      }
      datoCmsSite {
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          fallbackSeo {
            title
            description
            twitterCard
            image {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <Helmet defer={false} titleTemplate={`%s${titleSuffix}`} bodyAttributes={{
      class: pathnameOverride == '/about' || pathnameOverride == '/about/' ? `bg-blue transition-colors ease-in-out duration-500` : `bg-white transition-colors ease-in-out duration-500` }}>
      <html lang="en" />
      <link rel="canonical" href={`${siteUrl}${pathnameOverride ? pathnameOverride : pathname}`}/>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <title>{titleOverride ? titleOverride : title }</title>
      <meta name="description" content={descriptionOverride ? descriptionOverride : description} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${imageOverride ? imageOverride : url}`} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitterAccount} />

      { noIndex && (
        <meta name="robots" content="noindex" />
      )}
      <meta name="google-site-verification" content="0855TkIocyp4FF-uAd-Hgpy5bSIlvN_RkSc2SDJfHss" />
      <meta name="facebook-domain-verification" content="ulwjq329m2ofnz4u0jqs4ph9c6d7cs" />
      
    </Helmet>
  )
}

export default SEO