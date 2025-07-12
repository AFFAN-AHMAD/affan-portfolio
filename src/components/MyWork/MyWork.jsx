import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="mywork-project">
              <img key={index} src={work.w_img} />
              <div className="mywork-project-buttons">
                <a href={work.w_github} target="blank">
                  {/* <button>Github</button> */}
                  Github
                </a>
                <a href={work.w_live} target="blank">
                  {/* <button>Live</button> */}
                  Live
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div> */}
    </div>
  );
};

export default MyWork;
