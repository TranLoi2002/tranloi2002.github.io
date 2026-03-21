import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Languages } from "./components/Languages";
import { Achievements } from "./components/Achievements";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Languages />
      <Achievements />
    </AppProvider>
  );
}