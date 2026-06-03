import { Routes, Route, Outlet } from "react-router-dom";

import { LanguageProvider } from "./hooks/useLanguage";
import MainLayout from "./layouts/MainLayout";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ProjectDetails from "./layouts/ProjectDetails";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />
            </MainLayout>
          }>
          <Route index element={<HomePage />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}
