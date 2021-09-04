import { Box, Flex, VStack, Text } from "@chakra-ui/react";

import React from "react";

export function MSV() {
  return (
    <Box align="center" w="100%">
      <Flex
        p="1rem"
        align="start"
        textAlign="start"
        maxW={1200}
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Card
          title="Visão"
          desc="Diferenciação, ofertar resolutividade e agregar valores."
        />
        <Card
          title="Missão"
          desc="Fornecer soluções de negócios para os empreendedores visando a prosperidade "
        />
        <Card
          title="Valores"
          desc="Comprometimento, transparência, modernidade, responsabilidade e segurança."
        />
      </Flex>
    </Box>
  );
}
const Card = ({ title, desc }) => (
  <VStack bg="white"
    py={8}
    my={6}
    mr={6}
    w="full"
    align="start"
    h={220}
    boxShadow="0px 36px 62px rgba(0, 0, 0, 0.07)"
  >
    <Text pl={6} fontSize={16} fontWeight={600} borderLeft="3px solid black">
      {title}
    </Text>
    <Text maxW={310} pt={6} pl={6} color="texto">
      {desc}
    </Text>
  </VStack>
);
