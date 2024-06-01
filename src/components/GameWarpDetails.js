import React from "react";
import gamewarplanding from "../images/gamewarp/gamewaplanding.png";
import gamewarpcart from "../images/gamewarp/gamewarpcart.png";
import gamewarpcatalogue from "../images/gamewarp/gamewarpcatalogue.png";
import gamewarporder from "../images/gamewarp/gamewarporder.png";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function AnilookupDetails() {
  scrollToTop();

  return (
    <div className="project-details-container">
      <h2>Game Warp</h2>
      <a
        className="mb-4"
        href="https://github.com/JarEXE/gamewarp"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-brands fa-github fa-xl"></i>
      </a>
      <h3>Description</h3>
      <p>
        Game Warp is a React web application that offers a simple demo of a video
        game webshop. It makes use of Redux and Redux Thunk for state
        management.
        <br></br>
        <br></br>
        The idea is something similar to a service that a restaurant or small
        business owner would provide. The business is run locally (physical
        store, warehouse etc.) and the owner is in need of a simple webshop
        where customers can place orders. Once an order is placed, the store
        would deliver the items to the specified location and receive payments
        in person.
      </p>
      <p>
        <strong>Demo: </strong>
        <a href="https://gamewarp.netlify.app" target="_blank" rel="noreferrer">
          https://gamewarp.netlify.app
        </a>
      </p>
      <h3>Features</h3>
      <ul>
        <li>
          Responsive UI / design. Works well on all resolutions and screen
          sizes.
        </li>
        <li>Redux and Redux-Thunk state management</li>
        <li>Beautiful carousel landing page</li>
        <li>Screenshots slideshow for catalogue items</li>
        <li>
          Shopping cart management (add, increase, decrease, delete, empty)
        </li>
        <li>Simulate order placement</li>
        <li>Orders / Receipts search</li>
      </ul>
      <h3>Screenshots</h3>
      <div className="screenshots-container">
        <img src={gamewarplanding} alt=" landing page" />
        <img src={gamewarpcatalogue} alt=" catalogue" />
        <img src={gamewarpcart} alt=" cart" />
        <img src={gamewarporder} alt="gamewarp order" />
      </div>
    </div>
  );
}
