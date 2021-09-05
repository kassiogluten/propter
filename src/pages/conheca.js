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
      </Head>
      <Header />
      <Hero />
      <MSV />
      <History />
      <Why />
      <VideoHistory />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}
