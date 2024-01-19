import React from "react";

const Home = ({ id, className }) => {
  return (
    <section id={id} className={className}>
      <div className="row-class">
        <div style={{ minWidth: "50%" }}>
          <h1>Full-Stack Web Developer</h1>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis rerum
          perferendis labore cupiditate, iure delectus tenetur id nulla veniam
          quod voluptatum consequatur alias quo maiores quis, debitis
          voluptatibus enim inventore?
        </p>
      </div>
    </section>
  );
};

export default Home;
