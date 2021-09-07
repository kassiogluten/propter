import Head from "next/head";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LinksPage } from "../components/links/Links";
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
