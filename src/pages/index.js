import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Propter | Gestão contábil</title>
      </Head>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
