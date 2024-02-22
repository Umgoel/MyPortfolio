import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>It all begins with a Hello.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="email icon" />
          <a target="_blank" href="mailto:umanggoel27@gmail.com">
            umanggoel27@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/githubIcon.png")} alt="email icon" />
          <a target="_blank" href="https://github.com/Umgoel">
            Umgoel - My Codes
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageURL("contact/linkedinIcon.png")} alt="email icon" />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/umang-goel-9b284112b/"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
