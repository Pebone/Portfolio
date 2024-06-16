import { useEffect } from "react";
import { useState } from "react";
import styles from "./Card.module.scss";

function Card(props) {
  const [skillList, SetSkillList] = useState([]);

  useEffect(() => {
    SetSkillList(props.skills);
  }, [props.skills]);

  console.log(skillList);
  return (
    <section className={styles.card}>
      <div className={styles.title}>
        <p>{props.title}</p>
      </div>
      <div className={styles.skills}>
        {skillList.map((skill, i) => (
          <div className={styles.skill}>
            <p key={i}>{skill}</p>
            <div className={styles.level}></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;
