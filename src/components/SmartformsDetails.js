import React from "react";
import smartformsinvoiceoverview from "../images/smartforms/smartformsinvoiceoverview.png";
import smartformsinvoicepdf from "../images/smartforms/smartformsinvoicepdf.png";
import smartformsinvoicing from "../images/smartforms/smartformsinvoicing.png";
import smartformsleavecalendar from "../images/smartforms/smartformsleavecalendar.png";
import smartformsleaveform from "../images/smartforms/smartformsleaveform.png";
import smartformsusermanagement from "../images/smartforms/smartformsusermanagement.png";

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
      <h2>SmartForms</h2>

      <h3>Description</h3>
      <p>
        SmartForms was a massive solo project for a company that I worked at for
        some years.
        <br></br>
        <br></br>
        The goal was to create a platform where all users (mainly the employees
        of the company) would be able to submit forms for various services such
        as leave requests, car rentals, field reports, invoices, quotations,
        merchant contracts and more... All with beautiful, interactive tables
        and overviews.
        <br></br>
        <br></br>
        Additionally, this project makes use of Single Sign-On so that employees
        and users would only need to login once in order to access all
        company-specific websites and services.
      </p>
      <p>
        <strong>Demo: </strong>
        No demo available.
      </p>
      <h3>Features</h3>
      <ul>
        <li>User registration and management</li>
        <li>User roles</li>
        <li>Single Sign-On via Authentik</li>
        <li>Client registration and management</li>
        <li>Email notifications and status updates</li>
        <li>Invoicing System with PDF generation</li>
        <li>Quotation System with PDF generation</li>
        <li>Employee Leave Requests with approval/denial system</li>
        <li>
          Company Vehicle Rental system with vehicle availability / status
        </li>
        <li>External Merchant contract applications</li>
        <li>Payment Tracker</li>
        <li>PDF viewer via ViewerJS</li>
      </ul>
      <h3>Screenshots*</h3>
      <i>*Some sensitive information has been redacted</i>
      <div className="screenshots-container">
        <img src={smartformsleavecalendar} alt="smartforms leave calendar" />
        <img src={smartformsleaveform} alt="smartformss leave form" />
        <img src={smartformsusermanagement} alt="smartforms user management" />
        <img
          src={smartformsinvoiceoverview}
          alt="smartforms invoice overview"
        />
        <img src={smartformsinvoicing} alt="smartforms invoicing" />
        <img src={smartformsinvoicepdf} alt="smartforms invoice pdf" />
      </div>
    </div>
  );
}
