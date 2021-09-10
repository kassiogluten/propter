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
            Tudo deu início em 1994 com a Asteco, essa foi a primeira empresa
            que abri. Focada no atendimento contábil ao cliente.
          </Text>
          <Text>
            Com a carteira de clientes em crescimento em 2002 surgiu a
            oportunidade de aquisição de uma unidade contábil. Assim, mudamos o
            nome da empresa para Evidenciar Gestão Contábil, mudamos de endereço
            e ampliamos a equipe.
          </Text>
          <Text>
            A evolução e inovação está no nosso DNA. Logo, passar por um
            processo de modernização foi necessário. Tudo iniciou em 2017, além
            de modernizar a infra estrura física, modernizamos os serviços,
            dando início a Contabilidade Digital e Consultiva.
          </Text>
          <Text>
            Por isso, hoje estamos passando por mais uma mudança, agora a
            Evidenciar é Propter Negócios Contábeis. Queremos ser top of mind
            para os empresários da região. No fim das contas, a Propter é a
            solução para a sua empresa.
          </Text>
        </Stack>
        <VStack p={8} h={270} m={8} flex={1} bg="#F5F6FA" borderRadius={10}>
          <Image zIndex={1} src="joel.jpg" alt="Joel Tristão" />
          <Center boxShadow="0px 3px 34px rgba(0, 0, 0, 0.06)" borderRadius={5} transform="translateY(-25%)" zIndex={0} w={190} h={190} bg="white" flexDir="column">
            <Text fontSize="1rem" color="azul" fontWeight={600}>Joel Tristão</Text>
            <Text color="texto">CEO e Fundador</Text>
          </Center>
        </VStack>
      </Flex>
    </Box>
  );
}
