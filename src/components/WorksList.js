import React from "react";

const WorksList = (props) => {
  let publicURL = process.env.PUBLIC_URL;
  return (
    <div>
      <ul>
        {props.list &&
          props.list.map((work, index) => (
            // <li
            //   className="worksbg"
            //   key={index}
            //   style={{
            //     backgroundImage: `url(${
            //       process.env.PUBLIC_URL + "/images/folder.svg"
            //     })`,
            //   }}
            // >
            //   <div>
            //     <h4>{work.title}</h4>
            //     <p>주제 : {work.theme}</p>
            //     <p>구분 : {work.sort}</p>
            //     <p>언어 : {work.lang}</p>
            //     <a href={work.url}>바로가기</a>
            //   </div>
            // </li>
            <li className="workslist" key={index}>
              <div className="worksbg">
                <img
                  src={publicURL + "/images/folder.svg"}
                  alt="circle"
                  className="project1"
                />
                <h4 className="workstt">{work.title}</h4>
              </div>
              <div>
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
