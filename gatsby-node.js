const path = require(`path`)
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  // Create paginated pages for post
  const postPerPage = 3;
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

  Array.from({ legth: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      }
    })
  })

  // // create sigle bolg post
  // data.allMdx.edges.forEach(edge => {
  //   const slug = edge.node.frontmatter.slug;
  //   const id = edge.node.id;
  //   actions.createPage({
  //     path: slug,
  //     component: require.resolve('./src/templates/singlePost.js'),
  //     context: { id },
  //   })
  // })
}