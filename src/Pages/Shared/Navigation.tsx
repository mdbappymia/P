import { FC } from "react";
import { Navbar, Button } from "flowbite-react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const NavBar: FC = () => {
  return (
    <div>
      <Navbar fluid={false} rounded={true} className="site__nav">
        <NavLink to="/" className="flex">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </NavLink>
        <div className="flex md:order-2">
          <Button>View Projects</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <HashLink to="/#home">Home</HashLink>
          <HashLink to="/#about">About</HashLink>
          <HashLink to="/#skills">Skills</HashLink>
          <HashLink to="/#services">Services</HashLink>
          <HashLink to="/#projects">Projects</HashLink>
          <HashLink to="/#reviews">Reviews</HashLink>
          <HashLink to="/#blogs">Blogs</HashLink>
          <HashLink to="/#contact">Contact</HashLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
