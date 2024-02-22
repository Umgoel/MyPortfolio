import React from "react";
import { getImageURL } from "../../utils";
import styles from "./ProjectCard.module.css";
const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      {/* <img className={styles.image} src={getImageURL(imageSrc)} alt={`image of ${title}`} /> */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {/* <a className={styles.link} href={demo}>Demo</a> */}
        <a className={styles.link} href={source} target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
