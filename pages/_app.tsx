import { Analytics } from "@vercel/analytics/react";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Analytics>
			<Component {...pageProps} />
		</Analytics>
	);
};

export default MyApp;
