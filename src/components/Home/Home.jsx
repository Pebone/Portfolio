import "./Home.scss";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import Foto from "../../assets/foto.jpg";

function Home() {
  return (
    <section className="home">
      <div className="introduction">
        <div className="intro_welcome">
          <p>
            Hi, <span>my name is</span>
          </p>
        </div>

        <div className="intro_name">
          <p>
            <span>Davi</span> Pereira
          </p>
        </div>

        <div className="intro_vocation">
          I am&nbsp;<span>FrontEnd Developer</span>
        </div>

        <div className="intro_location">
          <p>
            Based on Fortaleza, Brazil. I turn your ideas into beautiful real
            product.
          </p>
        </div>
        <div className="intro_socials">
          <img src={Linkedin} alt="Ícone do Linkedin"></img>
          <img src={Github} alt="Ícone do Github"></img>
        </div>
      </div>
      <div className="profile_picture">
        <img className="picture" src={Foto} alt="Foto de Davi Pereira"></img>
      </div>
    </section>
  );
}

export default Home;
