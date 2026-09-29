import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import FolderDemo from "@/components/demo/3d-folder-demo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
  return (
    <>
      <Helmet>
        <title>Moshina | Full-Stack Developer Portfolio</title>
        <meta name="description" content="Moshina is a passionate full-stack developer crafting beautiful digital experiences with clean code and creative solutions. View portfolio and get in touch." />
        <meta name="keywords" content="developer, portfolio, full-stack, web development, React, TypeScript" />
        <link rel="canonical" href="https://moshina.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Resume />
          <Projects />
          <FolderDemo />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
