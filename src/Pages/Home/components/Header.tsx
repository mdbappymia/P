import { Button, Footer } from "flowbite-react";
import { FC } from "react";
import Typed from "react-typed";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsLinkedin,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";

const Header: FC = () => {
  const about = useSelector((state: RootState) => state.portfolio.data.about);
  console.log(about);
  if (!about?.name) {
    return <h1 className="my-20 text-7xl">Loading</h1>;
  } else
    return (
      <div className="container mx-auto md:py-20 py-5 md:px-0 px-2">
        <div className="md:grid grid-cols-2">
          <div className="w-full">
            <h1 className="lg:text-6xl md:text-5xl text-4xl fw-bold text-left md:mt-20">
              Hi, <br />I am {about.name}
            </h1>
            <div className="my-5">
              <Typed
                className="text-2xl"
                strings={about.slogan}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </div>
            <p className="font-light mt-3">{about.objective}</p>

            <div className="flex gap-3 my-5">
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon
                  className="h-icon"
                  href={about.social_link.facebook}
                  icon={BsFacebook}
                />
                <Footer.Icon
                  className="h-icon"
                  target="_blank"
                  href={about.social_link.linkedin}
                  icon={BsLinkedin}
                />
                <Footer.Icon
                  className="h-icon"
                  target="_blank"
                  href={about.social_link.twitter}
                  icon={BsTwitter}
                />
                <Footer.Icon
                  className="h-icon"
                  target="_blank"
                  href={about.social_link.github}
                  icon={BsGithub}
                />
                <Footer.Icon
                  className="h-icon"
                  target="_blank"
                  href={about.social_link.dribbble}
                  icon={BsDribbble}
                />
              </div>
            </div>
            <div className="mt-10">
              <Button outline={true} gradientDuoTone="purpleToPink">
                <a href={about.resume_link} target="_blank" rel="noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="md:flex hidden justify-center items-center">
            <img className="w-84" src={about.image} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Header;
