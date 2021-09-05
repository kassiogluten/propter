import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Center,
  Wrap,
  VStack,
} from "@chakra-ui/react";

import React from "react";

const services = [
  "Processamento de Folha de Pagamento",
  "Processamento de Impostos",
  "Processamento Obrigações Acessórias",
  "Regustros em Órgãos Federais/Estaduais/Municipais",
  "Liberação de Alvarás",
  "Padronização dos Serviços",
  "Emissão de Relatórios Contábeis",
  "Presença do Contador",
  "Uso da Tecnologia",
  "Planejamento Tributário",
  "Ferramentas de Automação de Segurança",
  "Consultoria Financeira",
  "Consultoria Estratégica",
  "Terceirização do Financeiro BPO",
  "Alimentação do Sistema",
  "Responsável pelas Informações",
  "Concorrentes",
  "Perfil dos Clientes",
  "Precificação",
  "Crescimento",
  "Relacionamento",
];

export function Services() {
  return (
    <Box align="center" w="100%" bg="cinza" color="white">
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1200}
        justify="space-between"
        flexDir="column"
      >
        <Text
          px={4}
          fontWeight="600"
          letterSpacing="4px"
          color="transparent"
          bgGradient="linear(to-r, azul, verde)"
          bgClip="text"
          w="fit-content"
        >
          SERVIÇOS
        </Text>
        <Text pb={8} px={4} maxW={500} fontSize={{ base: 26, md: 36 }}>
          O que nós vamos fazer
        </Text>
        <Wrap justify="center" spacing={6}>
          {services.map((value) => (
            <Box
              textAlign="left"
              key={value}
              w="100%"
              h={111}
              maxW={350}
              bgGradient="linear(to-b, #0A2739 0%, rgba(10, 39, 57, 0) 100%)"
              borderRadius={10}
            >
              <Text mt={4} mb={8} pl={4} borderLeft="2px solid white">
                {value}
              </Text>
            </Box>
          ))}
        </Wrap>
      </Flex>
    </Box>
  );
}
