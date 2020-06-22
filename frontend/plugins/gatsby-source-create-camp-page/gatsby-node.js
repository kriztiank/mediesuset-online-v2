const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      camps: allStrapiCamps {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.camps.nodes.forEach(camp => {
    createPage({
      path: `/camps/${camp.slug}`,
      component: path.resolve(`src/templates/camps-template.js`),
      context: {
        slug: camp.slug,
      },
    })
  })
}
