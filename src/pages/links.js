import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { List } from "../components/links/List";

export default function HomeLinks() {
  return (
    <div>
      <Head>
        <title>Links Úteis | Propter</title>
      </Head>
      <Header />
      <List />
      <Footer />
    </div>
  );
}
