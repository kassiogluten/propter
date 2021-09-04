import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

import React from "react";
//import { useMyContext } from "../contexts/Context";

export function History() {
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
          align="flex-end"
        >
          <Text
            fontWeight="600"
            letterSpacing="4px"
            color="transparent"
            bgGradient="linear(to-r, verde 0%, azul 50%)"
            bgClip="Text"
            maxW={575}
            w="full"
          >
            NOSSA HISTÓRIA
          </Text>
          <Text
            maxW={575}
            color="white"
            pr={{ base: "inherit", md: 24 }}
            px={{ base: 4, md: 0 }}
            fontSize={{ base: 28, md: 38 }}
          >
            Assista ao vídeo e conheça sobre nós.
          </Text>
        </VStack>
        <Box onClick={()=>alert('Vídeo em produção')} _hover={{
            cursor: "pointer",
            filter: "brightness(1.1)",
          }}
          bgSize="cover"
          bgPos="center"
          bgImage="video.jpg"
          h={{ base: 300, md: 454 }}
          w="full"
        ></Box>
      </Flex>
    </Box>
  );
}
