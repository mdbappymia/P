import { Button } from "flowbite-react";
import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="container mx-auto md:py-20 py-5 md:px-0 px-2">
      <div className="md:grid grid-cols-2">
        <div className="w-full">
          <h1 className="lg:text-6xl md:text-5xl text-4xl fw-bold text-left md:mt-20">
            Lorem ipsum, <br />
            dolor sit amet
            <br /> consectetur
          </h1>
          <p className="font-light mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            perferendis nisi obcaecati laboriosam, quam possimus illum soluta
            consequatur deleniti veniam delectus! Inventore doloremque odit
            ipsum, delectus repellat nobis corporis hic.
          </p>
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
