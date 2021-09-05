import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

const posts = [
  { name: "Lucas Rangel", img: "/lucas.jpg" },
  { name: "Heitor Salamanca", img: "/lucas.jpg" },
  { name: "Vitor Bonho", img: "/lucas.jpg" },
  { name: "Magneto Xavier", img: "/lucas.jpg" },
];
export function Testimonials() {
  return (
    <Box
      align="center"
      w="100%"
      bg="white"
      color="cinza"
      bgRepeat="no-repeat"
      bgPos="top center"
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
        <Flex
          px={4}
          _hover={{ cursor: "pointer", filter: "brightness(1.25)" }}
          w="100%"
          h={{ base: "75vw", md: "420px" }}
          flexDir="column"
        >
          <Grid
            py={8}
            w={300}
            templateColumns="auto 1fr"
            templateRows="1fr 1fr"
          >
            <GridItem colSpan="1" rowSpan="2" px={2}>
              <Image
                borderRadius="5px"
                width={45}
                height={45}
                alt="Depoimento"
                src={post.img}
              />
            </GridItem>
            <GridItem colSpan="1" rowSpan="1">
              <Text textAlign="start">{post.name}</Text>
            </GridItem>
            <GridItem colSpan="1" rowSpan="1">
              <Text textAlign="start" color="texto">
                Fundador e CEO da Gamepad
              </Text>
            </GridItem>
          </Grid>

          <Box borderRadius={20} bg="#323C43" w="full" h="300" />
        </Flex>
      </SwiperSlide>
    ))}
  </Swiper>
);
