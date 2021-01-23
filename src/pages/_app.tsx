import "../styles/globals.scss";

import { AppProps } from "next/app";
import { useApollo } from "../libs/createApollo";
import "normalize.css";
import { ApolloProvider } from "@apollo/client";
import "swiper/swiper.scss";

import "swiper/components/navigation/navigation.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
