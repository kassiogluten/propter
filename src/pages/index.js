import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { Banner } from "../components/Banner";
import { Blog } from "../components/Blog";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { History } from "../components/History";
import { OurMission } from "../components/OurMission";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
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
      <History />
      <Services />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}
