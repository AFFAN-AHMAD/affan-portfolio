import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        {/* <div className="about-left">
          <img
            src={profile_img}
            alt=""
            style={{ width: "300px", borderRadius: "100%" }}
          />
        </div> */}
        <div className="sbout-right">
          <div className="about-para">
            <p>
              Dynamic full stack web developer with 2.5 years of experience
              delivering scalable solutions. Skilled in front-end and back-end
              development, problem-solving, and effective communication. Adept
              at collaborating with cross-functional teams to create
              high-quality, user-focused web applications.{" "}
            </p>
            {/* <p>I am passionate about </p> */}
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>Node JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>MySql</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Express</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2.5+</h1>
          <p>Years of experience</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default About;
