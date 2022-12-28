import React from "react";
import { graphql, } from "gatsby";
import { Container, Content, ContentCard, FeatureImage, Pagination, } from "../components";
import { H1, P } from "../elements"

export const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
  const nextPage = `/${currentPage + 1}`;
  const posts = data.allMdx.edges;

  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          This is a apple.
        </H1>
        <P color="dark2" textAlign="center">
          ekugtiuegsltu lkhrlekhrlkwehr
          wekjrhwlkethejksyht kewjhtlwhtlkw lkhwetlkhwetl
          wekjrthlwketh
          weklrhlkhtj;lwj;ltj ;wletj;ljt;wljyt; j;lj;lewjt;l
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination>
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      </Pagination>
    </Container>
  )
}

export default allPosts

export const pageQuery = graphql(`
  query AllPostsQuery ($skip: Int, $limit: Int) {
    allMdx(sort: {frontmatter: {date: DESC}}, limit: $limit, skip: $skip) {
      edges {
        node {
          frontmatter {
            slug
            date
            title
            excerpt
          }
        }
      }
    }
  }
`)