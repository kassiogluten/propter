import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { OurMission } from "../components/OurMission";
import { Trajectory } from "../components/Trajectory";
import { Why } from "../components/Why";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Propter | Gestão contábil</title>
      </Head>
      <Header />
      <Banner />
      <Why />
      <OurMission />
      <Trajectory />
      <Footer />
    </div>
  );
}
