import React, { Component } from "react";
import axios from "axios";
import SkillsList from "./SkillsList";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillsList: [],
      idx: "1",
    };
  }
  componentDidMount() {
    this._getList();
  }
  // List를 가져오는 함수를 생성
  _getList() {
    const apiUrl = "data/skillsdata.json";
    axios
      .get(apiUrl)
      .then((data) => {
        //해당 경로에 있는 리스트를 state에 저장
        this.setState({
          skillsList: data.data.skillsList,
        });
        //error 발견 -> 콘솔로 알려줌
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    // let publicURL = process.env.PUBLIC_URL;
    return (
      <section className="section" id="skills">
        <h2 className="title">
          Improving skills
          <span role="img" aria-label="Pencil">
            ✏️
          </span>
        </h2>
        <div>
          {this.state.skillsList.length > 0 ? (
            <SkillsList
              list={this.state.skillsList.filter(
                (skill) => skill.idx === this.state.id
              )}
            />
          ) : (
            <span>NONE..</span>
          )}
        </div>

        {/*
        <ul className="d-flex justify-content-center flex-wrap">
          <li><img src={publicURL+'/images/skills/sk-html.png'} alt='html'/></li>
          <li><img src={publicURL+'/images/skills/sk-css.png'} alt='css'/></li>
          <li><img src={publicURL+'/images/skills/sk-javascript.png'} alt='javascript'/></li>
          <li><img src={publicURL+'/images/skills/sk-bootstrap.png'} alt='bootstrap'/></li>
          <li><img src={publicURL+'/images/skills/sk-jquery.png'} alt='jquery'/></li>
          <li><img src={publicURL+'/images/skills/sk-react.png'} alt='react'/></li>
        </ul>
        */}
      </section>
    );
  }
}

export default Skills;
