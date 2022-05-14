import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Nav } from "../components";

export const Home = () => {
  return (
    <div className="container" id="home">
      <div className="title-box">
        <div className="title">
          <Typewriter
            loop={1}
            cursor
            typeSpeed={80}
            cursorStyle="_"
            words={["I am Huu Mai "]}
          ></Typewriter>
          <div className="typeWrite">
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
              words={[
                "Full-stack Developer",
                "Java Programmer",
                "Database Oracle Admin",
                "Willing To New Learning",
              ]}
            />
          </div>
          <div className="line"></div>
          <div className="btn-box">
            <button className="btn-submit" type="submit">
              Contact Me
            </button>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};
