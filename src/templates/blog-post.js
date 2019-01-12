import React from 'react'
import HeaderBlogPage from './header'
import Footer from './footer'
import About from '../components/about'

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 750,
      }}
    >
      <HeaderBlogPage />
      <h1 style={{ fontSize: ` 2.5rem`, fontWeight: `800` }}>
        {post.frontmatter.title}
      </h1>
      <div style={{ paddingBottom: ` 1.5rem` }}>
        {post.frontmatter.date} • {post.frontmatter.time}
      </div>
      <div
        style={{ lineHeight: '1.5' }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <hr />
      <About />
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
