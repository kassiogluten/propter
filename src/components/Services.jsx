import { Box, Flex, Heading, Text, VStack, Wrap } from "@chakra-ui/react";

import React from "react";
import {
  ContabilidadeSvg,
  EmprestimosSvg,
  FinanciamentosSvg,
  MaquinasSvg,
  SegurosSvg,
} from "../icons";

export function Services() {
  return (
    <Box align="center" w="100%" id="solucoes">
      <Flex
        p="5rem 1rem"
        align="start"
        maxW={1200}
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box flex={1}>
          <VStack maxW="500" align="start" textAlign="left">
            <Text
              fontWeight="600"
              letterSpacing="4px"
              color="transparent"
              bgGradient="linear(to-r, verde, azul)"
              bgClip="text"
              w="fit-content"
            >
              NOSSOS SERVIÇOS
            </Text>
            <Text fontSize={{ base: 28, md: 36 }}>
              Soluções para melhorar sua experiência com negócios.
            </Text>
            <Text pt={4} color="texto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              massa dui, egestas vel vulputate at, tincidunt vel dui. Nullam
              luctus est nec porttitor posuere. In rutrum felis interdum nibh
              ullamcorper, nec pellentesque orci facilisis.
            </Text>
          </VStack>
        </Box>
        <Wrap align="center" justify="space-between" flex={1} pt={8}>
          <Card
            full
            link="/contabilidade"
            title="Contabilidade consultiva"
            desc="A contabilidade consultiva é uma evolução da tradicional. É uma nova forma
      que trabalhamos para melhorar a sua experiência de contabilidade da sua
      empresa."
          >
            <ContabilidadeSvg color="#2659FF" />
          </Card>
          <Card link="/seguros"
            title="Seguros"
            desc="Encontre o seguro ideal para você e para a sua família. São diversas modalidades para escolher."
          >
            <SegurosSvg color="#2659FF" />
          </Card>
          <Card link="/emprestimos-e-financiamentos"
            title="Empréstimos "
            desc="Conheça o melhor crédito do mercado, que pode te dar aquela força no orçamento."
          >
            <EmprestimosSvg color="#21D97A" />
          </Card>
          <Card link="/emprestimos-e-financiamentos"
            title="Financiamentos"
            desc="Seu financiamento imobiliário com a melhor taxa do mercado."
          >
            <FinanciamentosSvg color="#2659FF" />
          </Card>
          <Card link="/maquina-de-cartao"
            title="Máquinas de cartão"
            desc="A Propter tem a máquina de cartão ideal para você que é empreendedor."
          >
            <MaquinasSvg color="#21D97A" />
          </Card>
        </Wrap>
      </Flex>
    </Box>
  );
}

const Card = ({ title, desc, children,link, full }) => (
  <VStack _hover={{
    cursor: "pointer",
    bg:"white"
  }} as="a" href={link} p={2} w={full ? "full" : "47%"} align="start" textAlign="start">
    {children}
    <Heading fontSize={18}>{title}</Heading>
    <Text maxW={full ? "full" : 218} color="texto">
      {desc}
    </Text>
  </VStack>
);
