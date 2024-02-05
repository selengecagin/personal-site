import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <DataProvider>
      <Hero />
      <Skills />
      <Projects />
      <Profile />
      <Contact />
    </DataProvider>
  );
}

export default App;
