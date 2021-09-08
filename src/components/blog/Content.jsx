import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
  useClipboard,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import {
  FaCheck,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { useRouter } from "next/dist/client/router";

export function Content({ html, post }) {
  const router = useRouter();
  const { hasCopied, onCopy } = useClipboard(
    "https://propternegocios.com.br" + router.asPath
  );
  return (
    <Box bg="white" color="cinza" align="center" w="100%">
      <Flex
        p="5rem 1rem"
        textAlign="left"
        maxW={1000}
        justify="space-between"
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <Stack pt={24} pr={4} mt={16} direction="column" spacing={2}>
          <HStack>
            <Image width="40px" alt="Propter" src="/joel.jpg" />
            <VStack align="start">
              <Text lineHeight="100%">Por:</Text>
              <Text fontWeight={700} color="azul" lineHeight="100%">
                Isabelle Coutinho
              </Text>
            </VStack>
          </HStack>
          <Text pt={8} pb={4}>
            Compartilhe:
          </Text>
          <Botao
            icon={<FaFacebookF size={20} />}
            link={
              "http://www.facebook.com/share.php?u=https://propternegocios.com.br" +
              router.asPath
            }
            bg="#1877F2"
          >
            Facebook
          </Botao>
          <Botao
            icon={<FaTwitter size={20} />}
            link={
              "https://twitter.com/share?ref_src=https://propternegocios.com.br" +
              router.asPath
            }
            bg="#36B9FF"
          >
            Twitter
          </Botao>

          <Botao
            icon={<FaWhatsapp size={20} />}
            link={
              "whatsapp://send?text=https://propternegocios.com.br" +
              router.asPath
            }
            bg="#25D368"
          >
            Whatsapp 
          </Botao>

          <Button
            w={176}
            colorScheme="none"
            fontWeight="400"
            fontFamily="Nunito"
            bg={hasCopied ? "green" : "cinza"}
            color="white"
            leftIcon={hasCopied ? <FaCheck /> : <FiLink />}
            onClick={onCopy}
            borderRadius={5}
          >
            {hasCopied ? "Copiado" : "Copiar link"}
          </Button>
        </Stack>
        <Stack>
          <Heading color="azul" fontSize={36}>
            {post.title}
          </Heading>
          <Text py={4} fontSize={18} fontWeight={500} alignSelf="start">
            {post.adicionais?.subtitulo}
          </Text>
          <Image
            w="full"
            alt={post.title}
            src={post.featuredImage?.node.mediaItemUrl}
          ></Image>
          <Box
            dangerouslySetInnerHTML={{
              __html: html,
            }}
            sx={{
              p: {
                textAlign: "start",
                fontFamily: "Nunito",
                fontSize: 16,
                pt: 4,
              },
              h3: { fontFamily: "Nunito", fontSize: 16, fontWeight: 600 },
              h2: {
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: 32,
                paddingTop: 16,
                bgGradient: "linear(to-r,#A7CC78 ,#66A9CE,#6B1F9A )",
                width: "fit-content",
                bgClip: "text",
              },
              img: { paddingY: 16, w: "full" },
            }}
          />
        </Stack>
      </Flex>
    </Box>
  );
}

function Botao({ children, icon, link, bg }) {
  return (
    <Button
      w={176}
      colorScheme="none"
      fontWeight="400"
      fontFamily="Nunito"
      bg={bg}
      color="white"
      leftIcon={icon}
      as="a"
      href={link}
      borderRadius={5}
    >
      {children}
    </Button>
  );
}
