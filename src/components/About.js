import React, { Component } from 'react'

class About extends Component {
  render() {
    const profileUrl = process.env.PUBLIC_URL+"/images/profile.jpg";
    return (
      <section className='section' id='about'>
        <h2 className='title'>About me<span role="img" aria-label="Smiling Face">😊</span></h2>
        <div>
          <img src={profileUrl} alt='profile'/>
        </div>
      </section>
    )
  }
}

export default About;