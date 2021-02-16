import React from "react";
import Link from "next/link";

import styles from "./Menu.module.css";

const Menu = () => (
  <nav className={styles.nav}>
    <Link href="/">
      <a className={styles.link}>Accueil</a>
    </Link>
    <Link href="/curriculum-vitae">
      <a className={styles.link}>À propos</a>
    </Link>
  </nav>
);

export default Menu;
