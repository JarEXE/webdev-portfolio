import React from "react";
import coding from "../images/coding.gif";
import terminal from "../images/coding-terminal.gif";
import gaming from "../images/playstation.gif";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [terminal, coding, gaming];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="slider" className="fade-in">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`GIF ${index + 1}`}
          className={index === currentImage ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
