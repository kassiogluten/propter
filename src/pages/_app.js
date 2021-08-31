import "../styles/globals.css";
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
