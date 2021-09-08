import { Text } from "@chakra-ui/layout";
import Head from "next/head";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CTA } from "../components/servicos/CTA";
import { Hero } from "../components/servicos/Hero";
import { HowWorks } from "../components/servicos/HowWorks";
import { Testimonials } from "../components/Testimonials";
import { SegurosSvg } from "../icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Seguros | Propter</title>
        <meta property="og:title" content="Seguros" />
        <meta
          name="description"
          content="Conheça nossa gama de produtos e serviços com proteções dos mais variados tipos, para você, sua família e empresa, além dos maisvariados produtos financeiros."
        />
        <meta
          property="og:description"
          content="Conheça nossa gama de produtos e serviços com proteções dos mais variados tipos, para você, sua família e empresa, além dos maisvariados produtos financeiros."
        />
        <meta property="og:image" content="/servicos.jpg" key="ogimage" />
      </Head>
      <Header />
      <Hero
        color="azul"
        title="Seguros"
        desc="Conheça nossa gama de produtos e serviços com proteções dos mais variados tipos, para você, sua família e empresa, além dos maisvariados produtos financeiros.
        "
      >
        <SegurosSvg color="white" />
      </Hero>
      <CTA
        title="Mantenha seus bens mais importantes  <strong>protegidos.</strong>"
        color="azul"
        img="video.jpg"
      >
        <Text color="texto" maxW={400} py={8}>
          Venha conhecer nossas opções de seguro para você ou sua empresa.
        </Text>
      </CTA>
      <HowWorks
        title1="Prospecção"
        desc1="Nossa equipe de atendimento entrará em contato e agendará uma reunião para apresentar a Propter."
        title2="Análise de dados "
        desc2="Nossa equipe de atendimento entrará em contato e agendará uma reunião para apresentar a Propter."
        title3="Pronto! "
        desc3="Nossa equipe de atendimento entrará em contato e agendará uma reunião para apresentar a Propter."
        color="#2659FF"
      />
      <Testimonials bg="white" color="cinza" />
      <Contact color="azul" />
      <Footer />
    </div>
  );
}
