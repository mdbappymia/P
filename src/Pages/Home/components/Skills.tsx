import { Progress } from "flowbite-react";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

const Skills: FC = () => {
  const skills = useSelector((state: RootState) => state.portfolio.data.skills);
  console.log(skills);
  if (!skills?.length) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container mx-auto lg:py-20 md:py-10 py-5">
      <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold uppercase my-5 md:mb-20 mb-10">
        Skills
      </h1>
      <div className="md:grid grid-cols-2 gap-20">
        {skills.map((item: any, i: any) => (
          <Progress
            progress={item.parcentage}
            labelProgress={true}
            textLabel={item.name}
            labelText={true}
            size="lg"
            className="my-2"
            color="purple"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
