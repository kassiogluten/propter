import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Text, Wrap } from "@chakra-ui/react";
import { HiOutlineUser } from "react-icons/hi";
import { useMyContext } from "../contexts/Context";
import {
  FacebookSvg,
  InstagramSvg,
  MailSvg,
  PhoneSvg,
  TwitterSvg,
} from "../icons";

export function Menu() {
  const { setIsServicesOpen, setIsLinksOpen, isServicesOpen, isLinksOpen } =
    useMyContext();

  return (
    <>
      <Text as="a" href="#">
        Conheça a Propter
      </Text>
      <Text
        pos="relative"
        onClick={() => setIsServicesOpen(!isServicesOpen)}
        as="a"
        href="#"
      >
        Serviços <ChevronDownIcon transform={isServicesOpen ? "rotate(180deg)" : "rotate(0)"} color="verde" />
        {isServicesOpen && (
          <Box
            display={{ base: "none", lg: "block" }}
            transform="rotate(45deg)"
            top="55px"
            left={2}
            w={16}
            h={16}
            bg="white"
            pos="absolute"
          />
        )}
      </Text>
      <Text
        pos="relative"
        onClick={() => setIsLinksOpen(!isLinksOpen)}
        as="a"
        href="#"
      >
        Links úteis <ChevronDownIcon transform={isLinksOpen ? "rotate(180deg)" : "rotate(0)"} color="verde" />
        {isLinksOpen && (
          <Box
            display={{ base: "none", lg: "block" }}
            transform="rotate(45deg)"
            top="55px"
            left={2}
            w={16}
            h={16}
            bg="white"
            pos="absolute"
          />
        )}
      </Text>

      <Text as="a" href="#">
        Nosso blog
      </Text>
      <Text as="a" href="#">
        Fale com a gente
      </Text>
      <Button
        h={50}
        px={8}
        color="white"
        colorScheme="none"
        rightIcon={
          <Box
            mr={-6}
            ml={6}
            borderRadius={10}
            bgGradient="linear(to-r, #04111938,#04111900)"
            p={2}
          >
            <HiOutlineUser size={20} bg="azul" />
          </Box>
        }
        bgGradient="linear(to-r, verde -20%, azul 120%)"
      >
        Área do cliente
      </Button>
    </>
  );
}

export const MenuTop = () => (
  <>
    <Wrap>
      <HStack px={2}>
        <InstagramSvg />
        <Text fontSize={14} opacity={0.6}>
          @propter
        </Text>
      </HStack>
      <HStack px={2}>
        <FacebookSvg />
        <Text fontSize={14} opacity={0.6}>
          @propter
        </Text>
      </HStack>
      <HStack px={2}>
        <TwitterSvg />
        <Text fontSize={14} opacity={0.6}>
          @propter
        </Text>
      </HStack>
    </Wrap>
    <Wrap>
      <HStack px={2}>
        <Text fontSize={14} opacity={0.6}>
          contato@proter.com.br
        </Text>
        <MailSvg />
      </HStack>
      <HStack px={2}>
        <Text fontSize={14} opacity={0.6}>
          (33) 3321-2121
        </Text>
        <PhoneSvg />
      </HStack>
    </Wrap>
  </>
);
