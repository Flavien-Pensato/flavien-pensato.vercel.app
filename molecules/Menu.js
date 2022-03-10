import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import debounce from "../utils/debounce";

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
    <header className="menu-header">
      <nav className="menu-nav">
        <Link href="/">
          <a data-active={asPath === "/"} className="menu-link">
            Accueil
          </a>
        </Link>
        <Link href="/blog">
          <a data-active={asPath === "/blog"} className="menu-link">
            Blog
          </a>
        </Link>
        <Link href="/Flavien-Pensato.pdf">
          <a target="_blank">
            <button className="download-button">Télécharger mon CV</button>
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Menu;
