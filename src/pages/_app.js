import "swiper/swiper.scss";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../styles/globals.css";
import "../styles/swiper.css";
import "../styles/logo-animation.css";

import { theme } from "../styles/theme";
import { ContextProvider } from "../contexts/Context";

import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
