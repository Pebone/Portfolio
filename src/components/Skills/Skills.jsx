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
            { name: "React", level: 3 },
            { name: "JavaScript", level: 3 },
            { name: "TypeScript", level: 1 },
            { name: "JQuery", level: 3 },
            { name: "HTML", level: 3 },
            { name: "CSS", level: 3 },
            { name: "SASS", level: 3 },
            { name: "Styled-Components", level: 2 },
            { name: "TailwindCSS", level: 2 },
            { name: "Material UI", level: 3 },
            { name: "Ant Design", level: 3 },
            { name: "GIT", level: 3 },
            { name: "SCRUM", level: 3 },
            { name: "Vite", level: 2 },
            { name: "Vercel", level: 2 },
            { name: "Responsive Design", level: 3 },
          ]}
        ></Card>
        <Card
          title="Web Design"
          skills={[
            { name: "UI/UX Design", level: 1 },
            { name: "Figma", level: 2 },
          ]}
        ></Card>
        <Card
          title="Backend"
          skills={[
            { name: "NodeJS", level: 1 },
            { name: "MongoDB", level: 1 },
            { name: "ExpressJS", level: 1 },
          ]}
        ></Card>
        <Card
          title="Soft Skills"
          skills={[
            { name: "Good Communication" },
            { name: "Great Teamwork" },
            { name: "Good at receiving and giving feedback" },
            { name: "Adaptability" },
            { name: "Focused" },
            { name: "Organized" },
          ]}
        ></Card>
      </div>
    </section>
  );
}

export default Skills;
