import React from "react";
import anilookuponepiecemanga from "../images/anilookup/anilookuponepiecemanga.png";
import anilookupdetails from "../images/anilookup/anilookupdetails.png";
import anilookuplanding from "../images/anilookup/anilookuplandingpage.png";
import anilookuplandingdark from "../images/anilookup/anilookuplandingdark.png";
import anilookupwatchlist from "../images/anilookup/anilookupwatchlist.png";
import anilookupreadinglist from "../images/anilookup/anilookupreadinglist.png";
import anilookupmangacolored from "../images/anilookup/anilookupmangacolor.png";
import anilookupmanga from "../images/anilookup/anilookupmanga.png";
import anilookupdetailsbanner from "../images/anilookup/anilookupdetailsbanner.png";
import anilookuprecommended from "../images/anilookup/anilookuprecommended.png";
import anilookupstudiodetails from "../images/anilookup/anilookupstudiodetails.png";
import anilookupauthordetails from "../images/anilookup/anilookupauthordetails.png";
import anilookupstudioworks from "../images/anilookup/anilookupstudioworks.png";

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
      <h2>AniLookup</h2>
      <a
        className="mb-4"
        href="https://github.com/JarEXE/anilookup"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa-brands fa-github fa-xl"></i>
      </a>
      <h3>Description</h3>
      <p>
        AniLookup is an Anime (Japanese film / television animation) and Manga
        (Japanese comic books and graphic novels) lookup React Web Application
        made as a passion / learning project. It makes use of various API
        technologies such as{" "}
        <a href="https://jikan.moe" target="_blank" rel="noreferrer">
          Jikan V4
        </a>
        ,{" "}
        <a
          href="https://kitsu.docs.apiary.io/"
          target="_blank"
          rel="noreferrer"
        >
          Kitsu
        </a>
        , and{" "}
        <a
          href="https://api.mangadex.org/docs/"
          target="_blank"
          rel="noreferrer"
        >
          Mangadex
        </a>
        .{" "}
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
          Google Firebase
        </a>{" "}
        is used for user accounts and user authentication.
      </p>
      <p>
        <strong>Demo: </strong>
        <a
          href="https://anilookup.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          https://anilookup.netlify.app
        </a>
      </p>
      <h3>Features</h3>
      <ul>
        <li>
          Responsive UI / design. Works well on all resolutions and screen
          sizes.
        </li>
        <li>Anime trailers</li>
        <li>External Links (for streaming sites and MyAnimeList official)</li>
        <li>
          EXTREMELY primitive "manga reader" functionality by way of Mangadex
        </li>
        <li>User registration and authentication</li>
        <li>Watch lists</li>
        <li>Reading lists</li>
        <li>Anime watchlist statistics</li>
        <li>Manga reading list statistics</li>
        <li>Light mode / dark mode toggle</li>
        <li>NSFW content toggle</li>
        <li>Animation studio info</li>
        <li>Manga author info</li>
      </ul>
      <h3>Screenshots</h3>
      <div className="screenshots-container">
        <img src={anilookuplanding} alt="anilookup landing page" />
        <img
          src={anilookupdetailsbanner}
          alt="anilookup anime details with banner"
        />
        <img src={anilookupdetails} alt="anilookup anime details" />
        <img src={anilookuprecommended} alt="anilookup anime recommendations" />
        <img src={anilookuponepiecemanga} alt="anilookup manga details" />
        <img src={anilookuplandingdark} alt="anilookup landing page dark" />
        <img src={anilookupwatchlist} alt="anilookup watch list" />
        <img src={anilookupreadinglist} alt="anilookup reading list" />
        <img src={anilookupmangacolored} alt="anilookup manga colored" />
        <img src={anilookupmanga} alt="anilookup manga" />
        <img src={anilookupstudiodetails} alt="anilookup studio details" />
        <img src={anilookupstudioworks} alt="anilookup studio works" />
        <img src={anilookupauthordetails} alt="anilookup author details" />
      </div>
    </div>
  );
}
