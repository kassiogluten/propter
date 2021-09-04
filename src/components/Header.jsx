import {
  Box,
  Flex,
  HStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  DarkMode,
  Link
} from "@chakra-ui/react";


import { FaThList } from "react-icons/fa";
import React from "react";
import { LogoSvg } from "../icons";
import { Menu, MenuTop } from "./Menu";
import { MenuLinks, MenuServices } from "./HeaderSubMenu";
import { useMyContext } from "../contexts/Context";

export function Header() {
  const { isServicesOpen, isLinksOpen } = useMyContext();
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
            <Link as="a" href="/"><LogoSvg /></Link>
            <HStack display={{ base: "none", lg: "flex" }} spacing={6}>
              <Menu />
            </HStack>
            <IconButton onClick={onOpen} display={{ base: "flex", lg: "none" }}>
              <FaThList />
            </IconButton>
            {isServicesOpen && <MenuServices />}
            {isLinksOpen && <MenuLinks />}
          </Flex>
          <Drawer
            autoFocus={false}
            returnFocusOnClose={false}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent bg="cinza" color="white">
              <DrawerCloseButton m={3} />
              <DrawerHeader></DrawerHeader>

              <DrawerBody onClick={onClose}>
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
