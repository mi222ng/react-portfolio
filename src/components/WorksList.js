import React from "react";
import { useState } from "react";

const WorksList = (props) => {
  const [isPaperMoving, setIsPaperMoving] = useState(false);
  //true일 경우 함수 실행
  const handleClick = () => {
    setIsPaperMoving(true);
    const svgViewbox = document.getElementById("folder");
    const svgPaper = document.getElementById("paper");
    svgViewbox.setAttribute("viewBox", "0 0 414 148");
    svgPaper.setAttribute("width", "414");
  };
  return (
    <div>
      <ul>
        {props.list &&
          props.list.map((work, index) => (
            <li className="workslist" key={index}>
              <div className="worksbg">
                <div
                  className={`work-link ${isPaperMoving ? "moving" : ""}`}
                  onClick={handleClick}
                >
                  <svg
                    id="folder"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 196 148"
                  >
                    <path
                      id="back"
                      class="cls-1"
                      d="M187.9,19.52H112.81a11.57,11.57,0,0,1-11.34-9.17l-.54-2.5C100,3.3,95.42,0,90.12,0h-80A9.09,9.09,0,0,0,1,9.08V143.46A4.55,4.55,0,0,0,5.55,148h186.9a4.55,4.55,0,0,0,4.55-4.54V28.6A9.09,9.09,0,0,0,187.9,19.52Z"
                      transform="translate(-1)"
                      fill="#3583de"
                    />
                    <rect
                      id="paper"
                      class={`cls-2 ${isPaperMoving ? "moving" : ""}`}
                      x="3"
                      y="9"
                      width="172"
                      height="138"
                      fill="#efdfb4"
                    />
                    <path
                      id="front"
                      class="cls-1"
                      d="M8,19H188a8,8,0,0,1,8,8V143.1a4.9,4.9,0,0,1-4.9,4.9H4.9A4.9,4.9,0,0,1,0,143.1V27a8,8,0,0,1,8-8Z"
                      fill="#3583de"
                    />
                  </svg>
                  <h4 className="workstt">{work.title}</h4>
                </div>
                <p>주제 : {work.theme}</p>
                <p>구분 : {work.sort}</p>
                <p>언어 : {work.lang}</p>
                <a href={work.url}>바로가기</a>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WorksList;
