import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.NavDiv}>
      <ul>
        <li className={style.Portfolio}>
          <a className={style.PortfolioText} href="#home">
            Portfo<span>lio</span>
          </a>
        </li>
        <li>
          <a className={style.Links} href="#home">
            Home
          </a>
        </li>
        <li>
          <a className={style.Links} href="#project">
            Project
          </a>
        </li>
        <li>
          <a className={style.Links} href="#about">
            About
          </a>
        </li>
        <li>
          <a className={style.Links} href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a className={style.Links} href="https://drive.google.com/file/d/12LL5faGJUo-T_Y8hwBCK_sJLGna_U4cv/view?usp=sharing" rel="noreferrer" target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
