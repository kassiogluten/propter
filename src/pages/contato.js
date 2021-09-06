import Head from "next/head";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Contato() {
  return (
    <div>
      <Head>
        <title>Contato | Propter</title>
      </Head>
      <Header />

      <Contact color="verde" />
      <Footer />
    </div>
  );
}
