import React, { useEffect } from "react";
import classes from "./Creators.css";
import img from "../../Assets/image.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import linkedin from "../../Assets/linkedin.svg";
import github from "../../Assets/github.png";

const creators = [
  {
    name: "Spidey",
    position: "Developer",
    linkedin: "",
    img: img,
  },
  {
    name: "Spidey",
    position: "Developer",
    linkedin: "",
    img: img,
  },
  {
    name: "Spidey",
    position: "Developer",
    linkedin: "",
    img: img,
  },
  {
    name: "Spidey",
    position: "Developer",
    linkedin: "",
    img: img,
  },
  {
    name: "Spidey",
    position: "Developer",
    linkedin: "",
    img: img,
  },
  {
    name: "Spidey",
    position: "Developer",
    linkedin: "",
    img: img,
  },
  {
    name: "Spidey",
    position: "Developer",
    linkedin: "",
    img: img,
  },
];

const Creators = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className={classes.creator_section}>
        <div className="creators_header">
          <div className="creators_headline_div">
            <h1 data-aos={"zoom-in-up"} className="creators_thought">
              {" "}
              DEVELOPERS OF THIS SITE!
            </h1>
          </div>
          <div className="creators_heading">
            <div
              data-aos={"fade-right"}
              data-aos-delay={"700"}
              className="creators_line_1"
            ></div>
            <div>
              <h1
                data-aos={"zoom-out"}
                data-aos-delay={"1200"}
                className="creators_title"
              >
                CREATORS
              </h1>
            </div>
            <div
              data-aos={"fade-left"}
              data-aos-delay={"700"}
              className="creators_line_2"
            ></div>
          </div>
        </div>
        <div className="creator_container">
          {creators.map((creator, index) => {
            return (
              <div className="creator_box">
                <div className="creator_top_bar"></div>
                <div className="creator_content">
                  <img src={creator.img} alt="" />
                  <strong>{creator.name}</strong>
                  <p>{creator.position}</p>
                </div>
                <div className="creator_btn">
                  <a>
                    <img src={linkedin} alt="" />
                  </a>
                  <a>
                    <img src={github} alt="" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Creators;
