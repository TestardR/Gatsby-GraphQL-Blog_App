import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 750,
      }}
    >
      <Header />
      <h1>{post.frontmatter.title}</h1>
      <div style={{ paddingBottom: ` 1.5rem` }}>
        {post.frontmatter.date} • {post.frontmatter.time}
      </div>
      <div
        style={{ lineHeight: '1.5' }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Footer />
    </div>
    
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        time
        date
      }
    }
  }
`
