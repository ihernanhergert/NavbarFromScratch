import React from "react";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <a
            className={styles.logo}
            href="https://hernan-hergert.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HH
          </a>
        </Link>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <button className={styles.buttonsnavitem}>
            <li className={styles.navitem}>
              <Link href="/">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  <span>Page 1</span>
                  <svg className={styles.svgButton}>
                    <rect x="0" y="0" fill="none"></rect>
                  </svg>
                </a>
              </Link>
            </li>
          </button>
          <button className={styles.buttonsnavitem}>
            <li className={styles.navitem}>
              <Link href="/Portfolio">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  <span>Page 2</span>
                  <svg className={styles.svgButton}>
                    <rect x="0" y="0" fill="none"></rect>
                  </svg>
                </a>
              </Link>
            </li>
          </button>
          <button className={styles.buttonsnavitem}>
            <li className={styles.navitem}>
              <Link href="/ContactPage">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  <span>Page 3</span>
                  <svg className={styles.svgButton}>
                    <rect x="0" y="0" fill="none"></rect>
                  </svg>
                </a>
              </Link>
            </li>
          </button>
        </ul>

        <button
          className={`${
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          } + ${styles.button1}`}
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
