import React, { useState } from "react";
import { anime } from "react-anime";

import projectIcon from "../../assets/icons/project.png";
import logo from "../../assets/images/logo.png";
import img1 from "../../assets/images/image_01.jpg";
import img2 from "../../assets/images/image_02.jpg";

import "./Projects.css";

function Projects() {
    const [projectImg, setProjectImg] = useState(img1);

    anime({
        targets: "article.project img",
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1500,
    });

    const handleMouseOver = (e) => {
        let id = e.target.closest("a")?.id;

        if (id) {
            switch (id) {
                case "1":
                    setProjectImg(img1);
                    break;
                case "2":
                    setProjectImg(img2);
                    break;
                default:
                    break;
            }
        }
    };
    return (
        <section className="container container-small projects">
            <div className="future">
                <h3>Future</h3>
                <p>
                    We are slowly starting a new type of production in Asia, doing more than just
                    designs, bringing them to life in a similar way they have been brought to life
                    by talent in Europe. We only work project based, and every inflatable sculpture
                    is one of a kind.
                </p>
            </div>

            <div className="past">
                <h3>Past Involvement</h3>
                <p>
                    In past experience we were part as individual freelance designers on projects of
                    the following clients and many more. Here are some of the highlights.
                </p>
            </div>

            <div className="projects-list" onMouseOver={handleMouseOver}>
                <a href="#" id="1">
                    <img src={projectIcon} alt="Project Number 1" />
                </a>
                <a href="#" id="2">
                    <img src={projectIcon} alt="Project Number 2" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 3" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 4" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 5" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 6" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 7" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 8" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 9" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 10" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 11" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 12" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 13" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 14" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 15" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 16" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 17" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 18" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 19" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 20" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 21" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 22" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 23" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 24" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 25" />
                </a>
                <a href="#">
                    <img src={projectIcon} alt="Project Number 26" />
                </a>
            </div>

            <figure className="logo">
                <figcaption>(Freelance Career)</figcaption>
                <br />
                <img src={logo} alt="Logo" />
            </figure>

            <article className="project">
                <img src={projectImg} alt="" />
            </article>
        </section>
    );
}

export default Projects;
