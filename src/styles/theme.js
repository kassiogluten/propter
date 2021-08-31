import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Sora",
    body: "Sora",
  },
  colors: {
    verde: "#21D97A",
    verdeclaro: "#42E290",
    verdescuro: "#148249",
    azul: "#2659FF",
    azulclaro: "#517AFF",
    azulscuro: "#00208B",
    cinza: "#041119",
    cinzaclaro: "#08202F",
    cinzaescuro: "#02080C",
  },
  components: {
    Button: {
      baseStyle: {
        color: "white",
        fontWeight: "400",
        fontSize: 14,
        borderRadius: 10,
        _hover: {
          //textDecoration: "underline",
        },
      },
    },
  },
  styles: {
    global: {
      button: {
        fontSize: "14px !important",
      },
      svg: {
        display: "inline",
      },
      a: {
        fontSize: 14,
        _hover: {
          //textDecoration: "underline",
        },
      },
      body: {
        /* bg: "var(--white)",
        color: "var(--white)",
        lineHeight: "inherit", */
      },
    },
  },
});
