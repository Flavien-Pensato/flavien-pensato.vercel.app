import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Tag from "../atoms/Tag";
import debounce from "../utils/debounce";

import styles from "./Menu.module.css";

const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY.toString();
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
    <header className={styles.menu}>
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
        <Tag>
          <span className="desktop-only">En poste </span>🧑‍💻
        </Tag>
        <Link href="/Flavien-Pensato.pdf">
          <a target="_blank">
            <button className="download-button">
              <span className="desktop-only">Télécharger mon </span>CV
            </button>
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Menu;
