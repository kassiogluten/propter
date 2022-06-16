import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";

import React from "react";

export function History() {
  return (
    <Box align="center" w="100%" bg="white">
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1200}
        justify="space-between"
        flexDir={{ base: "column", sm: "row" }}
        //flexDir="column"
      >
        <Stack flex={4} maxW={800} spacing={4} textAlign="start">
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
            Nossa <strong>história</strong>
          </Text>
          <Text>
            Iniciamos nossas operações em 1994 com a Asteco, que já era uma
            empresa focada no atendimento ao cliente.
          </Text>
          <Text>
            Em 2002, já em franco crescimento adquirimos uma nova unidade
            contábil. Assim o nome da empresa foi alterado para Evidenciar
            Gestão Contabil. Consequentemente ampliamos nossa equipe de
            colaboradores
          </Text>
          <Text>
            A evolução e inovação está no nosso DNA. Logo, passar por um
            processo de modernização foi necessário. Tudo iniciou em 2017, além
            de modernizar a infraestrura física, modernizamos os serviços, dando
            início a Contabilidade Digital Consultiva.
          </Text>
          <Text>
            Por isso, hoje estamos passando por mais uma mudança, agora a{" "}
            <b>Evidenciar é Propter Negócios Contábeis</b>. Queremos ser top of
            mind para os empresários da região. No fim das contas, a Propter é a
            solução para a sua empresa.
          </Text>
        </Stack>
        <VStack p={8} h={270} m={8} flex={1} bg="#F5F6FA" borderRadius={10}>
          <Image zIndex={1} src="joel.jpg" alt="Joel Tristão" />
          <Center
            boxShadow="0px 3px 34px rgba(0, 0, 0, 0.06)"
            borderRadius={5}
            transform="translateY(-25%)"
            zIndex={0}
            w={190}
            h={190}
            bg="white"
            flexDir="column"
          >
            <Text fontSize="1rem" color="azul" fontWeight={600}>
              Joel Tristão
            </Text>
            <Text color="texto">CEO e Fundador</Text>
          </Center>
        </VStack>
      </Flex>
    </Box>
  );
}
