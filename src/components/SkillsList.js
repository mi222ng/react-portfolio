import React from "react";

const SkillsList = (props) => {
  return (
    <ul>
      {props.list &&
        props.list.map((skill, id) => (
          <li
            className="skill-lang"
            key={id}
            id={skill.skill.toLowerCase()}
            style={{ backgroundColor: skill.color }}
          >
            {skill.skill}
          </li>
        ))}
    </ul>
  );
};

export default SkillsList;
