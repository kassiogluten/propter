import Head from "next/head";
import { Hero } from "../components/conheca/Hero";
import { History } from "../components/conheca/History";
import { MSV } from "../components/conheca/MSV";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Why } from "../components/Why";
import { VideoHistory } from "../components/History";
import { Team } from "../components/conheca/Team";
import { Testimonials } from "../components/Testimonials";

export default function Conheca() {
  return (
    <div>
      <Head>
        <title>Conheça a Propter</title>
        <meta property="og:title" content="Conheça a Propter" />
        <meta
          name="description"
          content="Bem-vindo à Propter. Somos mais que um escritório de contabilidade."
        />
        <meta
          property="og:description"
          content="Bem-vindo à Propter. Somos mais que um escritório de contabilidade."
        />
        <meta property="og:image" content="escritorio.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero />
      <MSV />
      <History />
      <Why />
      <VideoHistory />
      <Team />
      <Testimonials bg="white" color="cinza" />
      <Footer />
    </div>
  );
}
