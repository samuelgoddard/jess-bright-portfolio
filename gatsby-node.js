const createWork = require(`./gatsby/createWork`)
const createCategories = require(`./gatsby/createCategories`)

exports.createPages = async ({ actions, graphql }) => {
  await createWork({ actions, graphql })
  await createCategories({ actions, graphql })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}