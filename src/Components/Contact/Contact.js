import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={style.ContactMainDiv} id="contact">
        <h2 className={style.ContactText}>Contact Me</h2>
        <a className={style.ContactEmail} href="mailto:sajedulislam.cse@gmail.com">
          Email: sajedulislam.cse@gmail.com
        </a>
        <div className={style.ContactNumberDiv}>
          <h2>MObile: +880 17373 22635</h2>
          <h2>MObile: +880 1954 145647</h2>
        </div>
      </div>
    </>
  );
};

export default Contact;
