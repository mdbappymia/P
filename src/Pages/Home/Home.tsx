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
      <Header />
      <div className="bg-slate-100">
        <About />
      </div>
      <Skills />
      <div className="bg-slate-100">
        <Services />
      </div>
      <Projects />
      <div className="bg-slate-100">
        <Reviews />
      </div>
      <Blogs />
      <div className="bg-slate-100">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
