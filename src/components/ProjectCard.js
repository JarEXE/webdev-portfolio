import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ projectName, image, tech, navRoute }) => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid-item">
      <div style={{ borderBottom: "1px solid black", marginBottom: "5%" }}>
        <h3 htmlFor="project-container">{projectName}</h3>
      </div>

      <div id="project-container">
        <img
          src={image}
          alt={`${projectName.substring(2)}`}
          style={{ width: "100%" }}
          onClick={() => navigate(navRoute)}
        />
        <div className="overlay" onClick={() => navigate(navRoute)}>
          <p className="overlay-text">Project Details &rarr;</p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "5%",
          display: "grid",
          gridTemplateColumns: `${width > 800 ? "1fr 1fr 1fr" : "1fr 1fr"}`,
          gap: "10px",
        }}
      >
        {tech?.map((item) => (
          <p
            key={item}
            style={{
              backgroundColor: "#ddd",
              borderRadius: "15px",
              marginBottom: "0",
            }}
          >
            &nbsp;&nbsp;{item}&nbsp;&nbsp;
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
