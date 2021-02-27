import React, { useEffect } from "react";
import Link from "next/link";

import debounce from "../utils/debounce";

import styles from "./Menu.module.css";

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

const Menu = () => {
  useEffect(() => {
    const debounceScroll = debounce(storeScroll);

    document.addEventListener("scroll", debounceScroll, {
      passive: true,
    });

    storeScroll();

    return () => document.removeEventListener("scroll", debounceScroll);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.link}>Accueil</a>
        </Link>
        <Link href="/blog">
          <a className={styles.link}>Blog</a>
        </Link>
      </nav>
    </header>
  );
};

export default Menu;
