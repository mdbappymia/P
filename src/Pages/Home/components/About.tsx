/* eslint-disable react/style-prop-object */
import { Accordion, Tabs } from "flowbite-react";
import { FC } from "react";
import { FaAward, FaGraduationCap, FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

const About: FC = () => {
  const { about, education, experience } = useSelector(
    (state: RootState) => state.portfolio.data
  );
  console.log(experience);
  if (!about?.name || education?.id || experience?.id) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container mx-auto lg:py-20 md:py-10 py-5">
      <h1 className="lg:text-6xl md:text-5xl text-4xl text-center font-bold uppercase my-5 md:mb-20 mb-10">
        About Me
      </h1>
      <div className="md:grid grid-cols-2 block gap-20">
        <div className="lg:w-11/12">
          <h1 className="font-bold lg:text-3xl text-2xl mb-5 border-b pb-2">
            Who I am?
          </h1>
          <p>{about.about_me}</p>
        </div>
        <div>
          <h1 className="font-bold lg:text-3xl text-2xl mb-5 border-b pb-2">
            My Background
          </h1>
          <div>
            <Tabs.Group aria-label="Tabs with icons" style="underline">
              <Tabs.Item title="Education" icon={FaGraduationCap}>
                <Accordion>
                  {education.map((edu: any, i: any) => (
                    <Accordion.Panel key={i}>
                      <Accordion.Title>
                        <span className="capitalize">{edu.subject}</span>
                      </Accordion.Title>
                      <Accordion.Content>
                        <h3 className="font-bold my-3">
                          Subject:{" "}
                          <span className=" font-normal capitalize">
                            {edu.subject}
                          </span>
                        </h3>
                        <h3 className="my-1">
                          <span className="font-bold">Institute: </span>
                          {edu.institute_name}
                        </h3>
                        <h3 className="my-1">
                          <span className="font-bold">Experience:</span>{" "}
                          {edu.experience}
                        </h3>
                        <h3 className="my-1">
                          <span className="font-bold">Start:</span>{" "}
                          {edu.starting_date}
                        </h3>
                        <h3 className="my-1">
                          <span className="font-bold">End:</span> {edu.end_date}
                        </h3>
                        <p className="my-1">
                          <span className="font-bold">About Institure:</span>{" "}
                          {edu.about_institute}
                        </p>
                      </Accordion.Content>
                    </Accordion.Panel>
                  ))}
                </Accordion>
              </Tabs.Item>
              <Tabs.Item title="Experience" icon={FaAward}>
                <Accordion>
                  {experience.map((exp: any, i: any) => (
                    <Accordion.Panel key={i}>
                      <Accordion.Title>
                        <span className="capitalize font-bold">
                          {exp.designation}
                        </span>
                      </Accordion.Title>
                      <Accordion.Content>
                        <h1 className="font-bold capitalize text-2xl">
                          {exp.designation}
                        </h1>
                        <h3>
                          <span className="font-bold">Company name:</span>{" "}
                          {exp.company_name}
                        </h3>
                        <h3>
                          <span className="font-bold">Start:</span>{" "}
                          {exp.starting_date}
                        </h3>
                        <h3>
                          <span className="font-bold">End:</span> {exp.end_date}
                        </h3>
                        <div>
                          <h3 className="font-bold">Working technologis:</h3>
                          {exp.working_technologis.map((tech: any, i: any) => (
                            <span>{tech}, </span>
                          ))}
                        </div>
                        <h3>
                          <span className="font-bold">About work:</span>{" "}
                          {exp.about_work}
                        </h3>
                        <h3>
                          <span className="font-bold">About Company:</span>{" "}
                          {exp.about_company}
                        </h3>
                      </Accordion.Content>
                    </Accordion.Panel>
                  ))}
                </Accordion>
              </Tabs.Item>
              <Tabs.Item title="Demo1" icon={FaHome}>
                Settings content
              </Tabs.Item>
              <Tabs.Item title="Demo2" icon={FaGraduationCap}>
                Contacts content
              </Tabs.Item>
            </Tabs.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
