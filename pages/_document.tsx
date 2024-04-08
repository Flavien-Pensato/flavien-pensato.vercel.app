import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

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
					<Analytics />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
