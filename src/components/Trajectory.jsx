import {
  Box,
  Circle,
  Flex,
  Text,
} from "@chakra-ui/react";

import React from "react";

export function Trajectory() {
  return (
    <Box bg="#F5F6FA" align="center" w="100%">
      <Flex
        p="5rem 1rem 0"
        textAlign="center"
        maxW={1000}
        justify="space-between"
        flexDir="column"
      >
        <Text
          alignSelf="center"
          fontWeight="600"
          letterSpacing="4px"
          color="transparent"
          bgGradient="linear(to-r, verde, azul)"
          bgClip="text"
          w="fit-content"
        >
          TRAJETÓRIA
        </Text>
        <Text mb={4} fontSize={{ base: 24, md: 36 }}>
          Do nascimento à evolução
        </Text>

        <Flex py={4} align="center" flexDir="column">
          <TimeLine />
          <CardBlue
            year="1994"
            desc="Tudo se inicia neste ano com as operações na área contábil com no nome
            Asteco - Assessoria Técnica Contábil"
          />
          <CardGreen
            year="2002"
            desc="Nasce neste ano a Evidenciar Contabilidade. Com mudança para um novo
      endereço e aquisição de um unidade contábil aumentando a carteira de
      clientes ."
          />
          <CardBlue
            year="2008"
            desc="Realizamos uma alteração nome para Evidenciar Gestão Contábil. Um momento especial para nós, pois adquirimos nossa sede própria.
            Tudo se inicia neste ano com as operações na área contábil com no nome
            Asteco - Assessoria Técnica Contábil"
          />
          <CardGreen
            year="2018"
            desc="Em 2017 realizamos melhorias e modernização da infraestrutura física da sede. E em 2018 começamos a implementação contabilidade digital e consultiva .
            "
          />
          <CardBlue
            year="HOJE"
            desc="Passamos por uma transformação, a Evidenciar se evolui e se transforma na Propter, que a missão é entregar ao empresário uma contabilidade digital e consultiva."
          />
        </Flex>
      </Flex>
    </Box>
  );
}

const CardBlue = ({ year, desc }) => (
  <Flex py={8} flexWrap="wrap" w="full" maxW={900} justify="space-between">
    <Text
      zIndex={2}
      w={{ base: "100%", md: "unset" }}
      textAlign="right"
      mb={4}
      fontSize={{ base: 76, md: 133 }}
      fontWeight="800"
      color="transparent"
      bgGradient="linear(to-t, azul 20%, white 100%)"
      bgClip="Text"
    >
      {year}
    </Text>
    <Box
      mt={4}
      mb={-4}
      sx={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
        filter: "drop-shadow(0px -68px 67px rgba(214, 214, 214, 0.26))",
        borderRadius: "20px",
      }}
      w={{ base: 220, md: 338 }}
      h={198}
      p={5}
      textAlign="start"
      fontSize={{ base: 12, md: 14 }}
      color="#5D5459"
    >
      {desc}
    </Box>
  </Flex>
);

const CardGreen = ({ year, desc }) => (
  <Flex
    py={8}
    flexWrap="wrap-reverse"
    maxW={900}
    w="full"
    justify={{ base: "flex-end", md: "space-between" }}
  >
    <Box
      mt={4}
      mb={-4}
      sx={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
        filter: "drop-shadow(0px -68px 67px rgba(214, 214, 214, 0.26))",
        borderRadius: "20px",
      }}
      w={{ base: 220, md: 338 }}
      h={198}
      p={5}
      textAlign="start"
      fontSize={{ base: 12, md: 14 }}
      color="#5D5459"
    >
      {desc}
    </Box>
    <Text
      zIndex={2}
      w={{ base: "100%", md: "unset" }}
      textAlign="left"
      mb={4}
      fontSize={{ base: 76, md: 133 }}
      fontWeight="800"
      color="transparent"
      bgGradient="linear(to-t, verde 20%, white 100%)"
      bgClip="Text"
    >
      {year}
    </Text>
  </Flex>
);

const Dot = ({ color }) => (
  <Circle
    border="2px solid white"
    boxShadow={`0 0 0 3px ${color}`}
    w={4}
    h={4}
    bg={color}
    mb={1}
  />
);

const TimeLine = () => (
  <Box left="48%" pos="absolute">
    <Box pt={{ base: "130px", md: 28 }} width="20" height="1555">
      <Dot color="#2659FF" />
      <Box ml="6px" width="1" height={{ base: 380, md: 260 }} bg="#DCE3FF" />
      <Dot color="#21D97A" />
      <Box ml="6px" width="1" height={{ base: 375, md: 260 }} bg="#E0F3ED" />
      <Dot color="#2659FF" />
      <Box ml="6px" width="1" height={{ base: 370, md: 260 }} bg="#DCE3FF" />
      <Dot color="#21D97A" />
      <Box ml="6px" width="1" height={{ base: 365, md: 260 }} bg="#E0F3ED" />
      <Dot color="#2659FF" />
    </Box>
  </Box>
);

const TimeLineSvg = () => (
  <Box pos="absolute">
    <svg
      width="20"
      height="1555"
      viewBox="0 0 20 1555"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="960" width="4" height="260" fill="#E0F3ED" />
      <rect x="8" y="690" width="4" height="260" fill="#DCE3FF" />
      <rect x="8" y="400" width="4" height="290" fill="#E0F3ED" />
      <rect x="8" y="125" width="4" height="270" fill="#DCE3FF" />

      <circle cx="10" cy="1210" r="9" stroke="#2659FF" strokeWidth="2" />
      <circle cx="10" cy="1210" r="6.42857" fill="#2659FF" />
      <circle cx="10" cy="960" r="9" stroke="#21D97A" strokeWidth="2" />
      <circle cx="10" cy="960" r="6.42857" fill="#21D97A" />
      <circle cx="10" cy="690" r="9" stroke="#2659FF" strokeWidth="2" />
      <circle cx="10" cy="690" r="6.42857" fill="#2659FF" />
      <circle cx="10" cy="395" r="9" stroke="#21D97A" strokeWidth="2" />
      <circle cx="10" cy="395" r="6.42857" fill="#21D97A" />
      <circle cx="10" cy="130" r="9" stroke="#2659FF" strokeWidth="2" />
      <circle cx="10" cy="130" r="6.42857" fill="#2659FF" />
    </svg>
  </Box>
);
