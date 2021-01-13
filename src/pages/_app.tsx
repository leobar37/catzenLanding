import "../styles/globals.scss";

import { AppProps } from "next/app";
import "normalize.css";
// Import Swiper styles
import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
