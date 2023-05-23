import { Button, Footer } from "flowbite-react";
import { FC } from "react";
import Typed from "react-typed";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

const Header: FC = () => {
  return (
    <div className="container mx-auto md:py-20 py-5 md:px-0 px-2">
      <div className="md:grid grid-cols-2">
        <div className="w-full">
          <h1 className="lg:text-6xl md:text-5xl text-4xl fw-bold text-left md:mt-20">
            Hi, <br />I dolor sit amet
          </h1>
          <div className="my-5">
            <Typed
              className="text-2xl"
              strings={[
                "I'm a Full Stack Developer",
                "I Love Software Development",
                "I Love All My Subscribers",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </div>
          <p className="font-light mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            perferendis nisi obcaecati laboriosam, quam possimus illum soluta
            consequatur deleniti veniam delectus! Inventore doloremque odit
            ipsum, delectus repellat nobis corporis hic.
          </p>

          <div className="flex gap-3 my-5">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon className="h-icon" href="#" icon={BsFacebook} />
              <Footer.Icon className="h-icon" href="#" icon={BsInstagram} />
              <Footer.Icon className="h-icon" href="#" icon={BsTwitter} />
              <Footer.Icon className="h-icon" href="#" icon={BsGithub} />
              <Footer.Icon className="h-icon" href="#" icon={BsDribbble} />
            </div>
          </div>
          <div className="mt-10">
            <Button outline={true} gradientDuoTone="purpleToPink">
              <a
                href="https://drive.google.com/file/d/1AhGHpU1kKeSJ23cLFv__SccXPJbyr-aI/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>
        <div className="md:flex hidden justify-center items-center">
          <img
            className="w-84"
            src="https://riskoderma.com/wp-content/uploads/2022/01/dummy-man-png-2-1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
