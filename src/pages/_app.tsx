import "../styles/globals.scss";

import { AppProps } from "next/app";
import { useApollo } from "../libs/createApollo";
import "normalize.css";
import { ApolloProvider } from "@apollo/client";
import "swiper/swiper.scss";
import { KeystoneProvider } from "@keystonejs/apollo-helpers";
import "swiper/components/navigation/navigation.min.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <MessengerCustomerChat pageId="100101035386706" appId="369791231041330" />
      <KeystoneProvider>
        <Component {...pageProps} />
      </KeystoneProvider>
    </ApolloProvider>
  );
}

export default MyApp;
