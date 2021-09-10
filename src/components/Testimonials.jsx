import React from "react";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

import Image from "next/image";

import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

const posts = [
  {
    name: "Lucas Rangel",
    job: "Fundador e CEO da Gamepad ",
    img: "/lucas.jpg",
    msg: "A parceria do Propter com a Gamepad a cada ano comemoramos mais resultados. A Propter é a maior autoridade em contabilidade consultiva, sempre com ótimo atendimento.",
  },
  {
    name: "Magno Dias",
    job: "Proprietário da Suricato Agência",
    img: "/magno.jpg",
    msg: "A forma como a Propter mudou a Suricato foi sensacional.  Deixamos de ter apenas um contator e hoje temos um grande parceiro de negócios.",
  },
  {
    name: "Vitor Bonho",
    job: "Designer UI/UX",
    img: "/vitor.jpg",
    msg: "A parceria do Propter com a Gamepad a cada ano comemoramos mais resultados. A Propter é a maior autoridade em contabilidade consultiva, sempre com ótimo atendimento.",
  },
  {
    name: "Kassio Gluten",
    job: "Programador Frontend",
    img: "/kassio.jpg",
    msg: "A forma como a Propter mudou a Suricato foi sensacional.  Deixamos de ter apenas um contator e hoje temos um grande parceiro de negócios.",
  },
];
export function Testimonials({ bg, color }) {
  return (
    <Box
      align="center"
      w="100%"
      bg={bg}
      color={color}
      bgImage={bg === "cinza" ? "/bg-depoimentos.svg" : "none"}
      bgRepeat="no-repeat"
      bgPos="top right"
      id="blog"
      pos="relative"
    >
      <Flex
        py="5rem"
        align="start"
        textAlign="start"
        maxW={1200}
        justify="space-between"
        flexDir="column"
        pos="relative"
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
          DEPOIMENTOS
        </Text>
        <Text pb={8} px={4} maxW={500} fontSize={{ base: 26, md: 36 }}>
          Mensagens dos nossos clientes parceiros
        </Text>
        <Posts posts={posts} />
      </Flex>
    </Box>
  );
}

const Posts = ({ posts }) => (
  <Swiper
    slidesPerView={"auto"}
    spaceBetween={0}
    navigation={true}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    }}
    className="Blog"
  >
    {posts.map((post) => (
      <SwiperSlide key={post.name}>
        <Flex px={6} w="100%" flexDir="column">
          <Flex
            sx={{
              background: "url('/bg-depoimento.svg') no-repeat top left , #fff",
            }}
            _hover={{ cursor: "grab" }}
            mt={4}
            boxShadow="0px 0px 25px rgba(0, 0, 0, 0.1)"
            borderRadius={20}
            minH={300}
            w="full"
            justify="space-between"
            flexDir="column"
            px={8}
            pt={32}
          >
            <Text color="cinza" textAlign="start">
              {post.msg}
            </Text>
            <Grid
              py={8}
              w={300}
              templateColumns={{ base: "auto", md: "auto 1fr" }}
              templateRows={{ base: "2fr 1fr auto", md: "1fr 1fr" }}
            >
              <GridItem
                h={42}
                colSpan="1"
                rowSpan={{ base: "1", md: "2" }}
                mr={2}
                justifySelf="start" borderRadius={5} overflow="hidden"
              >
                <Image 
                  alt={post.name}
                  width={45}
                  height={45}
                  src={post.img}
                />
              </GridItem>
              <GridItem colSpan="1" rowSpan="1">
                <Text pt={1} color="cinza" textAlign="start">
                  {post.name}
                </Text>
              </GridItem>
              <GridItem colSpan="1" rowSpan="1">
                <Text
                  w={{ base: 150, sm: "full" }}
                  textAlign="start"
                  color="texto"
                >
                  {post.job}
                </Text>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </SwiperSlide>
    ))}
  </Swiper>
);
