import React from 'react'
import photo from '../images/photo.jpg'

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: `0 auto`,
        maxWidth: 750,
        padding: `0px 1rem 1rem`,
        marginTop: `1rem`,
        marginBottom: `3rem`,
      }}
    >
      <img src={photo} alt={'Myphoto'} style={{ borderRadius: '50%' }} />
      <p style={{ marginLeft: `0.5rem` }}>
        Personal blog by{' '}
        <a
          href="https://www.linkedin.com/in/testardr/"
          style={{ color: 'green', textDecoration: 'underline' }}
        >
          Romain Testard
        </a>
        .
        <br /> I explain code with words.
      </p>
    </div>
  )
}

export default About
