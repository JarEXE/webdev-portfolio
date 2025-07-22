import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import mail from "../images/mail.webp";

const Contact = ({ id, className }) => {
  const [sending, setSending] = useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  const form = useRef();

  const inputStyles = {
    borderRadius: "25px",
    background: "#E6E6E6",
    marginBottom: "1.5%",
    fontWeight: "bold",
    lineHeight: "1.5",
    color: "#666",
    alignItems: "center",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm("service_c61skd9", "template_10l54u9", form.current, {
        publicKey: "DpsJambmwUKWf_MsX",
      })
      .then((result) => {
        setSending(false);
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        setSending(false);
        alert(`Failed to send message, please try again. Error: ${error}`);
      });
  };

  React.useEffect(() => {
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

  return (
    <div
      id={id}
      // eslint-disable-next-line
      className={`${className}` + " " + `${isVisible ? "fade-in-bottom" : ""}`}
    >
      <div className="sect5-envelope">
        <img className="envelope" src={mail} alt="colorful envelope" />
      </div>
      <div className="section5-form-container">
        <div>
          <div>
            {/* eslint-disable-next-line */}
            <h2 className="contact-header">// Contact</h2>
            <div className="text-center mb-2">
              <strong>Mobile:</strong> +597 875-9643
            </div>
            <form className="section5-form" ref={form} onSubmit={handleSubmit}>
              <div className="input-container">
                <input
                  type="text"
                  name="from_name"
                  className="form-control"
                  placeholder="Name"
                  style={inputStyles}
                  required
                />
                <span>
                  <FontAwesomeIcon icon={faUserAlt} className="input-icon" />
                </span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="from_email"
                  className="form-control"
                  placeholder="Email"
                  style={inputStyles}
                  required
                />
                <span>
                  <FontAwesomeIcon icon={faMailBulk} className="input-icon" />
                </span>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="form-control"
                  style={inputStyles}
                  required
                />
              </div>
              <button
                className="btn btn-dark"
                type="submit"
                style={{ width: "100%" }}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
