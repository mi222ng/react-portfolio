import React, { useState } from "react";

const SkillsList = (props) => {
  //상태를 사용하여 마우스 호버시 해당 스킬 객체를 저장
  const [isHover, setHover] = useState(null);
  const handleMouseEnter = (skill) => {
    setHover(skill);
  };
  const handleMouseLeave = () => {
    setHover(null);
  };
  return (
    <div className="d-flex skill-con">
      {props.list &&
        props.list.map((skill) => (
          <div
            key={skill.id}
            //마우스 이벤트
            onMouseEnter={() => handleMouseEnter(skill)}
            onMouseLeave={() => handleMouseLeave(null)}
            className="skill-parent"
          >
            <div
              className="skill-item"
              //data json 있는 각 컬러값을 배경색으로 지정
              style={{ backgroundColor: skill.color }}
            >
              <span>{skill.skill}</span>
            </div>
            {isHover === skill ? (
              <span className="skill-hover">{skill.level}</span>
            ) : (
              ""
            )}
          </div>
        ))}
    </div>
  );
};

export default SkillsList;
