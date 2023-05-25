import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Works extends Component {
  render() {
    return (
      <section className="section" id="contact">
        <h2 className="title">
          Contact me here!
          <span role="img" aria-label="Backhand Index Pointing Down">
            👇
          </span>
        </h2>
        <div className="d-flex justify-content-center">
          <a href="https://github.com/mi222ng" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              beatFade
              className="contacticon mygit"
            />
          </a>
          <a href="https://www.instagram.com/mi222ng" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              beatFade
              className="contacticon myinsta"
            />
          </a>
          {/* <p>hello</p> */}
        </div>
      </section>
    );
  }
}

export default Works;
