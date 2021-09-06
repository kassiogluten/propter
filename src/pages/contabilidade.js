import { Box, HStack, Stack, Text } from "@chakra-ui/layout";
import Head from "next/head";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { CTA } from "../components/servicos/CTA";
import { Hero } from "../components/servicos/Hero";
import { HowWorks } from "../components/servicos/HowWorks";
import { Services } from "../components/servicos/Services";
import { Testimonials } from "../components/Testimonials";
import { ClockSvg, ContabilidadeSvg, ManSvg, OutlineHeartSvg } from "../icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contabilidade Digital Consultiva | Propter</title>
      </Head>
      <Header />
      <Hero
        color="azul"
        title="Contabilidade Digital Consultiva"
        desc="É a capacidade da empresa de serviços contábeis de ofertar serviços diferenciados  e de qualidade para seus clientes  usando intensamente a tecnologia, inovando sempre e entregando mais valor. "
      >
        <ContabilidadeSvg color="white" />
      </Hero>
      <CTA
        title="O futuro da contabilidade está na <strong>Propter.</strong>"
        color="azul"
        img="contabilidade.svg"
      >
        <Stack spacing={4} maxW={420} py={12}>
          <HStack>
            <Box>
              <OutlineHeartSvg />
            </Box>
            <Text>
              Digitalizamos a contabilidade para agilizar processos, mas sem
              perder a sua essência de humanização.
            </Text>
          </HStack>
          <HStack>
            <Box>
              <ClockSvg />
            </Box>
            <Text>
              Economize tempo para focar no crescimento da sua empresa, nossa
              solução contábil é de forma online e rápida.
            </Text>
          </HStack>
          <HStack>
            <Box>
              <ManSvg />
            </Box>
            <Text>
              Conte com uma assessoria mais próxima, você terá um contador
              exclusivo para o seu negócio.
            </Text>
          </HStack>
        </Stack>
      </CTA>
      <HowWorks
        title1="Prospecção"
        desc1="Nossa equipe de atendimento entrará em contato e agendará uma reunião para apresentar a Propter."
        title2="Diagnóstico "
        desc2="Nossa equipe faz um estudo do cliente e apresenta uma solução."
        title3="Integração "
        desc3="O cliente se torna um parceiro Propter e é apresentado ao nosso sistema de trabalho."
        color={"#2659FF"}
      />
      <Services />
      <Testimonials bg="white" color="cinza" />
      <Contact color="azul" />
      <Footer />
    </div>
  );
}
