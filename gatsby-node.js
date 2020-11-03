const createWork = require(`./gatsby/createWork`)

exports.createPages = async ({ actions, graphql }) => {
  await createWork({ actions, graphql })
}