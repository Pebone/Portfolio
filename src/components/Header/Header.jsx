import { useState } from "react";
import Email from "../../assets/mail.svg";
import styles from "./Header.module.scss";
import Menu from "../../assets/menu.svg"

function Header() {
  const [selectedItem, setSelectedItem] = useState("");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedItem(sectionId);
  };

  return (
    <section className={styles.header}>
      <p className={styles.title} onClick={() => scrollToSection("home")}>
        Davi Pereira
      </p>
      <nav className={styles.navbar}>
        <ul className={styles.navbar_ul}>
          <li
            onClick={() => scrollToSection("home")}
            className={`${styles.navbar_ul_li} ${
              selectedItem === "home" ? styles.selected : ""
            }`}
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("skills")}
            className={`${styles.navbar_ul_li} ${
              selectedItem === "skills" ? styles.selected : ""
            }`}
          >
            Skills
          </li>
          <li
            onClick={() => scrollToSection("work_experience")}
            className={`${styles.navbar_ul_li} ${
              selectedItem === "work_experience" ? styles.selected : ""
            }`}
          >
            Work Experience
          </li>
          <li
            onClick={() => scrollToSection("projects")}
            className={`${styles.navbar_ul_li} ${
              selectedItem === "projects" ? styles.selected : ""
            }`}
          >
            Projects
          </li>
        </ul>
      </nav>
      <img src={Email} alt="Ícone de Email" className={styles.email_svg}></img>
      <img src={Menu} alt="Ícone de Menu" className={styles.menu_svg}></img>
    </section>
  );
}

export default Header;
