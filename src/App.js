import "./App.css";
import {
  NavigationBar,
  Banner,
  Skills,
  Projects,
  Contact,
  SparkleEffect,
} from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <SparkleEffect />
      <NavigationBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
