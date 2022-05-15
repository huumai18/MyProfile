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
        <div class="custom-shape-divider-bottom-1652590563">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <Nav />
      </div>
    </div>
  );
};
