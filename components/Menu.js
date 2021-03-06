import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import debounce from "../utils/debounce";

import styles from "./Menu.module.css";

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
};

const Menu = () => {
  const { asPath } = useRouter();

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
          <a data-active={asPath === "/"} className={styles.link}>
            Accueil
          </a>
        </Link>
        <Link href="/blog">
          <a data-active={asPath === "/blog"} className={styles.link}>
            Blog
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Menu;
