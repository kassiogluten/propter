import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Center,
  Wrap,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { HowWorks01Svg, HowWorks02Svg, HowWorks03Svg } from "../../icons";
//import { useMyContext } from "../contexts/Context";

export function HowWorks({
  children,
  title1,
  desc1,
  title2,
  desc2,
  title3,
  desc3,
  color,
}) {
  //  const { isModalOpen } = useMyContext();
  return (
    <Box align="center" w="100%">
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1200}
        justify="space-between"
        flexDir="column"
      >
        <Text
          px={4}
          fontWeight="600"
          letterSpacing="4px"
          color="transparent"
          bgGradient="linear(to-r, azul, verde)"
          bgClip="text"
          w="fit-content"
        >
          ENTENDA
        </Text>
        <Text pb={8} px={4} maxW={500} fontSize={{ base: 26, md: 36 }}>
          Como funciona
        </Text>
        <Wrap justify="center" spacing={4}>
          <Card color={color} title={title1} desc={desc1}>
            <HowWorks01Svg color={color} />
          </Card>
          <Card color={color} title={title2} desc={desc2}>
            <HowWorks02Svg color={color} />
          </Card>
          <Card color={color} title={title3} desc={desc3}>
            <HowWorks03Svg color={color} />
          </Card>
        </Wrap>
      </Flex>
    </Box>
  );
}

const Card = ({ children, title, desc, color }) => (
  <VStack
    align="left"
    textAlign="left"
    h={280}
    p={2}
    borderRadius={10}
    bg="white"
    maxW={374}
    pos="relative"
  >
    <Box
      pos="absolute"
      w="90%"
      h={100}
      bgGradient="linear(to-b, transparent 0%, white 100%)"
    />
    {children}
    <Text px={4} fontWeight={700} fontSize={18} color={color}>
      {title}
    </Text>
    <Text pt={2} px={4} color="texto">
      {desc}
    </Text>
  </VStack>
);
