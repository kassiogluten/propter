import { Box, Flex, Stack, Text, VStack, Wrap, Button } from "@chakra-ui/react";

import React from "react";

export function Hero({ title, desc, color, children }) {
  return (
    <Box align="center" w="100%" bg="white">
      <Flex
        align="center"
        flex={1}
        maxW={1920}
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
        bg={color}
      >
        <VStack
          pl={{ base: 0, md: 2 }}
          w="full"
          textAlign={{ base: "center", md: "start" }}
          align={{ base: "center", md: "flex-end" }}
        >
          <Box p={8}>
            <Stack
              align="center"
              justify={{ base: "center", md: "start" }}
              flexDir={{ base: "column", md: "row" }}
            >
              <Box pr={8}>{children}</Box>
              <Text
                maxW={500}
                color="white"
                pr={{ base: "inherit", md: 24 }}
                px={{ base: 4, md: 0 }}
                fontSize={{ base: 24, md: 32 }}
              >
                {title}
              </Text>
            </Stack>
            <Text
              w="full"
              maxW={590}
              color="white"
              fontSize={14}
              p="1rem 0 5rem"
              pl={{ base: 0, md: "95px" }}
            >
              {desc}
            </Text>
            <Button colorScheme="none" fontSize={13}
              h={50}
              ml={{ base: 0, md: "95px" }}
              maxW={350}
              w="100%"
              color={color}
              bg="white"
            >
              Venha conversar com a gente
            </Button>
          </Box>
        </VStack>
        <Box
          bgSize="cover"
          bgPos="center"
          bgImage="servicos.jpg"
          minH={{ base: 200, md: 450 }}
          w="full"
        />
      </Flex>
      <Wrap
        py="2rem"
        w="100%"
        maxW={1200}
        overflow="hidden"
        bg="white"
        justify="center"
        align="center"
        borderBottomWidth="2px"
        borderColor="cinza.200"
      >
        <Text w={{ base: "full", lg: "fit-content" }}>Nossos clientes</Text>
        <Box borderRadius={5} bg="gray.200" w={105} h={12} />
        <Box borderRadius={5} bg="gray.200" w={105} h={12} />
        <Box borderRadius={5} bg="gray.200" w={105} h={12} />
        <Box borderRadius={5} bg="gray.200" w={105} h={12} />
        <Box borderRadius={5} bg="gray.200" w={105} h={12} />
        <Box borderRadius={5} bg="gray.200" w={105} h={12} />
        <Box borderRadius={5} bg="gray.200" w={105} h={12} />
        <Box borderRadius={5} bg="gray.200" w={105} h={12} />
      </Wrap>
    </Box>
  );
}
