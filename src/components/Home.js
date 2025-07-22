import React from "react";
import sql from "../images/sql.svg";
import svelte from "../images/svelte.svg";
import jeyken from "../images/jeyken.jpg";
import { Link } from "react-scroll";

const Home = ({ id, className }) => {
  return (
    <section id={id} className={className} style={{ position: "relative" }}>
      <div className="row-class">
        <div id="about-div" className="div-defaults">
          <div id="image-div-sm" style={{ textAlign: "center" }}>
            <img src={jeyken} alt="artwork of myself" width={200} />
          </div>
          <h1>Full-Stack Web Developer</h1>
          <p style={{ fontSize: "1.2rem" }}>
            <a
              href="https://www.linkedin.com/in/jarome-eyken-1a8a2318b/"
              rel="noreferrer"
              target="_blank"
              style={{ marginRight: "5px" }}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/JarEXE"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </p>
          <p>
            Hi, I'm Jarome Eyken, a self-taught full-stack developer currently
            based in Paramaribo, Suriname. 🇸🇷
          </p>
        </div>

        <div id="icon-div">
          <div
            id="image-div-lg"
            style={{ marginLeft: "5%", marginBottom: "5%" }}
          >
            <img src={jeyken} alt="artwork of myself" width={200} />
          </div>

          <div className="tech-icons mb-2">
            <p>
              <i
                className="fa-brands fa-html5 icon-html"
                style={{ color: "#E96228" }}
              ></i>
            </p>
            <p>
              <i
                className="fa-brands fa-js icon-js"
                style={{ color: "#E8D44D" }}
              ></i>
            </p>
            <p>
              <i
                className="fa-brands fa-css3-alt icon-css"
                style={{ color: "#2194F0" }}
              ></i>
            </p>
            <p>
              <i
                className="fa-brands fa-react icon-react"
                style={{ color: "#5ED3F3" }}
              ></i>
            </p>
          </div>

          <div className="tech-icons">
            <p>
              <img src={svelte} alt="svelte-logo" className="icon-svelte" />
            </p>
            <p>
              <img src={sql} alt="sql-logo" className="icon-sql" />
            </p>
            <p>
              <i
                className="fa-brands fa-node icon-node"
                style={{ color: "#88C249" }}
              ></i>
            </p>
            <p>
              <i
                className="fa-brands fa-wordpress icon-wp"
                style={{ color: "#23282d" }}
              ></i>
            </p>
          </div>
        </div>
      </div>
      <Link
        style={{ position: "absolute", bottom: "0" }}
        activeClass="active"
        to="section2"
        spy={true}
        smooth={true}
        offset={0}
        duration={100}
        delay={0}
        isDynamic={true}
      >
        <div id="mouse-scroll">
          <div className="mouse">
            <div className="mouse-in"></div>
          </div>
          <div>
            <span className="down-arrow-1"></span>
            <span className="down-arrow-2"></span>
            <span className="down-arrow-3"></span>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Home;
