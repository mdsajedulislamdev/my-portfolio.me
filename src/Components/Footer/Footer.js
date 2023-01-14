import React from "react";
import style from "./Footer.module.css";
import { FaFacebookF, FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

import { useState } from "react";

const Footer = () => {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  setInterval(() => {
    setCurrentTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className={style.footerMainDiv}>
      <div className={style.FooterDiv}>
        <div className={style.topTitleDiv}>
          <div>
            <h1 className={style.title}>MY PORTFOLIO</h1>
          </div>
          <div className={style.time}>
            <h1>{currentTime}</h1>
          </div>
          <div className={style.iconDiv}>
            <span>
              <a href="https://www.linkedin.com/in/mdsajedulislam-bd/" rel="noreferrer" target="_blank">
                {<FaLinkedin className={style.icon} />}
              </a>
            </span>
            <span>
              <a href="https://github.com/mdsajedulislamdev?tab=repositories" rel="noreferrer" target="_blank">
                {<FaGithub className={style.icon} />}
              </a>
            </span>
            <span>
              <a href="https://stackoverflow.com/users/18383895/md-sajedul-islam?tab=profile" rel="noreferrer" target="_blank">
                {<FaStackOverflow className={style.icon} />}
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/mdshajedul.islam/" rel="noreferrer" target="_blank">
                {<FaFacebookF className={style.icon} />}
              </a>
            </span>
          </div>
        </div>
        <div className={style.TitleAndContents}>
          <div>
            <h4 className={style.Title}>My Services</h4>
            <div className={style.Links}>
              <a href="/donate">Health care for poor people</a>
              <a href="/donate">Super home for children</a>
              <a href="/donate">Land property for child</a>
            </div>
          </div>
          <div>
            <h4 className={style.Title}>Company Services</h4>
            <div className={style.Links}>
              <a href="/donate">Farmer facilities for children</a>
              <a href="/donate">Food care for poor people</a>
              <a href="/donate">Super home for children</a>
            </div>
          </div>
          <div>
            <h4 className={style.Title}>Company Policy</h4>
            <div className={style.Links}>
              <a href="/donate">Lands facilities for children</a>
              <a href="/donate">Food care for poor people</a>
              <a href="/donate">Super home for children</a>
            </div>
          </div>
        </div>
        <p className={style.copyright}>Copyright&copy; My Personal Portfolio</p>
      </div>
    </div>
  );
};

export default Footer;
