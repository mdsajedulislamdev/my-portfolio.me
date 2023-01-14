import React from "react";
import style from "./Projects.module.css";
import donate from "../../../src/images/donate.png";
import todo from "../../../src/images/todo.png";
import student from "../../../src/images/student.png";

const Projects = () => {
  return (
    <>
      <div className={style.ProjectsMainDiv} id="project">
        <h1>My Projects</h1>
        <div className={style.ImageMainDiv}>
          <div className={style.ImageDiv}>
            <div className={style.OverlayOne}>
              <div className={style.LinkDiv}>
                <a className={style.Link} href="https://better-tomorrow-org.netlify.app/" rel="noreferrer" target="_blank">
                  Live Site
                </a>
                <a className={style.Link} href="https://github.com/mdsajedulislamdev/better-tomorrow" rel="noreferrer" target="_blank">
                  GitHub Code
                </a>
              </div>
            </div>
            <img src={donate} alt="Donate" />
          </div>
          <div className={style.ImageDiv}>
            <div className={style.OverlayTwo}>
              <div className={style.LinkDiv}>
                <a className={style.Link} href="https://new-todos-app.netlify.app/" rel="noreferrer" target="_blank">
                  Live Site
                </a>
                <a className={style.Link} href="https://github.com/mdsajedulislamdev/new-todo" rel="noreferrer" target="_blank">
                  GitHub Code
                </a>
              </div>
            </div>
            <img src={todo} alt="todo" />
          </div>
          <div className={style.ImageDiv}>
            <div className={style.OverlayThree}>
              <div className={style.LinkDiv}>
                <a className={style.Link} href="https://crud-operation-client-code.vercel.app/" rel="noreferrer" target="_blank">
                  Live Site
                </a>
                <a className={style.Link} href="https://github.com/mdsajedulislamdev/CRUD-Operation-ClientCode" rel="noreferrer" target="_blank">
                  Client
                </a>
                <a className={style.Link} href="https://github.com/mdsajedulislamdev/CRUD-Operation-ServerCode" rel="noreferrer" target="_blank">
                  Server
                </a>
              </div>
            </div>
            <img src={student} alt="Student" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
