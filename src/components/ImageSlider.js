import React from "react";
import nier from "../images/nier.gif";
import breadandfred from "../images/breadandfred.gif";
import coding from "../images/coding.gif";
import gym from "../images/gym.gif";

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = React.useState(0);
  const images = [coding, gym, nier, breadandfred];

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
