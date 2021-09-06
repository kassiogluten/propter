import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Image,
} from "@chakra-ui/react";

import React from "react";

export function CTA({ title, color,img, children }) {
  return (
    <Box align="center" w="100%" bg="white">
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1000}
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <VStack align="start" textAlign="left">
          <Text
            fontSize={24}
            maxW={390}
            sx={{ strong: { fontWeight: "700", color: color } }}
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          {children}
          <Button colorScheme="none" as="a" href="#contato" fontSize={12} h={50} w="100%" maxW={350} bg={color} color="white">
            Venha conversar com a gente
          </Button>
        </VStack>
        <Image bgSize="contain" w="full" maxW={500} p={8} alt="Serviços Propter" src={img}></Image>
      </Flex>
    </Box>
  );
}
