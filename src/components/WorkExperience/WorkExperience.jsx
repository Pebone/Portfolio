import { useState } from "react";
import styles from "./WorkExperience.module.scss";

function WorkExperience() {
  const [selectedItem, setSelectedItem] = useState("");
  const [showResponsability, setShowResponsability] = useState("first");

  const selectedDiv = (divId) => {
    const div = document.getElementById(divId);
    console.log(div);
    // if (div) {
    //   div.scrollIntoView({ behavior: "smooth" });
    // }
    setSelectedItem(divId);
    setShowResponsability(divId);
  };

  //   const showResponsabilites = (divId) => {
  //     const div = document.getElementById(divId);
  //   };

  return (
    <section id="work_experience" className={styles.work_experience}>
      <div className={styles.title}>
        <p className={styles.title_name}>Work Experience</p>
        <div className={styles.title_subtitle_div}>
          <p className={styles.title_subtitle}>MY</p>
          <p className={styles.title_subtitle_highlight}>Work</p>
        </div>
      </div>
      <div className={styles.works}>
        <div>
          <div
            id="first"
            onClick={() => selectedDiv("first")}
            className={`${styles.work_location} ${
              selectedItem === "first" ? styles.selected : ""
            }`}
          >
            <p>Universidade de Fortaleza</p>
          </div>
          <div
            id="second"
            onClick={() => selectedDiv("second")}
            className={`${styles.work_location} ${
              selectedItem === "second" ? styles.selected : ""
            }`}
          >
            <p>Universidade de Fortaleza</p>
          </div>
          <div
            id="third"
            onClick={() => selectedDiv("third")}
            className={`${styles.work_location} ${
              selectedItem === "third" ? styles.selected : ""
            }`}
          >
            <p>Universidade de Fortaleza</p>
          </div>
        </div>
        {showResponsability === "first" ? (
          <div className={styles.work_card}>
            <div className={styles.work_title}>
              <p className={styles.work_role}>
                Web Developer <span>@ Unifor</span>
              </p>
              <p className={styles.work_date}>Apr 2022 - Aug 2022</p>
            </div>
            <div className={styles.work_responsabilities}>
              <ul className={styles.work_list}>
                <li>
                  • Desenvolvi interfaces web responsivas utilizando Bootstrap e
                  CSS, garantindo uma experiência de usuário mais eficiente em
                  diferentes dispositivos e tamanhos de tela, resultando em uma
                  redução de 30% na taxa de rejeição.
                </li>
                <li>
                  • Implementei melhorias de UI/UX resultando em uma experiência
                  de usuário mais eficiente, gerando grande satisfação entre os
                  estudantes da instituição.
                </li>
                <li>
                  • Desenvolvi códigos eficientes e bem estruturados utilizando
                  JavaScript, HTML, CSS, JQuery e Bootstrap, impulsionando
                  melhorias no ambiente de conteúdo virtual para estudantes.
                </li>
                <li>
                  • Apliquei práticas de Clean Code e conduzi revisões de código
                  para garantir qualidade e manutenibilidade, resultando em uma
                  redução de 20% nos incidentes de bugs.
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default WorkExperience;
