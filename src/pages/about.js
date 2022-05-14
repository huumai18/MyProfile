import React from "react";
import { Typewriter } from "react-simple-typewriter";
export const About = () => {
  return (
    <div className="container" id="about">
      <div className="about">
        <div className="about-title">
          <h1>
            About Me
            <Typewriter
              cursor
              typeSpeed={0}
              cursorStyle="_"
              words={[""]}
            ></Typewriter>
          </h1>
        </div>
        <div className="about-text">
          <p>
            As a highly motivated and dedicated student with strong
            communication and interpersonal skills, I would like to apply for
            the position of Software Developer. <br></br> I enjoy working with
            others and believe that my strong communication skills will ensure
            that I can meet the expectations of this role. I understand that you
            will receive many applications for this position, but I would very
            much appreciate the opportunity to demonstrate my capabilities to
            you in person. <br /> I believe that I have a lot to offer your
            organization. I am keen to develop my professional skills and look
            forward to discussing my application with you at an interview
            <Typewriter
              cursor
              typeSpeed={0}
              cursorStyle="_"
              words={["."]}
            ></Typewriter>
          </p>
        </div>
      </div>
    </div>
  );
};
