import React, { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import cv from "../images/pubCV.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

const Resume = ({ id, className }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
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

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const calculatedWidth = Math.min(width * 0.8, 700);

  return (
    <div
      id={id}
      // eslint-disable-next-line
      className={className + " " + `${isVisible ? "fade-in-bottom" : ""}`}
    >
      <div className="pdf-header">
        {/* eslint-disable-next-line */}
        <h2>// CV</h2>
      </div>
      <div className="pdf-container">
        <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
          <Page width={calculatedWidth} pageNumber={pageNumber} />
        </Document>
      </div>

      <div className="pdf-pagination">
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button
          type="button"
          className="btn btn-dark"
          disabled={pageNumber <= 1}
          onClick={previousPage}
          style={{ marginRight: "5px", width: "103px" }}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
          style={{ width: "103px" }}
        >
          Next
        </button>
      </div>
      <a href={cv} download={cv} className="mt-3">
        Click here to download
      </a>
    </div>
  );
};

export default Resume;
