import styles from "./Card_Projects.module.scss";

function Card_Projects(props) {
  return (
    <section className={styles.card_projects}>
      <div className={styles.img}>
        <img src={props.url} alt={props.alt}></img>
      </div>
      <div className={styles.attributes}>
        <div className={styles.type}>
          <p>{props.project_type}</p>
        </div>
        <div className={styles.name}>
          <h1>{props.project_name}</h1>
        </div>
        <div className={styles.description}>
          <p>{props.project_description}</p>
        </div>
      </div>
    </section>
  );
}

export default Card_Projects;
