import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

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
        sx={{
          background:
            "linear-gradient(90deg, #041119 0%, rgba(4, 17, 25, 0) 53.78%, rgba(4, 17, 25, 0) 100%), url('/banner1.jpg') no-repeat center center / cover",
        }}
        borderRadius={15}
        color="white"
      >
        <Text my={8} maxW={370} fontSize={{ base: 24, sm: 36 }}>
          Contabilidade Digital Consultiva para <strong>seu negócio.</strong>
        </Text>
        <Button w={{base:"full",sm:"fit-content"}}
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
