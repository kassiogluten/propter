/* eslint-disable @next/next/no-css-tags */
import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* <link href="/fonts/fonts.css" rel="stylesheet" /> */}
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
{/*           <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
