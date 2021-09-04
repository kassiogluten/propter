import {
  background,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
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
//import { useMyContext } from "../contexts/Context";

export function Footer() {
  //  const { isModalOpen } = useMyContext();
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
        <Box flex={1} pb={8}>
          <LogoVerticalSvg />
        </Box>
        <Wrap flex={2.5} w="full" justify="space-between">
          <VStack p={4} align="start" textAlign="start">
            <Heading fontSize={18}>Institucional</Heading>
            <Box
              w="30px"
              h="2px"
              bgGradient="linear(to-r, verde -20%, azul 120%)"
            />
            <Text as="a" href="#" pt={4}>
              Conheça a Propter
            </Text>
            <Text as="a" href="#">
              Trabalhe conosco
            </Text>
            <Text as="a" href="#">
              Links úteis
            </Text>
            <Text as="a" href="#">
              Nosso blog
            </Text>
          </VStack>
          <VStack p={4} align="start" textAlign="start">
            <Heading fontSize={18}>Produtos</Heading>
            <Box
              w="30px"
              h="2px"
              bgGradient="linear(to-r, verde -20%, azul 120%)"
            />
            <Text as="a" href="#" pt={4}>
              Contabilidade
            </Text>
            <Text as="a" href="#">
              Seguros
            </Text>
            <Text as="a" href="#">
              Financiamentos
            </Text>
            <Text as="a" href="#">
              Máquina de cartão
            </Text>
          </VStack>
          <VStack p={4} align="start" textAlign="start">
            <Heading fontSize={18}>Redes sociais</Heading>
            <Box
              w="30px"
              h="2px"
              bgGradient="linear(to-r, verde -20%, azul 120%)"
            />
            <Box sx={{svg:{opacity:1, mr:2}}} pt={4}>
              <InstagramSvg />
              <FacebookSvg />
              <TwitterSvg />
            </Box>
          </VStack>
          <VStack p={4} align="start" textAlign="start">
            <Heading fontSize={18}>Atendimento</Heading>
            <Box
              w="30px"
              h="2px"
              bgGradient="linear(to-r, verde -20%, azul 120%)"
            />
            <Text as="a" href="#" pt={4}>
              contato@proter.com.br
            </Text>
            <Text as="a" href="#">
              (33) 3321-2121
            </Text>
            <Button
              colorScheme="none"
              fontSize="13px"
              w="full"
              bg="azul"
              as="a"
              href="#"
            >
              Fale com a gente
            </Button>
          </VStack>
        </Wrap>
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
        <Text>
          Feito com <HeartSvg /> por Suricato Agência
        </Text>
      </Flex>
    </Box>
  );
}
