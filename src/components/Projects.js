import React from "react";
import ProjectCard from "./ProjectCard";
import smartformsleavecalendar from "../images/smartformsleavecalendar.png";
import anilookupdevices from "../images/devices-removebg.png";
import gamewarpdevices from "../images/gamewarpdevices-removebg.png";
import printanywheredevices from "../images/printanywhere/printanywheredevices.png";
import handy from "../images/handy/handy-dashboard.png";
import turboEventsEvent from "../images/turboevents/turbo-events-event.png";
import omrexam from "../images/omrmanager/omrexam.png";

const Projects = ({ id, className }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        const isSectionVisible =
          scrollPosition >= sectionTop - windowHeight + sectionHeight / 8;

        if (isSectionVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <section id={id} className={className}>
      <div
        id="section3-container"
        className={`${isVisible ? "fade-in-bottom" : ""}`}
      >
        <ProjectCard
          projectName={"// Print-Anywhere"}
          image={printanywheredevices}
          tech={["Svelte", "Sveltekit", "Tailwind CSS", "SQL", "Node JS"]}
          navRoute="/projects/print-anywhere"
        />
        <ProjectCard
          projectName={"// OMR-Manager"}
          image={omrexam}
          tech={[
            "Svelte",
            "Sveltekit",
            "Tailwind CSS",
            "SQL",
            "Node JS",
            "OMRChecker",
          ]}
          navRoute="/projects/omr-manager"
        />
        <ProjectCard
          projectName={"// TurboEvents"}
          image={turboEventsEvent}
          tech={["Svelte", "Sveltekit", "Bootstrap", "SQL", "Node JS"]}
          navRoute="/projects/turboevents"
        />
        <ProjectCard
          projectName={"// Handy Invoicing System"}
          image={handy}
          tech={["Handlebars", "Bootstrap", "Node JS", "Express", "SQL"]}
          navRoute="/projects/handy"
        />
        <ProjectCard
          projectName="// AniLookup"
          image={anilookupdevices}
          tech={["React", "CSS3", "Bootstrap", "REST API", "Firebase"]}
          navRoute="/projects/anilookup"
        />
        <ProjectCard
          projectName="// SmartForms"
          image={smartformsleavecalendar}
          tech={[
            "Handlebars",
            "Bootstrap",
            "Node JS",
            "Express",
            "SQL",
            "JQuery",
          ]}
          navRoute="/projects/smartforms"
        />
        <ProjectCard
          projectName="// Game Warp"
          image={gamewarpdevices}
          tech={["React", "Redux", "Redux-Thunk", "Tailwind CSS", "REST API"]}
          navRoute="/projects/gamewarp"
        />
      </div>
    </section>
  );
};

export default Projects;
