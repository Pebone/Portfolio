import styles from "./Home.module.scss";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import Foto from "../../assets/foto.jpg";

function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.introduction}>
        <div className={styles.intro_welcome}>
          <p>
            Hi, <span>my name is</span>
          </p>
        </div>

        <div className={styles.intro_name}>
          <p>
            <span>Davi</span> Pereira
          </p>
        </div>

        <div className={styles.intro_vocation}>
          I am&nbsp;<span>FrontEnd Developer</span>
        </div>

        <div className={styles.intro_location}>
          <p>
            Based on Fortaleza, Brazil. I turn your ideas into beautiful real
            product.
          </p>
        </div>
        <div className={styles.intro_socials}>
          <img src={Linkedin} alt="Ícone do Linkedin"></img>
          <img src={Github} alt="Ícone do Github"></img>
        </div>
      </div>
      <div className={styles.profile_picture}>
        <img
          className={styles.picture}
          src={Foto}
          alt="Foto de Davi Pereira"
        ></img>
      </div>
    </section>
  );
}

export default Home;
