import React, { Component } from 'react'

class Skills extends Component {
  render() {
    return (
      <section className='section' id='skills'>
        <h2 className='title'>Improving skills<span role="img" aria-label="Pencil">✏️</span></h2>
        <ul className='d-flex justify-content-center flex-wrap'>
          <li><img src={process.env.PUBLIC_URL+'/images/skills/sk-html.png'} alt='html'/></li>
          <li><img src={process.env.PUBLIC_URL+'/images/skills/sk-css.png'} alt='css'/></li>
          <li><img src={process.env.PUBLIC_URL+'/images/skills/sk-javascript.png'} alt='javascript'/></li>
          <li><img src={process.env.PUBLIC_URL+'/images/skills/sk-bootstrap.png'} alt='bootstrap'/></li>
          <li><img src={process.env.PUBLIC_URL+'/images/skills/sk-jquery.png'} alt='jquery'/></li>
          <li><img src={process.env.PUBLIC_URL+'/images/skills/sk-react.png'} alt='react'/></li>
        </ul>
      </section>
    )
  }
}

export default Skills;