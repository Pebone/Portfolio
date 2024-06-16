import Card from "../Card/Card";
import styles from "./Skills.module.scss"

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.title}>
        <p>Professional Skills</p>
        <p>
          MY <span>Talent</span>
        </p>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
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
      <Card title="Backend" skills={["NodeJS", "MongoDB", "ExpressJS"]}></Card>
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
    </section>
  );
}

export default Skills;
