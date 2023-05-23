import { FC } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

const Home: FC = () => {
  return (
    <div>
      <div id="home">
        <Header />
      </div>
      <div id="about" className="bg-slate-100">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="services" className="bg-slate-100">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="reviews" className="bg-slate-100">
        <Reviews />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      <div id="contact" className="bg-slate-100">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
