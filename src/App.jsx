import styles from "./App.module.css";
import {Navbar} from "./components/Navbar/Navbar";
import {Head} from "./components/Head/Head";
import {About} from "./components/About/About"
import {Experience} from "./components/Experience/Experience"
import {Projects} from "./components/Projects/Projects"
import {Foot} from "./components/Foot/Foot";
import {slider} from "./components/Slider/Slider";

function App() {

  return (
    
    <div className={styles.App}>
      <Navbar/>
      <Head/>
      <About/>
      <Experience/>
      <Projects/>
      <Slider/>
      <Foot/>
      </div>

 );
};

export default App;
