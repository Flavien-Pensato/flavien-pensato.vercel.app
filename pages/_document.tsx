import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);

		return initialProps;
	}

	render() {
		return (
			<Html lang="fr" data-scroll="0">
				<Head>
					<meta
						name="google-site-verification"
						content="Wm3iuBpblUFxTufHdG3MSMj2QGemF7B_7CeTSPNdN90"
					/>
					<link rel="icon" href="/favicons/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<NextScript src="https://analytics.flavien-pensato.fr/script.js"             
  data-website-id="b294e060-a76c-4992-b254-453885e8454e" strategy="afterInteractive" /> 
				</body>
			</Html>
		);
	}
}

export default MyDocument;
