import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Check if the user is at the top of the page
      const isTop = scrollPosition === 0;

      // Check if the user has scrolled down past half the window height
      const isScrolledWindow = scrollPosition >= windowHeight / 2;
      setIsVisible(isScrolledWindow && !isTop);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check in case the user starts at a scrolled position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-button ${isVisible ? "visible" : "invisible"}`}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

export default ScrollToTopButton;
