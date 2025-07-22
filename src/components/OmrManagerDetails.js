import React from "react";
import omrExam from "../images/omrmanager/omrexam.png";
import omrJobQueue from "../images/omrmanager/omr-job-queue.png";
import omrReports from "../images/omrmanager/omr-reports.png";
import omrResults from "../images/omrmanager/omr-results.png";
import omrUsers from "../images/omrmanager/omr-users.png";
import documentScanner from "../images/omrmanager/document_scanner.gif";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function OmrManagerDetails() {
  scrollToTop();

  return (
    <div className="project-details-container">
      <h2>OMR-Manager</h2>

      <h3>Description</h3>
      <p>
        OMR-Manager is a project built for{" "}
        <a
          href="https://examenbureausuriname.com/"
          target="_blank"
          rel="noreferrer"
        >
          Het Examenbureau Suriname
        </a>
        .<br></br>
        <br></br>
        The client faced an issue where grading of national exam sheets was
        still being done in a very slow-paced, and old fashioned way. Every exam
        was being graded manually by hand. The goal then, was to provide a
        solution to this problem, one which would <strong>
          significantly
        </strong>{" "}
        speed up and partially automate the grading process.
        <br></br>
        <br></br>
        OMR-Manager is essentially a front-end for{" "}
        <a
          href="https://github.com/Udayraj123/OMRChecker"
          target="_blank"
          rel="noreferrer"
        >
          OMRChecker
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/Udayraj123"
          target="_blank"
          rel="noreferrer"
        >
          Udayraj123
        </a>
        . The flow is simple. Users use printer scanners to scan in batches of a
        particular exam to a specific directory via FTP. A custom template and
        evaluation configuration file are created for the user, based on the
        requirements or layout of that exam sheet. Users specify the marking
        scheme for the exam, and then simply submit. The exam is then added to a
        job queue, where it waits idle until the user is ready to start their
        job(s). OMRChecker then runs in the background, scanning and analyzing
        the exam sheets asynchronously, eventually generating all reports for
        the user.
      </p>
      <p>
        <strong>Demo: </strong>
        No demo available.
      </p>
      <h3>Features</h3>
      <ul>
        <li>Role based user management</li>
        <li>Email notifications and status updates</li>
        <li>OMR checking and evaluation</li>
        <li>Document OCR</li>
        <li>Auto-rotate exam sheets</li>
        <li>Crop exam sheets based on markers</li>
        <li>Exam evaluation and marking scheme configuration via CSV upload</li>
      </ul>
      <h3>Screenshots*</h3>
      <div className="screenshots-container">
        <img src={omrExam} alt="omr-manager exam configuration" />
        <img src={omrJobQueue} alt="omr-manager job queue" />
        <img src={omrReports} alt="omr-manager reports" />
        <img src={omrResults} alt="omr-manager results" />
        <img src={omrUsers} alt="omr-manager users" />
        <img
          src={documentScanner}
          alt="omrchecker document scanner in action"
        />
      </div>
    </div>
  );
}
