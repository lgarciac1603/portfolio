import { LanguageProvider } from "./hooks/useLanguage";
import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </MainLayout>
    </LanguageProvider>
  );
}
