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
  {
    name: "ALIDIANE DAMASCENO DE OLIVEIRA FERREIRA ",
    job: "Relacionamento",
    img: "ALIDIANE.jpg",
  },
  {
    name: "ANA LUIZA DE SOUZA TEIXEIRA ",
    job: "Sucesso do cliente",
    img: "ANA LUIZA.jpg",
  },
  {
    name: "ANNA CLAUDIA DE OLIVEIRA BARBOSA ",
    job: "Recursos Humanos",
    img: "ANNA CLAUDIA.jpg",
  },
  {
    name: "ANNA LAURA DE OLIVEIRA FERREIRA ",
    job: "Logística",
    img: "ANNA LAURA.jpg",
  },
  {
    name: "BIANCA DEYSE AQUINO DA SILVA ",
    job: "Sucesso do cliente",
    img: "BIANCA.jpg",
  },
  {
    name: "DAVIDSON SERVULO FAGUNDES DE LANES  ",
    job: "Contábil Fiscal",
    img: "DAVIDSON.jpg",
  },
  {
    name: "ESTHER DE MOURA HEMERICK ",
    job: "Contábil Fiscal",
    img: "ESTHER.jpg",
  },
  {
    name: "KARINE KEREN ANDRADE FREITAS ",
    job: "Recursos Humanos",
    img: "KARINE.jpg",
  },
  {
    name: "KEITTY DAYANA DOS SANTOS LOURES ",
    job: "Contábil Fiscal",
    img: "KEITTY.jpg",
  },
  {
    name: "LETICIA MARIA FERREIRA ",
    job: "Contábil Fiscal",
    img: "LETICIA.jpg",
  },
  {
    name: "LIDIANE DE SOUZA REZENDE ",
    job: "Contábil Fiscal",
    img: "LIDIANE.jpg",
  },
  {
    name: "LUANA FERNANDES DE FARIA ",
    job: "Recursos Humanos",
    img: "LUANA.jpg",
  },
  {
    name: "MARIA LUIZA DE ASSIS PIRES ",
    job: "Contábil Fiscal",
    img: "MARIA LUIZA.jpg",
  },
  {
    name: "PRISCILLA DE CASTRO E SILVA ",
    job: "Contábil Fiscal",
    img: "PRISCILLA.jpg",
  },

  {
    name: "RAFAELA DOMICIANO RODRIGUES ALVES ",
    job: "Recursos Humanos",
    img: "RAFAELA.jpg",
  },
  {
    name: "REGIENE RIBEIRO DE LIMA ",
    job: "Contábil Fiscal",
    img: "REGIENE.jpg",
  },
  {
    name: "SANDRA PEREIRA RIBEIRO ",
    job: "Contábil Fiscal",
    img: "SANDRA.jpg",
  },
  {
    name: "STEFANE CAROLINE DE OLIVEIRA ",
    job: "Recursos Humanos",
    img: "STEFANE.jpg",
  },
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
    <Image borderRadius={5} src={"/equipe/" + img} alt={name}></Image>
    <Text fontSize={12}>{name}</Text>
    <Text color="azul">{job}</Text>
  </VStack>
);
