const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
              category {
                slug
              }
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(edge => {
        createPage({
          path: `${edge.node.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: edge.node.slug,
            cat: edge.node.category[0].slug
          },
        })
      })      
      resolve()
    })
  })
}