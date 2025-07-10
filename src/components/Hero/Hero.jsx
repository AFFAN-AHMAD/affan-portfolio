import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>Hi, I'm Affan Ahmad</span>
      </h1>
      <p>
        I am a full stack web developer from Delhi, India with 2.5 years of
        experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
