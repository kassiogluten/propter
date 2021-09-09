import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import React from "react";

import Image from 'next/image'

export function OurMission() {
  return (
    <Box align="center" w="100%" bg="white">
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1200}
        justify="space-between"
        flexDir={{ base: "column-reverse", lg: "row" }}
      >
        <Image 
          height={560}
          width={560}
          alt="Nossa Missão"
          src="/nossa-missao.jpg"
        />
        <VStack flex={1} p={4} align="start" textAlign="start">
          <Text
            fontWeight="600"
            letterSpacing="4px"
            color="transparent"
            bgGradient="linear(to-r, verde -20%, azul 120%)"
            bgClip="Text"
          >
            NOSSA MISSÃO
          </Text>
          <HStack textAlign="start">
            <Text
              mb={4}
              fontSize={{ base: 18, md: 36 }}
              sx={{
                strong: {
                  fontWeight: "700",
                  color: "transparent",
                  bgGradient: "linear(to-r, verde -20%, azul 120%)",
                  bgClip: "Text",
                },
              }}
            >
              Melhorar sua experiência de contabilidade do{" "}
              <strong>seu negócio</strong>
            </Text>
          </HStack>
          <Text pb={12} color="#5D5459">
            Uso intenso de tecnologia, ofertando serviços contábeis
            diferenciador e de qualidade, inovando sempre com utilização de
            ferramentas digitais ágeis e entregando mais valor, além de auxiliar
            os empreendedores nas tomadas de decisões.
          </Text>
          <Button color="cinza" variant="link" as="a" href="/conheca">
            Conheça a Propter
            <ChevronRightIcon color="azul" boxSize="20px" />
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
}
