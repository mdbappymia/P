/* eslint-disable react/style-prop-object */
import { Tabs } from "flowbite-react";
import { FC } from "react";
import { FaAward, FaGraduationCap, FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

const About: FC = () => {
  const { about, education } = useSelector(
    (state: RootState) => state.portfolio.data
  );
  console.log(education);
  if (!about?.name || education?.id) {
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur, quaerat voluptatum. Aut ipsam similique molestiae.
                Fugit illo consectetur nesciunt sapiente.
              </Tabs.Item>
              <Tabs.Item active={true} title="Experience" icon={FaAward}>
                <ul>
                  <li>
                    <h1>Software Engineer</h1>
                    <h3>
                      Company name:{" "}
                      <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Architecto, recusandae?
                      </span>
                    </h3>
                  </li>
                </ul>
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
