import React from "react";
import printanywherelanding from "../images/printanywhere/printanywherelanding.png";
import printanywheredashboard from "../images/printanywhere/printanywheredashboard.png";
import printanywhereprintjobs from "../images/printanywhere/printanywhereprintjobs.png";
import printanywhereprinters from "../images/printanywhere/printanywhereprinters.png";
import printanywherepricing from "../images/printanywhere/printanywherepricing.png";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function SmartFormsDetails() {
  scrollToTop();

  return (
    <div className="project-details-container">
      <h2>Print-Anywhere</h2>

      <h3>Description</h3>
      <p>
        Print-Anywhere is an application that allows users to submit their
        documents from anywhere in the world to be printed out at one of various
        locations in Suriname.
        <br></br>
        <br></br>
        The main purpose of this was convenience. Convenience for both the end
        user and the merchant. Any merchant or print store owner interested in
        the service, so long as they had network printers available, would only
        require a laptop or desktop computer to get started.
        <br></br>
        <br></br>
        Users would simply submit the document they wish to be printed out, fill
        in some configurations, and choose a valid location for where they would
        like to pick up their printouts. And that's it! Print-Anywhere would
        take care of the rest.
        <br></br>
        <br></br>
        Merchants or print store managers would also have access to a handy
        management portal in which they are able to keep track of their printer
        status, manage their desired pricing based on number of printouts and
        page size, and enable or disable various features.
        <br></br>
        <br></br>
        In addition to various graphs and charts for sales statistics and, the
        management portal would also give notifications regarding potentially
        failed print jobs, allowing the admin to attempt a reprint or
        troubleshoot the issue.
      </p>
      <p>
        <strong>Demo: </strong>
        <a
          href="https://cloud.smartsecureweb.online/printanywhere"
          target="_blank"
          rel="noreferrer"
        >
          https://cloud.smartsecureweb.online/printanywhere
        </a>
      </p>
      <h3>Features</h3>
      <ul>
        <li>Minimal, modern, and responsive design</li>
        <li>PDF document previews</li>
        <li>Support for integrating various online payment solutions</li>
        <li>Mailing system</li>
        <li>
          Management Portal with user management, mailing system, notifications,
          sales statistics, and many more features
        </li>
      </ul>
      <h3>Screenshots*</h3>
      <div className="screenshots-container">
        <img src={printanywherelanding} alt="print-anywhere landing page" />
        <img src={printanywheredashboard} alt="print-anywhere dashboard" />
        <img
          src={printanywhereprintjobs}
          alt="print-anywhere print jobs overview"
        />
        <img
          src={printanywhereprinters}
          alt="print-anywhere printer management"
        />
        <img
          src={printanywherepricing}
          alt="print-anywhere pricing management"
        />
      </div>
    </div>
  );
}
