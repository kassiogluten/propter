import { Box, Flex, Heading, Text, Wrap } from "@chakra-ui/react";

import React from "react";
import { listOfLinks } from "./listOfLinks";

export function List() {
  //console.log(JSON.stringify(listOfLinks));
  return (
    <Box align="center" w="100%" bg="white">
      <Flex
        align="start"
        textAlign="left"
        p="5rem 1rem"
        maxW={1200}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text flex={1} color="azul" fontSize={24}>
          Públicos e Governo
        </Text>

        <Flex h={210} flexWrap="wrap" flexDir="column" flex={2.5}>
          <Card type="publico" listOfLinks={listOfLinks} />
        </Flex>
      </Flex>
    </Box>
  );
}

const Card = ({ listOfLinks, type }) =>
  listOfLinks[type].map((link) => (
    <Text w="full" maxW={200} key={link.url} as="a" href={link.url}>
      {link.title}
    </Text>
  ));
