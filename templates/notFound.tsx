import React from "react";
import Link from "next/link";

import Menu from "../molecules/Menu";
import Footer from "../molecules/Footer";

export const NotFoundTemplate = ({ blogs }) => {
  return (
    <>
      <Menu />
      <main>
        <section>
          <h1>Page introuvable</h1>

          {blogs.length > 0 && (
            <>
              <p>Lien(s) similaire(s) :</p>
              <nav>
                <ul>
                  {blogs.map(({ slug, title }) => (
                    <ol key={slug}>
                      <Link href={"/blog/".concat(slug)}>
                        <a>{title}</a>
                      </Link>
                    </ol>
                  ))}
                </ul>
              </nav>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};
