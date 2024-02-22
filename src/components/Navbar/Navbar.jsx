import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageURL } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          src={
            menuOpen
              ? getImageURL("nav/closeIcon.png")
              : getImageURL("nav/menuIcon.png")
          }
          className={styles.MenuBtn}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.items} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#XP">XP</a>
          </li>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
