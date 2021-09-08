import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Badge,
  VStack,
} from "@chakra-ui/react";

import { posts } from "../posts";

import SwiperCore, { Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation]);

export function BlogSlider() {
  return (
    <Box align="center" w="100%" id="blog-slider" >
      <Flex  pos="relative"
        p="5rem 1rem"
        align="center"
        maxW={1200}
        justify="space-between"
        flexDir={{ base: "column", sm: "row" }} 
      >
        <Posts posts={posts} />
      </Flex>
    </Box>
  );
}

const Posts = ({ posts }) => (
  <Swiper 
    navigation={true}
spaceBetween={8}
    className="Blog" 
  >
    {posts.map((post) => (
      <SwiperSlide  key={post.title}>
        <Flex 
          p={1}
          w="100%"
          h={{ base: "75vw", md: "420px" }}
          flexDir="column" 
          transition="transform 200ms ease"
          _hover={{transform:'scale(1.008)'}}
        >
          <Flex 
            sx={{
              background: `url('${post.img}') no-repeat center / cover`,
            }}
            mt={4}
            borderRadius={15}
            h={470}
            justify="flex-end"
            flexDir="column"
            overflow="hidden"
          >
            <VStack 
              p={8}
              h="full"
              w="full"
              justify="flex-end"
              align="start"
              bgGradient="linear(to-t, #041119, rgba(4, 17, 25, 0) , rgba(4, 17, 25, 0.3) )"
            >
              <Badge
                lineHeight="200%"
                bg={post.color || "azul"}
                color="white"
                fontSize="12px"
                fontWeight="400"
                borderRadius={8}
                p="2px 7px 0"
                alignSelf="start"
              >
                {post.cat}
              </Badge>
              <Text maxW={600}
                fontWeight={600}
                fontSize={{ base: 14, md: 24 }}
                color="white"
                textAlign="start"
              >
                {post.title}
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </SwiperSlide>
    ))}
  </Swiper>
);
