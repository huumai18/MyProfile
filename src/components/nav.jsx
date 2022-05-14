import React from "react";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
export const Nav = () => {
  return (
    <>
      <div className="line-icons"></div>
      <div className="link-box">
        <Link
          className="link"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          Home
        </Link>
        <Link
          className="link"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          About
        </Link>
        <Link
          className="link"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          Skills
        </Link>
        <Link
          className="link"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          Contact Me
        </Link>
      </div>
    </>
  );
};
