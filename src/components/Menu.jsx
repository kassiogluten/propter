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
      <Text as="a" href="/conheca">
        Conheça a Propter
      </Text>
      <Text
        pos="relative"
        onClick={() => setIsServicesOpen(!isServicesOpen)}
        _hover={{cursor:'copy'}}
      >
        Serviços{" "}
        <ChevronDownIcon
          transition="500ms all"
          transform={isServicesOpen ? "rotate(180deg)" : "rotate(0)"}
          color="verde"
        />
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
        _hover={{cursor:'copy'}}
      >
        Links úteis{" "}
        <ChevronDownIcon
          transition="500ms all"
          transform={isLinksOpen ? "rotate(180deg)" : "rotate(0)"}
          color="verde"
        />
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

      <Text as="a" href="/blog">
        Nosso blog
      </Text>
      <Text as="a" href="/contato">
        Fale com a gente
      </Text>
      <Button
        fontSize={13}
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
        <Text
          as="a"
          href="mailto:contato@proter.com.br"
          fontSize={14}
          color="texto"
        >
          contato@proter.com.br
        </Text>
        <MailSvg />
      </HStack>
      <HStack px={2}>
        <Text as="a" href="tel:33 3321-2121" fontSize={14} color="texto">
          (33) 3321-2121
        </Text>
        <PhoneSvg />
      </HStack>
    </Wrap>
  </>
);
