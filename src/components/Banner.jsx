import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

import React from "react";

export function Banner() {
  return (
    <Box align="center" w="100%">
      <Box
        w="100%"
        bgGradient="linear(to-r, cinzaclaro, cinzaescuro)"
        h={250}
      />
      <Flex
        transform="translateY(-50%)"
        flexDir="column"
        px={{ base: "1rem", sm: "3rem" }}
        py={{ base: "2rem", sm: "3rem" }}
        mx="1rem"
        mb={-100}
        align="start"
        textAlign="start"
        maxW={1200}
        justify={{ base: "flex-end", sm: "space-evenly" }}
        h={470}
        borderRadius={20}
        color="white"
        overflow="hidden"
      >
        <Box
          left={0}
          zIndex={1}
          w="full"
          h="100%"
          pos="absolute"
          bgGradient="linear(to-r, #041119, transparent 30%) "
        />
        <Image objectFit="cover" quality={100} alt="Banner1" layout="fill" src="/banner1.jpg" />
        <Text zIndex={2} my={8} maxW={370} fontSize={{ base: 24, sm: 36 }}>
          Contabilidade Digital Consultiva para <strong>seu negócio.</strong>
        </Text>
        <Button
          zIndex={2}
          w={{ base: "full", sm: "fit-content" }}
          fontSize={13}
          as="a"
          href="#solucoes"
          h={50}
          px={{ base: 2, xs: 8 }}
          color="white"
          colorScheme="none"
          bg="azul"
        >
          Conheça nossas soluções
        </Button>
      </Flex>
    </Box>
  );
}
