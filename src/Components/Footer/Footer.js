import React from "react";
import style from "./Footer.module.css";
import { FaFacebookF, FaAmazon, FaGithub, FaInstagram } from "react-icons/fa";

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
              <FaFacebookF className={style.icon} />
            </span>
            <span>
              <FaAmazon className={style.icon} />
            </span>
            <span>
              <FaGithub className={style.icon} />
            </span>
            <span>
              <FaInstagram className={style.icon} />
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
