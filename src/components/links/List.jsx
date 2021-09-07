import { Box, Flex, Heading, Text, Wrap, Input, Badge } from "@chakra-ui/react";

import React, { useState } from "react";
import { listOfLinks } from "./listOfLinks";

export function List() {
  //console.log(Object.values(listOfLinks));
  const [typed, setTyped] = useState("");
  const handleChange = (event) => setTyped(event.target.value);

  return (
    <Box align="center" w="100%" bg="white">
      <Flex
        align="center"
        textAlign="left"
        p="5rem 1rem"
        maxW={1200}
        flexDir="column"
      >
        <Input h={50} borderRadius={10}
          value={typed}
          onChange={handleChange}
          placeholder="Buscar jornais, ministérios, governo..."
          size="sm"
        />
        {typed !== "" && (
          <Badge maxW={300} w="full" align="center" m="8px">Exibindo resultados para: {typed}</Badge>
        )}
        {Object.keys(listOfLinks).map((value) => (
          <Flex
            borderBottom="1px solid #DCE3FF"
            w="full"
            p="2rem 1rem"
            flexDir={{ base: "column", lg: "row" }}
            key={value}
          >
            <Text py={4} flex={1} color="azul" fontSize={24}>
              {value}
            </Text>
            <Flex
              py={4}
              maxH={{ base: "unset", md: 360 }}
              flexWrap="wrap"
              flexDir="column"
              flex={3}
            >
              {listOfLinks[value]
                .filter((link) =>
                  link.title.toUpperCase().includes(typed.toUpperCase())
                )
                .map((link) => (
                  <Text
                    minW="40%"
                    w="fit-content"
                    as="a"
                    href={link.url}
                    _hover={{ color: "verde" }}
                    pr={2}
                    lineHeight="120%"
                    py={1}
                    key={link.url}
                  >
                    - {link.title}
                  </Text>
                ))}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

/*  <Text key={link.url} as="a" href={link.url}>
   {link.title}
 </Text> */
