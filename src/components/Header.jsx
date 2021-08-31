import {
  Box,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  DarkMode,
  Stack,
  Wrap,
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";

import { FaThList, FaUser } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import React from "react";
import {
  FacebookSvg,
  InstagramSvg,
  LogoSvg,
  MailSvg,
  PhoneSvg,
  TwitterSvg,
} from "../icons";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <header>
      <DarkMode>
        <Box
          align="center"
          w="100%"
          bgGradient="linear(to-r, cinzaclaro, cinzaescuro)"
          borderBottomWidth={1}
          borderColor="#0C344D"
          color="white"
        >
          <Flex
            display={{ base: "none", md: "flex" }}
            px="1rem"
            py="2rem"
            w="full"
            align="center"
            maxW={1200}
            justify="space-between"
          >
            <MenuTop />
          </Flex>
        </Box>
        <Box
          align="center"
          w="100%"
          bgGradient="linear(to-r, cinzaclaro, cinzaescuro)"
          color="white"
          py={{ base: 0, md: "3rem" }}
        >
          <Flex
            p="1rem"
            w="full"
            align="center"
            maxW={1200}
            justify="space-between"
          >
            <LogoSvg />
            <HStack display={{ base: "none", lg: "flex" }} spacing={6}>
              <Menu />
            </HStack>
            <IconButton onClick={onOpen} display={{ base: "flex", lg: "none" }}>
              <FaThList />
            </IconButton>
          </Flex>
          <Drawer
            autoFocus={false}
            returnFocusOnClose={false}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent color="white">
              <DrawerCloseButton m={3} />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <VStack spacing={10}>
                  <Menu />
                  <Flex display={{ base: "flex", md: "none" }}>
                    <MenuTop />
                  </Flex>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </DarkMode>
    </header>
  );
}

const Menu = () => (
  <>
    <Text as="a" href="#">
      Conheça a Propter
    </Text>
    <ChakraMenu placement="bottom">
      <MenuButton variant="link" bg="transparent" as={Button} rightIcon={<ChevronDownIcon color="verde" />}>
      Serviços
      </MenuButton>
      <MenuList bg="white" color="cinza" w={{base:"100%", lg:850}}>
        <MenuItem>Serviços</MenuItem>
        
      </MenuList>
    </ChakraMenu>
    <ChakraMenu placement="bottom">
      <MenuButton variant="link" bg="transparent" as={Button} rightIcon={<ChevronDownIcon color="verde" />}>
      Links úteis
      </MenuButton>
      <MenuList bg="white" color="cinza" w={{base:"100%", lg:850}}>
        <MenuItem>Links</MenuItem>
      </MenuList>
    </ChakraMenu>
    <Text as="a" href="#">
      Nosso blog
    </Text>
    <Text as="a" href="#">
      Fale com a gente
    </Text>
    <Button
      h={50}
      px={8}
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

const MenuTop = () => (
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
