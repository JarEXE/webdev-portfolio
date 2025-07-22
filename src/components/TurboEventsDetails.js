import React from "react";
import turboEventsLogin from "../images/turboevents/turbo-events-login.png";
import turboEventsEvent from "../images/turboevents/turbo-events-event.png";
import turboEventsCreate from "../images/turboevents/turbo-events-create.png";
import turboEventsAttendees from "../images/turboevents/turbo-events-attendees.png";
import turboEventsRsvp from "../images/turboevents/turbo-events-rsvp.png";
import turboEventsEmail from "../images/turboevents/turbo-events-email.png";
import turboEventsScanner from "../images/turboevents/turbo-events-scanner.png";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function TurboEventsDetails() {
  scrollToTop();

  return (
    <div className="project-details-container">
      <h2>TurboEvents</h2>

      <h3>Description</h3>
      <p>
        TurboEvents is a powerful event creation and management system.
        <br></br>
        <br></br>
        Users are able to create their event, whether it be for a birthday
        party, wedding, or any other special or simple occassion. They can set a
        max attendance number and upload an image for their event, and once
        finished, an RSVP link is generated which can be shared to all invitees.
        Anyone with the link is able to register for the event. Once registered,
        guests are mailed a QR code which can be scanned at the gate to confirm
        admission.
        <br></br>
        <br></br>
        Unique codes are generated for each event, which can be used to log in
        on mobile devices as a "scanner". Hosts are able to specify how many
        scanners are allowed to be logged in at any given time. This can come in
        handy based on the scale of the event, as there are many cases where
        there may be multiple lines of entry.
        <br></br>
        <br></br>
        Hosts are able to edit their event details at any given point, so long
        as the event is not concluded. Doing so will send out a notification
        email to all registered guests, regarding the event updates.
        <br></br>
        <br></br>
        The guest list is updated as guests register, allowing the host to
        monitor the attendance in real time, or delete guests from the list,
        effectively revoking their access or invalidating their entry code.
      </p>
      <p>
        <strong>Site: </strong>
        <a
          href="https://cloud.smartsecureweb.online/events/"
          target="_blank"
          rel="noreferrer"
        >
          https://cloud.smartsecureweb.online/events/
        </a>
      </p>
      <h3>Features</h3>
      <ul>
        <li>User management system</li>
        <li>Email notifications and event status updates</li>
        <li>Guest access QR code generation</li>
        <li>QR code scanner for event entry</li>
      </ul>
      <h3>Screenshots*</h3>
      <div className="screenshots-container">
        <img src={turboEventsLogin} alt="turboevents login" />
        <img src={turboEventsEvent} alt="turboevents event" />
        <img src={turboEventsAttendees} alt="turboevents attendees" />
        <img src={turboEventsCreate} alt="turboevents create" />
        <img src={turboEventsRsvp} alt="turboevents rsvp" />
        <img src={turboEventsEmail} alt="turboevents email" />
        <img src={turboEventsScanner} alt="turboevents scanner" />
      </div>
    </div>
  );
}
