import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  xs: "340px",
});

export const theme = extendTheme({
  breakpoints,
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
    texto: "#7D8489",
  },
  components: {
    Button: {
      baseStyle: {
        color: "white",
        fontWeight: "400",
        fontSize: 12,
        borderRadius: 10,
        _hover: {
          transform: "scale(1.02);",
          //textDecoration: "underline",
        },
      },
    },
    Text: { baseStyle: { fontSize: ".8rem" } },
  },
  styles: {
    global: {
      button: {
        fontSize: "13px",
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
        bg: "#F5F6FA",
        /* color: "var(--white)",
        lineHeight: "inherit", */
      },
    },
  },
});
