import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Wrap,
  VStack,
  Image,
} from "@chakra-ui/react";

const team = [
  { name: "Alidiane Oliveira", job: "Relacionamento", img:"team1.jpg" },
  { name: "Harlem Santiago", job: "Recursos Humanos", img:"team2.jpg" },
  { name: "Luana Fernandes", job: "Recursos Humanos", img:"team3.jpg" },
  { name: "Márcio Santos", job: "Logística", img:"team4.jpg" },
  { name: "Camila Neves", job: "Recursos Humanos", img:"team5.jpg" },
  { name: "Amanda Lopes", job: "R.H e Logística", img:"team6.jpg" },
  { name: "Ana Laura", job: "Logística", img:"team7.jpg" },
  { name: "Mariane Miranda", job: "Contábil/Fiscal", img:"team8.jpg" },
  { name: "João Marcos", job: "Contábil/Fiscal", img:"team9.jpg" },
  { name: "Andreisa Pedra", job: "Contábil/Fiscal", img:"team10.jpg" },
  { name: "Luciana Barra", job: "Contábil/Fiscal", img:"team11.jpg" },
  { name: "Laís Assis", job: "Recursos Humanos", img:"team12.jpg" },
  { name: "Maria Luiza Assis", job: "Contábil/Fiscal", img:"team13.jpg" },
  { name: "Daniela Martins", job: "Contábil/Fiscal", img:"team14.jpg" },
  { name: "Regiene Ribeiro", job: "Contábil/Fiscal", img:"team15.jpg" },
  { name: "Fabiana Gomes", job: "Recursos Humanos", img:"team16.jpg" },
  { name: "Letícia Ferreira", job: "Contábil/Fiscal", img:"team17.jpg" },
  { name: "Samantha Oliveira", job: "Recursos Humanos", img:"team18.jpg" },
  { name: "Lidiane Rezende", job: "Contábil/Fiscal", img:"team19.jpg" }
];

export function Team() {
  return (
    <Box align="center" w="100%" bg="#F5F6FA">
      <Flex p="5rem 1rem" align="center" maxW={1200} flexDir="column">
        <Text
          px={4}
          fontWeight="600"
          letterSpacing="4px"
          color="transparent"
          bgGradient="linear(to-r, azul, verde)"
          bgClip="text"
          w="fit-content"
        >
          EQUIPE
        </Text>
        <Text pb={8} px={4} maxW={500} fontSize={{ base: 26, md: 36 }}>
          Conheça nossos Propters
        </Text>
        <Wrap justify="center" spacing={4}>
          {team.map((team) => (
            <Card
              key={team.name}
              img={team.img}
              name={team.name}
              job={team.job}
            />
          ))}
        </Wrap>
      </Flex>
    </Box>
  );
}

const Card = ({ img, name, job }) => (
  <VStack
    borderRadius={10}
    boxShadow="0px 36px 62px rgba(0, 0, 0, 0.06)"
    w={156}
    h={187}
    bg="white"
    justify="center"
  >
    <Image borderRadius={5} src={img} alt={name}></Image>
    <Text>{name}</Text>
    <Text color="azul">{job}</Text>
  </VStack>
);
