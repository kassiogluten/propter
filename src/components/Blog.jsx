import { Box, Flex, Heading } from "@chakra-ui/react";

import React from "react";

export function Blog() {
  return (
    <Box align="center" w="100%">
      <Flex
        p="5rem 1rem"
        align="center"
        maxW={1200}
        bg="blue.50"
        justify="space-between"
        h={700}
        flexDir={{ base: "column", sm: "row" }}
        //flexDir="column"
      >
        <Heading>Blog</Heading>
      </Flex>
    </Box>
  );
}