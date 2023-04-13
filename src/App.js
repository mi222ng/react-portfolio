import { Reset } from 'styled-reset';
import { Link } from "react-scroll"
import './App.css';
import React, { Component } from 'react'


const section = { marginBottom:135};


function App() {
  return (
    <div>
      <Reset />
      <main className="main_contents">
        <div className="container">
          <Nav></Nav>
          <About></About>
          <Skills style={section}></Skills>
          <Works style={section}></Works>
          <Contact style={section}></Contact>
        </div>
      </main>
    </div>
  );
}

// 메뉴
class Nav extends Component {
  render() {
    return (
      <div className='menu'>
        <nav>
          <ul>
              <li><Link to="about" spy={true} smooth={true}>About</Link></li>
              <li><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
              <li><Link to="works" spy={true} smooth={true}>Works</Link></li>
              <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
class About extends Component {
  render() {
    const profileUrl = "/images/profile-m.jpg";
    return (
      <div className='section' id='about'>
        <h2 className='title'>About me<span role="img" aria-label="Smiling Face">😊</span></h2>
        <div>
          <img src={profileUrl} alt='profile'/>
        </div>
      </div>
    )
  }
}
class Skills extends Component {
  render() {
    return (
      <section className='section' id='skills'>
        <h2 className='title'>Improving skills<span role="img" aria-label="Pencil">✏️</span></h2>
        <p>Skills</p>
      </section>
    )
  }
}
class Works extends Component {
  render() {
    return (
      <section id='works'>
        <h2 className='title'>It’s my works<span role="img" aria-label="Flexed Biceps">💪</span></h2>
        <p>Works</p>
      </section>
    )
  }
}
class Contact extends Component {
  render() {
    return (
      <section style={section} id='contact'>
        <h2 className='title'>Contact me here!<span role="img" aria-label="Backhand Index Pointing Down">👇</span></h2>
        <p>Contact</p>
      </section>
    )
  }
}



export default App;
