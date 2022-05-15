import React from "react";
import { Link } from "react-scroll";
import { DarkTheme } from "./Themes";
import styled from "styled-components";

const Line = styled.span`
  width: 3px;
  height: 20em;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.body : DarkTheme.body};
`;
export const Nav = (props) => {
  return (
    <>
      <div className="link-box">
        <Line color={props.theme} />
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

        <Line color={props.theme} />
      </div>
    </>
  );
};
