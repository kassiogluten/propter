import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import React from "react";
import { AgiSvg, EcoSvg, PreSvg, SecSvg } from "../icons";

export function Why() {
  return (
    <Box align="center" w="100%">
      <Flex
        flexDir={{ base: "column", md: "row" }}
        p="2rem"
        m={"1rem"}
        align="center"
        textAlign="start"
        maxW={1200}
        justify="space-around"
        minH={297}
        sx={{
          background:
            "url('/footer-bg.svg') no-repeat center left / contain, #08202F",
        }}
        borderRadius={20}
        color="white"
      >
        <Heading fontSize={24}>Porque a Propter</Heading>
        <VStack minW={100} mt={8} align="start">
          <AgiSvg />
          <Heading fontSize={18}>Agilidade</Heading>
        </VStack>
        <VStack minW={100} mt={8} align="start">
          <PreSvg />
          <Heading fontSize={18}>Precisão</Heading>
        </VStack>
        <VStack minW={100} mt={8} align="start">
          <SecSvg />
          <Heading fontSize={18}>Segurança</Heading>
        </VStack>
        <VStack minW={100} mt={8} align="start">
          <EcoSvg />
          <Heading fontSize={18}>Economia</Heading>
        </VStack>
      </Flex>
    </Box>
  );
}
