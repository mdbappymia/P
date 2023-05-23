import { FC } from "react";
import projects from "../../../assets/data/projects.json";
import ProjectCard from "../../../components/ProjectCard";
import { v4 as uuidv4 } from "uuid";
import ProjectCardTest from "../../../components/ProjectCardForCarousel";

const Projects: FC = () => {
  const cards: any = [];
  projects.forEach((item) => {
    cards.push({
      key: uuidv4(),
      content: <ProjectCard item={item} />,
    });
  });
  return (
    <div>
      <div className="container mx-auto lg:py-20 md:py-10 py-5">
        <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold uppercase my-5 md:mb-20 mb-10">
          Projects
        </h1>
        <div className="App">
          <ProjectCardTest
            cardsArr={cards}
            height="500px"
            width="90%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
