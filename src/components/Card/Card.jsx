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
          <div className={styles.skill} key={i}>
            <p>{skill.name}</p>
            {skill.level === 1 && <div className={styles.level1}></div>}
            {skill.level === 2 && <div className={styles.level2}></div>}
            {skill.level === 3 && <div className={styles.level3}></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Card;
