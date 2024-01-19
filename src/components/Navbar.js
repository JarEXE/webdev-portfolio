import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const customStyles = {
    marginTop: "3%",
    marginLeft: "auto",
    gap: "5px",
  };
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#/">
          J. Eyken WebDev
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav" style={customStyles}>
            <li className="nav-item">
              <Link
                className="nav-link active"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
                delay={0}
                isDynamic={true}
              >
                &nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
                delay={0}
                isDynamic={true}
              >
                &nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
                delay={0}
                isDynamic={true}
              >
                &nbsp;&nbsp;&nbsp;Projects&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
                delay={0}
                isDynamic={true}
              >
                &nbsp;&nbsp;&nbsp;Resume&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
                delay={0}
                isDynamic={true}
              >
                &nbsp;&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
