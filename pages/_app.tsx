import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Script
				src="https://analytics.flavien-pensato.fr/script.js"
				data-website-id="b294e060-a76c-4992-b254-453885e8454e"
			/>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
