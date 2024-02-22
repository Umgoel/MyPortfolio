import React from "react";
import { getImageURL } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutimg.png")}
          alt="Me with my Macbook Intel chip"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageURL("about/cursorIcon.png")}
              alt="cursor"
              className={styles.cursorImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Journey till here</h3>
              <p>
                Encountering Java OOPs during my 9th-grade studies sparked my
                fascination with coding. This experience allowed me to pursue a
                Computer Science degree, enjoying the process of learning.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Engineering</h3>
              <p>
                Life at BMSCE has been a dynamic journey, marked by the
                discovery of new experiences and technologies. Engaging in
                various projects, I've embraced the learning process, shaping my
                understanding and passion for technology.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/serverIcon.png")} alt="cursor" />
            <div className={styles.aboutItemText}>
              <h3>Life beyond</h3>
              <p>
              Beyond Engineering, I'm gearing up for the next chapter with a job offer in hand. Excited to dive deeper into my field, expand my knowledge, and explore new horizons while continuing to learn and grow.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
