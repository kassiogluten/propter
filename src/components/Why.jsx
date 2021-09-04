import { Box, Flex, Heading, Text, VStack, Wrap } from "@chakra-ui/react";

import React from "react";
import { AgiSvg, ChevronSvg, EcoSvg, PreSvg, SecSvg } from "../icons";

export function Why() {
  return (
    <Box align="center" w="100%">
      <Flex
        pos="relative"
        flexDir={{ base: "column", md: "row" }}
        p="3rem 2rem"
        m={"1rem"}
        align="center"
        textAlign="start"
        maxW={1200}
        justify="space-between"
        minH={297}
        sx={{
          background:
            "url('/footer-bg.svg') no-repeat center left / contain, #08202F",
        }}
        borderRadius={20}
        color="white"
      >
        <Box pos="absolute" top={-24} left="50%" transform="translateX(-50%)">
          <ChevronSvg />
        </Box>
        <Box>
          <Heading py={4} fontSize={24}>
            Porque a Propter
          </Heading>
        </Box>
        <Wrap pl={4} flex={1} justify="space-evenly">
          <Card
            title="Agilidade"
            desc="Uso intenso de tecnologia permitindo a velocidade da informação e interatividade maior com o cliente."
          >
            <AgiSvg />
          </Card>
          <Card
            title="Precisão"
            desc="Exatidão e padronização no processamento das informações utilizando um ecossistema contábil digital.
"
          >
            <PreSvg />
          </Card>
          <Card
            title="Segurança"
            desc="Firmeza e estabilidade em todos os processos realizados "
          >
            <SecSvg />
          </Card>
          <Card
            title="Economia"
            desc="Redução intensa de tempo e de gastos com atividades manuais."
          >
            <EcoSvg />
          </Card>
        </Wrap>
      </Flex>
    </Box>
  );
}

const Card = ({ children, title, desc }) => (
  <VStack
    p={2}
    minW={100}
    maxW={190}
    pt={{ base: 8, md: 0 }}
    align={{ base: "center", sm: "start" }}
    textAlign={{ base: "center", sm: "start" }}
  >
    {children}
    <Heading fontSize={18}>{title}</Heading>
    <Text>{desc}</Text>
  </VStack>
);
