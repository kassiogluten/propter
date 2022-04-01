import {
  background,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import React from "react";
import {
  FacebookSvg,
  HeartSvg,
  InstagramSvg,
  LogoVerticalSvg,
  TwitterSvg,
} from "../icons";
import Link from 'next/link'


export function Footer() {
  return (
    <Box
      align="center"
      w="100%"
      color="white"
      sx={{
        background:
          "url('/footer-bg.svg') no-repeat center left / contain, #041119",
      }}
    >
      <Flex
        p="3rem 1rem 7rem"
        maxW={1200}
        textAlign={{ base: "center", lg: "start" }}
        justify="space-between"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Link href="/" passHref>
          <Box _hover={{cursor:'pointer'}} alt="Voltar para pagina inicial" flex={1} pb={8}>
            <LogoVerticalSvg />
          </Box>
        </Link>
        <Flex
          flexWrap="wrap"
          flex={2.5}
          w="full"
          justify={{ base: "center", sm: "space-between" }}
        >
          <VStack p={4} align="start" textAlign="start">
            <Heading fontSize={18}>Institucional</Heading>
            <Box
              w="30px"
              h="2px"
              bgGradient="linear(to-r, verde -20%, azul 120%)"
            />
            <Text as="a" href="/conheca" pt={4}>
              Conheça a Propter
            </Text>
            <Text as="a" href="/links">
              Links úteis
            </Text>
            {/* <Text as="a" href="/blog">
              Nosso blog
            </Text> */}
          </VStack>
          <VStack p={4} align="start" textAlign="start">
            <Heading fontSize={18}>Produtos</Heading>
            <Box
              w="30px"
              h="2px"
              bgGradient="linear(to-r, verde -20%, azul 120%)"
            />
            <Text as="a" href="/contabilidade" pt={4}>
              Contabilidade
            </Text>
            <Text as="a" href="seguros">
              Seguros
            </Text>
            <Text as="a" href="/emprestimos-e-financiamentos">
              Financiamentos
            </Text>
            <Text as="a" href="/maquina-de-cartao">
              Máquina de cartão
            </Text>
          </VStack>
          <VStack
            p={4}
            align={{ base: "center", sm: "start" }}
            textAlign="start"
          >
            <Heading fontSize={18}>Redes sociais</Heading>
            <Box
              w="30px"
              h="2px"
              bgGradient="linear(to-r, verde -20%, azul 120%)"
            />
            <Box sx={{ svg: { opacity: 1, mr: 2 } }} pt={4}>
              <InstagramSvg />
              <FacebookSvg />
              <TwitterSvg />
            </Box>
          </VStack>
          <VStack
            p={4}
            w={{ base: "100%", sm: "unset" }}
            align={{ base: "center", sm: "start" }}
            textAlign="start"
          >
            <Heading fontSize={18}>Atendimento</Heading>
            <Box
              w="30px"
              h="2px"
              bgGradient="linear(to-r, verde -20%, azul 120%)"
            />
            <Text as="a" href="mailto:contato@proter.com.br" pt={4}>
              contato@proter.com.br
            </Text>
            <Text as="a" href="tel:33 3321-2121">
              (33) 3321-2121
            </Text>
            <Button
              bgGradient="linear(to-r, azul, verde)"
              colorScheme="none"
              fontSize="12px"
              w="full"
              as="a"
              href="/contato"
            >
              Fale com a gente
            </Button>
          </VStack>
        </Flex>
      </Flex>
      <Flex
        id="copyright"
        flexDir={{ base: "column", sm: "row" }}
        bg="cinzaclaro"
        py={4}
        fontSize=".8rem"
        justify="space-evenly"
      >
        <Text>©2021 Propter - Todos os direitos reservados</Text>
        <Text
          rel="noopener"
          target="_blank"
          as="a"
          href="https://www.instagram.com/suricato.agencia/"
        >
          Feito com <HeartSvg /> por Suricato Agência
        </Text>
      </Flex>
    </Box>
  );
}
