import { Text } from "@chakra-ui/layout";
import Head from "next/head";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CTA } from "../components/servicos/CTA";
import { Hero } from "../components/servicos/Hero";
import { HowWorks } from "../components/servicos/HowWorks";
import { Testimonials } from "../components/Testimonials";
import { MaquinasSvg } from "../icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Máquina de cartão | Propter</title>
      </Head>
      <Header />
      <Hero
        color="verde"
        title="Máquina de cartão"
        desc="Facilite o pagamento de seus clientes com nossas máquinas de cartões. Oferecemos diversos tipos para atender melhor seu negócio.
        "
      >
        <MaquinasSvg color="white" />
      </Hero>
      <CTA
        title="A melhor forma de receber dos seus clientes no seu <strong>negócio.</strong>"
        color="verde"
        img="video.jpg"
      >
        <Text color="texto" maxW={400} py={8}>
          Muito mais do que só uma Máquina de recebimento, nós te ajudamos em
          todo o processo após a sua venda acontecer
        </Text>
      </CTA>
      <HowWorks
        title1="Escolha"
        desc1="Escolha a máquina de cartão ideial para o seu negócio."
        title2="Gerencie "
        desc2="Gerencie as suas vendas de onde estiver em tempo real"
        title3="Rentabilidade "
        desc3="Você simula suas taxas em tempo real com custo comprador."
        color="#21D97A"
      />
      <Testimonials />
      <Contact color="verde" />
      <Footer />
    </div>
  );
}
