import logo from "./logo.svg";
import "./App.css";
import { NavigationBar, Banner, Skills, Projects, Contact } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
