import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { css } from "@emotion/css";
import debounce from "../utils/debounce";

const MenuHeader = css`
  /* Positionning */
  position: sticky;
  top: 0;

  html:not([data-scroll="0"]) & {
    /* Typography */
    background-color: rgb(var(--primary));

    /* Transform */
    transition: background-color 200ms ease;
  }
`;

const MenuNav = css`
  /* Box Model */
  max-width: 800px;
  margin: auto;
  padding: 2rem 0;

  /* Typography */
  text-align: right;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

const MenuLink = css`
  /* Box Model */
  margin: 1rem 2rem;

  /* Typography */
  color: rgb(var(--text));
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;

  /* Animation */
  transition: all 0.3s;

  &:hover:not([data-active="true"]),
  &[data-active="true"] {
    /* Typography */
    color: rgb(var(--primary));
    text-decoration: underline;
    text-underline-offset: 0.5rem;
  }

  html:not([data-scroll="0"]) &,
  html:not([data-scroll="0"]) &:hover,
  html:not([data-scroll="0"]) &:visited {
    color: rgb(var(--background));
  }
`;

const DownloadButton = css`
  /* Box Model */
  padding: 0.75rem 1rem;

  /* Typography */
  color: rgb(var(--white));
  background-color: rgb(var(--primary));
  border: none;
  cursor: pointer;

  html:not([data-scroll="0"]) &,
  html:not([data-scroll="0"]) &:hover,
  html:not([data-scroll="0"]) &:visited {
    color: rgb(var(--primary));
    background-color: rgb(var(--white));
  }
`;

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
    <header className={MenuHeader}>
      <nav className={MenuNav}>
        <Link href="/">
          <a data-active={asPath === "/"} className={MenuLink}>
            Accueil
          </a>
        </Link>
        <Link href="/blog">
          <a data-active={asPath === "/blog"} className={MenuLink}>
            Blog
          </a>
        </Link>
        <Link href="/Flavien-Pensato.pdf">
          <a target="_blank">
            <button className={DownloadButton}>Télécharger mon CV</button>
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Menu;
