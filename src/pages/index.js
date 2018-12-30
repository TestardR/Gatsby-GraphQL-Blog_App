import React from 'react'
import Layout from '../components/layout'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>
          <Link
            style={{
              color: 'green',
              fontFamily: 'Georgia',
              fontWeight: 900,
              fontSize: '1.5rem',
              textRendering: 'optimizeLegibility',
            }}
            to={post.node.frontmatter.path}
          >
            {post.node.frontmatter.title}
          </Link>
        </h3>
        <small>
          {post.node.frontmatter.date} • {post.node.frontmatter.time}
        </small>
        <br />
        <br />
        <p>{post.node.frontmatter.summary}</p>
        <br />
        <hr />
      </div>
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            time
            summary
          }
        }
      }
    }
  }
`

export default BlogPage
