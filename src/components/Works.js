import React, { Component } from 'react'

class Works extends Component {
  render() {
    let publicURL = process.env.PUBLIC_URL;
    return (
      <section className='section' id='works'>
        <h2 className='title'>It’s my works<span role="img" aria-label="Flexed Biceps">💪</span></h2>
        <div className='d-flex flex-wrap'>
          <div>
            <img src={publicURL+'/images/folder.svg'} alt='circle' className='project1'/>
          </div>
          <div>
            <img src={publicURL+'/images/folder.svg'} alt='circle' className='project2'/>
          </div>
          <div>
            <img src={publicURL+'/images/folder.svg'} alt='circle' className='project3'/>
          </div>
          <div>
            <img src={publicURL+'/images/folder.svg'} alt='circle' className='project4'/>
          </div>
        </div>
      </section>
    )
  }
}

export default Works;