import { Reset } from 'styled-reset';
import { Link, animateScroll as scroll } from 'react-scroll'
import './App.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';


// scroll.scrollToTop();

function App() {
  return (
    <div>
      <Reset />
      <main className="main_contents">
        <div className="cont">
          <Nav></Nav>
          <About></About>
          <Skills></Skills>
          <Works></Works>
          <Contact></Contact>
          <Topbtn></Topbtn>
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
              <li><Link to="about" spy={true}>About</Link></li>
              <li><Link to="skills" spy={true}>Skills</Link></li>
              <li><Link to="works" spy={true}>Works</Link></li>
              <li><Link to="contact" spy={true}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
class About extends Component {
  render() {
    const profileUrl = "/images/profile.jpg";
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
class Skills extends Component {
  render() {
    return (
      <section className='section' id='skills'>
        <h2 className='title'>Improving skills<span role="img" aria-label="Pencil">✏️</span></h2>
        <ul className='d-flex justify-content-center flex-wrap'>
          <li><img src='/images/skills/sk-html.png' alt='html'/></li>
          <li><img src='/images/skills/sk-css.png' alt='css'/></li>
          <li><img src='/images/skills/sk-javascript.png' alt='javascript'/></li>
          <li><img src='/images/skills/sk-bootstrap.png' alt='bootstrap'/></li>
          <li><img src='/images/skills/sk-jquery.png' alt='jquery'/></li>
          <li><img src='/images/skills/sk-react.png' alt='react'/></li>
        </ul>
      </section>
    )
  }
}
class Works extends Component {
  render() {
    return (
      <section className='section' id='works'>
        <h2 className='title'>It’s my works<span role="img" aria-label="Flexed Biceps">💪</span></h2>
        <div className='d-flex flex-wrap'>
          <div>
            <img src='/images/folder.svg' alt='circle' className='project1'/>
          </div>
          <div>
            <img src='/images/folder.svg' alt='circle' className='project2'/>
          </div>
          <div>
            <img src='/images/folder.svg' alt='circle' className='project3'/>
          </div>
          <div>
            <img src='/images/folder.svg' alt='circle' className='project4'/>
          </div>
        </div>
      </section>
    )
  }
}
class Contact extends Component {
  render() {
    return (
      <section className='section' id='contact'>
        <h2 className='title'>Contact me here!<span role="img" aria-label="Backhand Index Pointing Down">👇</span></h2>
        <div className='d-flex justify-content-center'>
          <a href='https://github.com/mi222ng'><FontAwesomeIcon icon={faGithub} beatFade className='contacticon mygit'/></a>
          <a href='https://www.instagram.com/mi222ng'><FontAwesomeIcon icon={faInstagram} beatFade className='contacticon myinsta'/></a>
          {/* <p>hello</p> */}
        </div>
      </section>
    )
  }
}
class Topbtn extends Component {
  
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop({
      duration: 0,
      delay:100
      }
    );
  }
  render() {
    return (
      <section className='d-flex justify-content-center'>
        <a href={this.scrollToTop} onClick={this.scrollToTop} ><FontAwesomeIcon icon={faCircleChevronUp} className='topbtn'/></a>
      </section>
    )
  }
}



export default App;
