import React from 'react'
import { Link } from 'gatsby'
import '../components/layout.css'

const Footer = () => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 750,
        paddingTop: `1rem`,
        paddingBottom: `10rem`,
        textDecoration: 'underline',
        fontSize: '1rem',
        fontWeight: '900',
      }}
    >
      <a
        style={{ color: 'green', float: 'right' }}
        href="https://github.com/TestardR/WebSecurity-Article_Series"
      >
        Edit on GitHub
      </a>
      <Link style={{ color: 'green', textDecoration: 'none' }} to="/">
        Go Back
      </Link>
    </div>
  )
}

export default Footer
