import React from "react";
import {
  Text,
  Box,
  Flex,
  Heading,
  Wrap,
  WrapItem,
  HStack,
  VStack,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";

import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination]);

const post = [
  {
    title:
      "CEO da Volkswagen estreia no Twitter e provoca Elon Musk, da Tesla Laís Olivia Castro",
    img: "/blog1.jpg",
    cat: "Notícias",
  },
  {
    title:
      "Cinco dicas para ajudar suas finanças pessoais em 2021",
    img: "/blog2.jpg",
    cat: "Notícias",
  },
  {
    title:
      "Zara vai ampliar aposta no digital e pode fechar até 700 lojas no mundo",
    img: "/blog3.jpg",
    cat: "Notícias",
  },
  {
    title:
      "Ambev fecha compra de mil veículos elétricos",
    img: "/blog4.jpg",
    cat: "Notícias",
  },
  {
    title:
      "CEO5 da Volkswagen estreia no Twitter e provoca Elon Musk, da Tesla Laís Olivia Castro",
    img: "https://i.pravatar.cc/90",
    cat: "Dicas",
    color:"verde",
  },
  {
    title:
      "CEO6 da Volkswagen estreia no Twitter e provoca Elon Musk, da Tesla Laís Olivia Castro",
    img: "https://i.pravatar.cc/90",
    cat: "Alerta",
    color:"red",
  },
];

export function Blog() {
  return (
    <Box align="center" w="100%" pos="relative" bg="#F5F6FA">
      <Flex
        p="5rem 5px"
        maxW={1200}
        justify="space-between"
        flexDir="column"
        pos="relative"
        align="center"
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
          BLOG
        </Text>
        <Text pb={8} px={4} maxW={500} fontSize={{ base: 26, md: 36 }}>
          Confira as novidades
        </Text>
        <Post />
      </Flex>
    </Box>
  );
}

const Post = () => (
  <Swiper
    slidesPerView={"auto"}
    spaceBetween={0}
    pagination={true}
    breakpoints={{
      900: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    }}
    className="Blog"
    
  >
    {post.map((post) => (
      <SwiperSlide key={post.title}>
        <VStack 
          transition="all 200ms ease"
          _hover={{
            cursor: "pointer",
            filter: "brightness(1.15)",
            boxShadow: "0 0 20px #00000011",
          }}
          borderRadius={20}
          p={'12px 16px'}
          m={'10px 5px'}
          bg="white"
          minH={350}
          maxW="300"
          
        >
          <Box borderRadius={10} overflow="hidden">
            <Image
              width={260}
              height={160}
              alt={post.title}
              src={post.img}
            />
          </Box>
          <Badge
            lineHeight="200%"
            bg={post.color || 'azul'}
            color="white"
            fontSize="12px"
            fontWeight="400"
            borderRadius={8}
            p="2px 7px 0"
            alignSelf="start"
          >
            {post.cat}
          </Badge>
          <Text fontSize={18} textAlign="left" color="cinza">
            {post.title}
          </Text>
        </VStack>
      </SwiperSlide>
    ))}
  </Swiper>
);
