import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>ERRO 404</title>
      </Head>
      <Header />
      <Box align="center" w="100%" bg="cinza" color="white">
        <Flex
          p="5rem 1rem"
          align="center"
          maxW={1200}
          justify="space-between"
          h={300}
          flexDir="column"
        >
          <Heading>Página não encontrada</Heading>
          <Button colorScheme="none" bg="azul" as="a" href="/">
            Voltar
          </Button>
        </Flex>
      </Box>
      <Footer />
    </div>
  );
}
