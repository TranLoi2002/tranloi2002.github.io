import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { AppProvider } from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </AppProvider>
  );
}