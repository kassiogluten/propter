import {
  Box,
  Flex,
  VStack,
  Text,
  Grid,
  GridItem,
  Wrap,
  Center,
} from "@chakra-ui/react";

import React from "react";
import {
  ContactMailSvg,
  ContactPhoneSvg,
} from "../icons";
import { ContactForm } from "./ContactForm";

export function Contact({color}) {
  return (
    <>
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
              SAIBA MAIS
            </Text>
            <Text
              maxW={575}
              color="white"
              pr={{ base: "inherit", md: 24 }}
              fontSize={24}
            >
              Preencha nosso formulário que entraremos em contato com você.
            </Text>
          </VStack>
          <Box
            bgSize="cover"
            bgPos="center"
            bgImage="contato.jpg"
            h={{ base: 300, md: 454 }}
            w="full"
          ></Box>
        </Flex>
      </Box>
      <Box align="center" w="100%">
        <Flex
          p="3rem 1rem"
          align="center"
          maxW={1200}
          bg="blue.50"
          justify="space-between"
          flexDir={{ base: "column", md: "row" }}
        >
          <ContactForm color={color} />

          <Wrap my={8} maxW={550} align="center" justify="space-between" flex={1}>
            <Grid templateColumns="auto auto">
              <Box
                borderRadius={10}
                p={2}
                bg="#2659FF1A"
                mr={4}
                as={GridItem}
                rowSpan={2}
              >
                <ContactMailSvg />
              </Box>
              <Text align="start">Nos envie um e-mail</Text>
              <Text align="start" fontWeight={600}>
                contato@proter.com.br
              </Text>
            </Grid>
            <Grid pb={4} templateColumns="auto auto">
              <Box
                borderRadius={10}
                p={2}
                bg="#2659FF1A"
                mr={4}
                as={GridItem}
                rowSpan={2}
              >
                <ContactPhoneSvg />
              </Box>
              <Text align="start">Nos ligue</Text>
              <Text align="start" fontWeight={600}>
                (33) 3321-2121
              </Text>
            </Grid>

            <Center w="100%" maxW={600} h={230} bg="gray.200" borderRadius={10}>
              <Text opacity={0.3}>Mapa</Text>
            </Center>
          </Wrap>
        </Flex>
      </Box>
    </>
  );
}
