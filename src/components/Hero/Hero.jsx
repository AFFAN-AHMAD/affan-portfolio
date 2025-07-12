import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div className="hero" id="home">
      <img
        src={profile_img}
        alt=""
        style={{ width: "300px", borderRadius: "100%" }}
      />
      <h1>
        <span>Hi, I'm Affan Ahmad</span>
      </h1>
      <p>
        I am a full stack web developer from Delhi, India with 2.5 years of
        experience.
      </p>
      <div className="hero-action">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <div className="hero-connect">Connect with me</div>
        </AnchorLink>
        <a
          href="https://drive.google.com/file/d/1PHRBsXj1mdUg0OW7NIJbBUfpQlmpVaT5/view?usp=sharing"
          target="blank"
          className="hero-resume"
        >
          <div>My Resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
