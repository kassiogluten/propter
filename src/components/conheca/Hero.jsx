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

import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

export function Hero() {
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

        <Box h={450} maxW={{ base: "100%", md: "50%" }} w="full">
          <Swiper navigation={true}>
            <SwiperSlide>
              <Box
                bgSize="cover"
                bgPos="center"
                bgImage="escritorio.jpg"
                h={450}
                w="full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Box
                bgSize="cover"
                bgPos="center"
                bgImage="https://www.sailthru.com/content/uploads/2021/05/photo-1606857521015-7f9fcf423740-scaled.jpeg"
                h={450}
                w="full"
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
      <Wrap
        w="100%"
        overflow="hidden"
        mb={16}
        boxShadow="0px 20px 40px rgba(0, 0, 0, 0.07)"
        bg="white"
        justify="center"
      >
        <Card title="Fundação" desc="Início das operações, 01 de março de 1994">
          <FundacaoSvg />
        </Card>
        <Card title="Colaboradores" desc="Somos dezenas de Propters">
          <ColaboradoresSvg />
        </Card>
        <Card title="Clientes" desc="Atendemos centenas de clientes parceiros">
          <ClientesSvg />
        </Card>
        <Card
          title="Crescimento"
          desc="Nos últimos anos, nossa taxa de crescimento foi de 30% ao ano"
        >
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
