import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.NavDiv}>
      <ul>
        <li className={style.Portfolio}>
          <Link className={style.PortfolioText} to="/">
            Portfo<span>lio</span>
          </Link>
        </li>
        <li>
          <Link className={style.Links} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={style.Links} to="/#">
            Project
          </Link>
        </li>
        <li>
          <Link className={style.Links} to="/">
            About
          </Link>
        </li>
        <li>
          <Link className={style.Links} to="/">
            Contact
          </Link>
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
