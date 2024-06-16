import { useEffect } from "react";
import { useState } from "react";
import styles from "./Card.module.scss"

function Card(props) {
  const [skillList, SetSkillList] = useState([]);

  useEffect(() => {
    SetSkillList(props.skills);
  }, [props.skills]);

  console.log(skillList);
  return (
    <section>
      <div>
        <p>{props.title}</p>
      </div>
      <div>
        {skillList.map((skill, i) => (
          <p key={i}>{skill}</p>
        ))}
      </div>
    </section>
  );
}

export default Card;
