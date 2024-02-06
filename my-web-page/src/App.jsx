import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { DataProvider } from "./context/DataContext";
import { LanguageProvider } from "./context/DataContext";
function App() {
  return (
    <LanguageProvider>
      <DataProvider>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </DataProvider>
    </LanguageProvider>
  );
}

export default App;
