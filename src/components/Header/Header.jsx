import Email from "../../assets/mail.svg";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      <p className="title">Davi Pereira</p>
      <nav className="navbar">
        <ul className="navbar_ul">
          <li className="navbar_ul_li">
            <a>Home</a>
          </li>
          <li className="navbar_ul_li">
            <a>Projects</a>
          </li>
          <li className="navbar_ul_li">
            <a>Skills</a>
          </li>
        </ul>
      </nav>
      <img src={Email} alt="Ícone de Email" className="email_svg"></img>
    </section>
  );
}

export default Header;
