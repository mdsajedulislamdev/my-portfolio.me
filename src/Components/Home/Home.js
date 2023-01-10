import React from "react";
import style from "./Home.module.css";
import image from "../../../src/images/image.png";

const Home = () => {
  return (
    <>
      <div className={style.HomeMainDiv}>
        <div className={style.HomeChildDiv}>
          <div className={style.ContentDiv}>
            <h5 className={style.Hello}>Hello, My name is</h5>
            <h1 className={style.Name}>Md Sajedul Islam</h1>
            <h5 className={style.Designation}>I'm a frontend web developer & designer</h5>
            <h5 className={style.Expert}>Expert in HTML5, CSS3, JavaScript & React</h5>
            <>
              <ul className={style.LinkDiv}>
                <li>
                  <a className={style.LinkedinBg} href="https://www.linkedin.com/in/mdsajedulislam-bd/" rel="noreferrer" target="_blank">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a className={style.GithubBg} href="https://github.com/mdsajedulislamdev?tab=repositories" rel="noreferrer" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a className={style.StackBg} href="https://stackoverflow.com/users/18383895/md-sajedul-islam?tab=profile" rel="noreferrer" target="_blank">
                    Stack Overflow
                  </a>
                </li>
                <li>
                  <a className={style.ResumeBg} href="https://drive.google.com/file/d/12LL5faGJUo-T_Y8hwBCK_sJLGna_U4cv/view?usp=sharing" rel="noreferrer" target="_blank">
                    Download Resume
                  </a>
                </li>
              </ul>
            </>
          </div>
          <div>
            <img className={style.Image} src={image} alt="avatar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
