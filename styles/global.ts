import { injectGlobal } from "@emotion/css";

injectGlobal`
:root {
  --container: 800px;
  --primary: 19 90 159;
  --text: 0, 0, 0;
  --background: 255, 255, 255;
  --dark: 0, 0, 0;
  --white: 255, 255, 255;
}

@font-face {
  font-weight: 200;
  font-family: "Martel";
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Martel/Martel-ExtraLight.ttf") format("truetype");
}

@font-face {
  font-weight: 300;
  font-family: "Martel";
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Martel/Martel-Light.ttf") format("truetype");
}

@font-face {
  font-weight: 400;
  font-family: "Martel";
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Martel/Martel-Regular.ttf") format("truetype");
}

@font-face {
  font-weight: 600;
  font-family: "Martel";
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Martel/Martel-SemiBold.ttf") format("truetype");
}

@font-face {
  font-weight: 700;
  font-family: "Martel";
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Martel/Martel-Bold.ttf") format("truetype");
}

@font-face {
  font-weight: 800;
  font-family: "Martel";
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Martel/Martel-ExtraBold.ttf") format("truetype");
}

@font-face {
  font-weight: 900;
  font-family: "Martel";
  font-style: normal;
  font-display: swap;
  src: url("/fonts/Martel/Martel-Black.ttf") format("truetype");
}

html {
  font-size: 18px;
  scroll-behavior: smooth;
}

@media (max-width: 800px) {
  html {
    font-size: 12px;
  }
}

/* Anchor */
:target::before {
  /* Box Model */
  display: block;
  height: 3em;
  margin: -3em 0 0;

  /* Misc */
  content: "";
}

body {
  /* Box Model */
  margin: 0;
  padding: 0;

  /* Typography */
  font-family: Martel, sans-serif;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.6rem;
}

h4 {
  font-size: 1.4rem;
}

h5 {
  font-size: 1.2rem;
}

a {
  color: rgb(var(--primary));
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

section {
  /* Box Model */
  max-width: var(--container);
  margin: auto;
  padding: 1rem;
}

ol {
  /* Box Model */
  padding-left: 1rem;

  /* Typography */
  list-style: none;
}

ol p {
  margin-left: 1rem;
}
`;
