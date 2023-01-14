import React from "react";
import style from "./About.module.css";
import image from "../../../src/images/image.png";

const About = () => {
  return (
    <>
      <div className={style.AboutMainDiv} id="about">
        <h1>About Me</h1>
        <div className={style.AboutContentDiv}>
          <div className={style.AboutImageDiv}>
            <img className={style.Image} src={image} alt="Avatar" />
          </div>
          <article>
            <h2>Developer & Designer</h2>
            <p>
              Hello sir! my name is Md Sajedul Islam. I'm from Bangladesh. I have completed my graduation BSc in CSE. I'm a frontend web developer & designer with HTML5, CSS3, JavaScript 40%, React.JS
              60%, also, I know 50% MERN stack web development. I can to develop various web site. Dear sir, I know coding, I understand coding, that's why I think, I'm perfect for your company. if
              you would like to test my skill, you may call me on the viva board for test my skill. if you once recruit me I will give you a pixel-perfect result. Thank you very much for reading me.
            </p>
          </article>
        </div>
      </div>
    </>
  );
};

export default About;
