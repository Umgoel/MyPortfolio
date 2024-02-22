import React from "react";
import { getImageURL } from "../../utils";
import styles from "./Hero.module.css";

document.addEventListener("click", (e) => {
  let tar = e.target;
  if (tar.name == "toggle") tar.removeAttribute("class");
});
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Umang Goel!</h1>
        <p className={styles.description}>
          I'm 75% of a CS engineer at BMSCE, Bengaluru. I enjoy making websites and
          applications. My downtime? Running or embracing photography.
        </p>
        <a
          href="https://drive.google.com/file/d/130brEtdG7b-DLB05B54wyuRNjVawKCSm/view?usp=share_link"
          target="_blank"
          className={styles.contactBtn}
        >
          Resume
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency-systems-regular/48/external-link.png"
            alt="external-link"
          />
        </a>
        {/* For dark mode, add a toggle switch */}
      </div>

      <img
        src={getImageURL("hero/profilePic.png")}
        alt=""
        className={styles.heroImage}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
