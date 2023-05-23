import { Reset } from "styled-reset";
import { animateScroll as scroll } from "react-scroll";
import "./App.css";
import React, { Component } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

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
          <div id="footer">Copyright © 2023 MI222NG. All Rights Reserved.</div>
        </div>
      </main>
    </div>
  );
}

// 탑버튼
class Topbtn extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  scrollToTop() {
    scroll.scrollToTop({
      duration: 0,
      delay: 100,
    });
  }
  render() {
    return (
      <section className="d-flex justify-content-center">
        <a href={this.scrollToTop} onClick={this.scrollToTop}>
          <FontAwesomeIcon icon={faCircleChevronUp} className="topbtn" />
        </a>
      </section>
    );
  }
}

export default App;
