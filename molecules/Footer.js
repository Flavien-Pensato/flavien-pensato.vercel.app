import React from "react";
import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <nav className={styles.nav}>
      <Link href="https://www.linkedin.com/in/flavien-pensato-708190a7/">
        <a target="_blank" rel="noreferrer" title="Linkedin">
          <i className="icon-linkedin"></i>
        </a>
      </Link>
      <Link href="https://github.com/Flavien-Pensato">
        <a target="_blank" rel="noreferrer" title="Github">
          <i className="icon-github"></i>
        </a>
      </Link>
    </nav>
  </footer>
);

export default Footer;
