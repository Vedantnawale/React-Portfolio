import React from "react";
import styles from "./MoreProject.module.css";
import {images} from "../../assets/img/index.js"

const MoreProject = () => {
  const projects = [
    {
      imgSrc: images.blog,
      title: "AppBlog",
      link: "https://blog-react-js-vedant-nawales-projects.vercel.app/",
    },
    {
      imgSrc: images.todoRedux,
      title: "Todo ReduxToolKit",
      link: "https://to-do-rdk-vedant-nawales-projects.vercel.app/",
    },
    {
      imgSrc: images.calci,
      title: "v-Calculator",
      link: "https://github.com/Vedantnawale/V_Calculator",
    },
    {
      imgSrc: images.todoLocal,
      title: "Todo Basic",
      link: "https://github.com/Vedantnawale/OIBGRIP_/tree/master",
    },
    {
      imgSrc: images.bgchanger,
      title: "Background Changer",
      link: "https://bg-changer-vedant-nawales-projects.vercel.app/",
    },
    {
      imgSrc: images.todoLocal,
      title: "Todo Localstorage",
      link: "https://todo-localstorage-vedant-nawales-projects.vercel.app/",
    },
    {
      imgSrc: images.esolution,
      title: "eSolution",
      link: "https://github.com/Vedantnawale/Dbatu_Library",
    },
    {
      imgSrc: images.passWordgen,
      title: "Password Generator",
      link: "https://password-generator-vedant-nawales-projects.vercel.app/",
    },
    {
      imgSrc: images.currency,
      title: "Currency Convertor",
      link: "https://currency-converter-vedant-nawales-projects.vercel.app/",
    },
    {
      imgSrc: images.counter,
      title: "Counter App",
      link: "https://counter-app-vedant-nawales-projects.vercel.app/",
    },
    {
      imgSrc: images.keyboard,
      title: "KeyBoard Check",
      link: "https://github.com/Vedantnawale/Javascript/blob/master/03_basic_projects_js/05_KeyboardCheck.html",
    },
    {
      imgSrc: images.unlimitedColor,
      title: "Unlimited Color",
      link: "https://github.com/Vedantnawale/Javascript/blob/master/03_basic_projects_js/04_UnlimitedColor.html",
    },
    {
      imgSrc: images.program,
      title: "Programming Competition",
      link: "https://github.com/Vedantnawale/ProgrammingComp",
    },
    {
      imgSrc: images.robo,
      title: "Robo Speaker",
      link: "https://github.com/Vedantnawale/RoboSpeaker",
    },
    {
      imgSrc: images.python,
      title: "Python Beginner Project",
      link: "https://github.com/Vedantnawale/Python_Beginner_Project",
    },
  ];

  return (
    <div className={styles.container} style={{ backgroundColor: "#0d161a" }}>
      {projects.map((project, index) => (
        <div className={styles.card} key={index}>
          <img src={project.imgSrc} className="card-img-top" alt={project.title} />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoreProject;
