import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";

import React from "react";
import {
  ClientesSvg,
  ColaboradoresSvg,
  CrescimentoSvg,
  FundacaoSvg,
} from "../../icons";
//import { useMyContext } from "../contexts/Context";

export function Hero() {
  //  const { isModalOpen } = useMyContext();
  return (
    <Box align="center" w="100%" bg="cinza">
      <Flex
        align="center"
        flex={1}
        maxW={1920}
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
        //flexDir="column"
      >
        <VStack
          py="5rem"
          pl={{ base: 0, md: 4 }}
          w="full"
          textAlign={{ base: "center", md: "start" }}
          align={{ base: "center", md: "flex-end" }}
        >
          <Box
            boxShadow="15px 15px #21D97A"
            bg="azul"
            p={8}
            borderStartStartRadius={50}
            mr={{ base: 4, md: 14 }}
            ml={{ base: 4, md: 0 }}
          >
            <Text
              w="full"
              maxW={450}
              color="white"
              pr={{ base: "inherit", md: 24 }}
              px={{ base: 4, md: 0 }}
              fontSize={14}
            >
              Bem-vindo à Propter
            </Text>
            <Text
              maxW={450}
              color="white"
              pr={{ base: "inherit", md: 24 }}
              px={{ base: 4, md: 0 }}
              fontSize={{ base: 24, md: 32 }}
            >
              Somos mais que um escritório de contabilidade.
            </Text>
          </Box>
        </VStack>
        <Box
          bgSize="cover"
          bgPos="center"
          bgImage="escritorio.jpg"
          h={450}
          w="full"
        ></Box>
      </Flex>
      <Wrap
        w="100%"
        overflow="hidden"
        mb={16}
        boxShadow="0px 20px 40px rgba(0, 0, 0, 0.07)"
        bg="white"
        justify="center"
      >
        <Card title="Fundação" desc="Nossa chegada foi dia 28 de março de 1994">
          <FundacaoSvg />
        </Card>
        <Card title="Colaboradores" desc="Somos cerca de 19 Propters">
          <ColaboradoresSvg />
        </Card>
        <Card title="Clientes" desc="Atendemos cerca de 50 clientes parceiros">
          <ClientesSvg />
        </Card>
        <Card title="Crescimento" desc="Crescemos mais de 20% ao ano">
          <CrescimentoSvg />
        </Card>
      </Wrap>
    </Box>
  );
}

const Card = ({ children, title, desc }) => (
  <VStack p="30px 13px" textAlign="start" align="start">
    <HStack>
      {children}
      <Text fontWeight={600}>{title}</Text>
    </HStack>
    <Text color="texto" maxW={170}>
      {desc}
    </Text>
  </VStack>
);
