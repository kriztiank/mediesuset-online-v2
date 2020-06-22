const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      artists: allStrapiArtists {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.artists.nodes.forEach(artist => {
    createPage({
      path: `/artists/${artist.slug}`,
      component: path.resolve(`src/templates/artists-template.js`),
      context: {
        slug: artist.slug,
      },
    })
  })
}
