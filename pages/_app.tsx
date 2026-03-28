import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			<Script
				src="https://analytics.flavien-pensato.fr/script.js"
				data-website-id="b294e060-a76c-4992-b254-453885e8454e"
			/>
			<Component {...pageProps} />
			<Analytics />
		</>
	);
};

export default MyApp;
