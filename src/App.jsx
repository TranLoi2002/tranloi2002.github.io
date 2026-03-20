import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Header />
      <Hero />
      <About />
      <Projects />
    </AppProvider>
  );
}