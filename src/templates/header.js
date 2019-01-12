import React from 'react'
import { Link } from 'gatsby'

const HeaderBlogPage = () => {
  return (
    <Link to="/">
      <h1
        style={{
          margin: `0 auto`,
          maxWidth: 750,
          paddingTop: `3rem`,
          paddingBottom: `2rem`,
          color: 'green',
          fontSize: '2rem',
          fontWeight: '900',
        }}
      >
        OverCoded
      </h1>
    </Link>
  )
}

export default HeaderBlogPage
