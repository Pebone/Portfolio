import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import styles from "./App.module.scss";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header></Header>
        <Home></Home>
        <Skills></Skills>
        <WorkExperience></WorkExperience>
        <Projects></Projects>
      </div>
    </>
  );
}

export default App;
