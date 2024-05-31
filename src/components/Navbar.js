import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const customStyles = {
    marginTop: "0.5%",
    marginLeft: "auto",
    gap: "5px",
  };

  const closeNavbar = () => {
    const navbarToggler = document.getElementById("navbarNavDropdown");
    if (navbarToggler) {
      navbarToggler.classList.remove("show");
    }
  };

  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }, 0);
    closeNavbar();
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div>
          <ul
            id="nav-brand"
            className="navbar-nav"
            style={{ marginTop: "14%", gap: "5px" }}
          >
            <li>
              <ScrollLink
                className="nav-link active"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-60}
                duration={100}
                delay={0}
                isDynamic={true}
                onClick={() => handleNavigation("section1")}
              >
                JEyken.Dev
              </ScrollLink>
            </li>
          </ul>
        </div>

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
              <ScrollLink
                className="nav-link active"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-60}
                duration={100}
                delay={0}
                isDynamic={true}
                onClick={() => handleNavigation("section1")}
              >
                &nbsp;&nbsp;// Home&nbsp;&nbsp;
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link active"
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-30}
                duration={100}
                delay={0}
                isDynamic={true}
                onClick={() => handleNavigation("section2")}
              >
                &nbsp;&nbsp;// About&nbsp;&nbsp;
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link active"
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                delay={0}
                isDynamic={true}
                onClick={() => handleNavigation("section3")}
              >
                &nbsp;&nbsp;// Projects&nbsp;&nbsp;
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link active"
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-80}
                duration={50}
                delay={0}
                isDynamic={true}
                onClick={() => handleNavigation("section4")}
              >
                &nbsp;&nbsp;// CV&nbsp;&nbsp;
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className="nav-link active"
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={50}
                duration={100}
                delay={0}
                isDynamic={true}
                onClick={() => handleNavigation("section5")}
              >
                &nbsp;&nbsp;// Contact&nbsp;&nbsp;
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
