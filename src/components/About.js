import React from "react";
import ImageSlider from "./ImageSlider";

const About = ({ id, className }) => {
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
          scrollPosition >= sectionTop - windowHeight + sectionHeight / 2;

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
        id="section2-container"
        className={`${isVisible ? "fade-in-bottom" : ""}`}
      >
        <div className="section2-slider">
          {/* eslint-disable-next-line */}
          <h2>// Who Am I?</h2>
          <div className="gif-container">
            <ImageSlider />
          </div>
        </div>
        <br></br>
        <div className="section2-about">
          <p style={{ marginRight: "5%" }}>
            With a passion for simple, minimalist design, I specialize in
            creating clean, user-friendly, and responsive websites and web
            applications.
            <br></br>
            <br></br>I currently enjoy using Sveltekit as my main development
            framework, but I have experience with other tech stacks and
            libraries. I am a fast learner who is capable of easily adapting to
            new environments, languages, and I'm always up for a good challenge.
            <br></br>
            <br></br>
            When not busy typing code, I am most likely partaking in some sort
            of gym activity, PC building, game dev practice, or keeping up with
            latest tech trends or tech news.
            <br></br>
            <br></br>
            Thanks for checking out my portfolio!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
