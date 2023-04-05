import { Reset } from 'styled-reset';
import './App.css';
import React, { Component } from 'react'


function App() {
  return (
    <div>
      <Reset />
      <header className="main_contents">
        <div className="container">
          <Nav></Nav>
          <About></About>
          <Skills></Skills>
          <Works></Works>
          <Contact></Contact>
        </div>
      </header>
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
              <li><a href="">About</a></li>
              <li><a href="">Skills</a></li>
              <li><a href="">Works</a></li>
              <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}
class About extends Component {
  render() {
    return (
      <section>
        <h2 className='title'>About me<span role="img" aria-label="Smiling Face">😊</span></h2>
      </section>
    )
  }
}
class Skills extends Component {
  render() {
    return (
      <section>
        <h2 className='title'>Improving skills<span role="img" aria-label="Pencil">✏️</span></h2>
      </section>
    )
  }
}
class Works extends Component {
  render() {
    return (
      <section>
        <h2 className='title'>It’s my works<span role="img" aria-label="Flexed Biceps">💪</span></h2>
      </section>
    )
  }
}
class Contact extends Component {
  render() {
    return (
      <section>
        <h2 className='title'>Contact me here!<span role="img" aria-label="Backhand Index Pointing Down">👇</span></h2>
      </section>
    )
  }
}



export default App;
