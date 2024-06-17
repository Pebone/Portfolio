import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header></Header>
        <Home></Home>
        <Skills></Skills>
        <WorkExperience></WorkExperience>
      </div>
    </>
  );
}

export default App;
