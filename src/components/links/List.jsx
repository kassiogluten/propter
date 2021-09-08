import {
  Box,
  Flex,
  Heading,
  Text,
  Wrap,
  Input,
  Badge,
  Icon,
  CloseButton,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { listOfLinks } from "./listOfLinks";
import { RiSearchLine } from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";

export function List() {
  //console.log(Object.values(listOfLinks));
  const [typed, setTyped] = useState("");
  const handleChange = (event) => setTyped(event.target.value);

  return (
    <Box align="center" w="100%">
      <Flex
        align="center"
        textAlign="left"
        p="5rem 1rem"
        maxW={1200}
        flexDir="column"
        bg="#F5F6FA"
      >
        <Heading pb={8} fontSize={24}>
          Procurar links úteis
        </Heading>
        <Flex
          w="full"
          as="label"
          flex="1"
          p="4"
          pr="8"
          ml="6"
          maxW={800}
          alignSelf="center"
          color="cinza"
          position="relative"
          bg="white"
          borderRadius={10}
          boxShadow="0px 19px 53px rgba(182, 182, 182, 0.25);"
        >
          <Input
            value={typed}
            onChange={handleChange}
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar jornais, ministérios, governo..."
            _placeholder={{ color: "gray.300" }}
          />
          <Icon color="azul" as={RiSearchLine} fontSize="20" />
        </Flex>

        {typed !== "" && (
          <Text maxW={300} w="full" align="center" m={6}>
            <Icon
              _hover={{ cursor: "pointer", color: "red" }}
              onClick={() => setTyped("")}
              mr={2}
              as={FaWindowClose}
            />
            Exibindo resultados para: <strong>{typed}</strong>
          </Text>
        )}
      </Flex>
      <Flex
        align="center"
        textAlign="left"
        p="5rem 1rem"
        maxW={1200}
        flexDir="column"
        bg="white"
      >
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
                    key={link.url}
                    minW="40%"
                    w="fit-content"
                    as="a"
                    href={link.url}
                    _hover={{ color: "verde" }}
                    pr={2}
                    lineHeight="120%"
                    py={1}
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
