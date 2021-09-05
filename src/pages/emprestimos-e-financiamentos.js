import { Text } from "@chakra-ui/layout";
import Head from "next/head";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CTA } from "../components/servicos/CTA";
import { Hero } from "../components/servicos/Hero";
import { HowWorks } from "../components/servicos/HowWorks";
import { Testimonials } from "../components/Testimonials";
import { FinanciamentosSvg } from "../icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Empréstimo e Financiamentos | Propter</title>
      </Head>
      <Header />
      <Hero
        color="verde"
        title="Empréstimo e
        Financiamentos"
        desc="Conheça o melhor crédito do mercado, que pode te dar aquela força no orçamento. Em poucos minutos, você faz o seu cadastro para uma análise de empréstimo online.
        "
      >
        <FinanciamentosSvg color="white" />
      </Hero>
      <CTA
        title="A ajuda financeira para fazer sua empresa <strong>crescer.</strong>"
        color="verde"
        img="video.jpg"
      >
        <Text color="texto" maxW={400} py={8}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          porttitor risus at sapien tristique, bibendum vestibulum sapien
          porttitor. Morbi aliquet luctus dignissim. Curabitur commodo tincidunt
          massa euismod commodo.
        </Text>
      </CTA>
      <HowWorks
        title1="Prospecção"
        desc1="Nossa equipe de atendimento entrará em contato e agendará uma reunião para apresentar a Propter."
        title2="Análise de dados "
        desc2="Nossa equipe de atendimento entrará em contato e agendará uma reunião para apresentar a Propter."
        title3="Pronto! "
        desc3="Nossa equipe de atendimento entrará em contato e agendará uma reunião para apresentar a Propter."
        color="#21D97A"
      />
      <Testimonials />
      <Contact color="verde" />
      <Footer />
    </div>
  );
}
