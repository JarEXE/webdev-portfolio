import React from "react";
import handydashboard from "../images/handy/handy-dashboard.png";
import handyquotation from "../images/handy/handy-quotation.png";
import handyconfigs from "../images/handy/handy-configs.png";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function HandyDetails() {
  scrollToTop();

  return (
    <div className="project-details-container">
      <h2>Handy Invoicing System</h2>

      <h3>Description</h3>
      <p>
        Handy Invoicing System is, as the name might imply, a handy invoicing
        system.
        <br></br>
        <br></br>
        This was a project that was requested by a client who needed a custom
        solution for creating invoices and quotations for their small business.
        <br></br>
        <br></br>
        It is simple, yet robust, allowing for full customization of PDF details
        and an integrated mailing system with payment reminders. Users are also
        able to upload multiple attachments when sending invoices or quotations
        to their clients, a feature that I did not come across very often when
        scoping out other paid alternatives.
        <br></br>
        <br></br>I had also set up and configured{" "}
        <a href="https://inventree.org/" target="_blank" rel="noreferrer">
          Inventree
        </a>{" "}
        for the client as an open-source alternative to Quickbooks. With this in
        mind, I implemented custom Inventree integration, allowing for automatic
        client / customer synchronization between the two applications and QR
        code scanning for quickly adding items with their prices when creating
        invoices or quotations.
      </p>
      <p>
        <strong>Demo: </strong>
        No demo available.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Role based user management</li>
        <li>Email notifications and status updates</li>
        <li>PDF generation</li>
        <li>Upload attachments when mailing invoices or quotations</li>
        <li>Dashboard with earnings statistics</li>
        <li>
          <a href="https://inventree.org/" target="_blank" rel="noreferrer">
            Inventree
          </a>{" "}
          integration (client synchronization and item QR code scanning)
        </li>
      </ul>
      <h3>Screenshots*</h3>
      <div className="screenshots-container">
        <img src={handydashboard} alt="handy dashboard" />
        <img src={handyconfigs} alt="handy business configs" />
        <img src={handyquotation} alt="handy quotation creation" />
      </div>
    </div>
  );
}
