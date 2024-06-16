import Card from "../Card/Card";
import styles from "./Skills.module.scss";

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.title}>
        <p className={styles.title_name}>Professional Skills</p>
        <div className={styles.title_subtitle_div}>
          <p className={styles.title_subtitle}>MY</p>
          <p className={styles.title_subtitle_highlight}>Talent</p>
        </div>
        <div className={styles.title_levels}>
          <div className={styles.title_levels_1}></div>
          <hr></hr>
          <div className={styles.title_levels_2}></div>
          <hr></hr>
          <div className={styles.title_levels_3}></div>
        </div>
      </div>
      <div className={styles.cards}>
        <Card
          title="Frontend"
          skills={[
            "React",
            "JavaScript",
            "TypeScript",
            "JQuery",
            "HTML",
            "CSS",
            "SASS",
            "Styled-Components",
            "TailwindCSS",
            "Material UI",
            "Ant Design",
            "GIT",
            "SCRUM",
            "Vite",
            "Vercel",
            "Responsive Design",
          ]}
        ></Card>
        <Card title="Web Design" skills={["UI/UX Design", "Figma"]}></Card>
        <Card
          title="Backend"
          skills={["NodeJS", "MongoDB", "ExpressJS"]}
        ></Card>
        <Card
          title="Soft Skills"
          skills={[
            "Good Communication",
            "Great Teamwork",
            "Good at receiving and giving feedback",
            "Adaptability",
            "Focused",
            "Organized",
          ]}
        ></Card>
      </div>
    </section>
  );
}

export default Skills;
