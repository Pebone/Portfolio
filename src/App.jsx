import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import styles from "./App.module.scss"

function App() {
  return (
    <>
      <div className={styles.app}>
        <Header></Header>
        <Home></Home>
        <Skills></Skills>
      </div>
    </>
  );
}

export default App;
