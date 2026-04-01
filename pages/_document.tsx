import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
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
			</body>
		</Html>
	);
};

export default MyDocument;
