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
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Wrap,
  DrawerFooter,
} from "@chakra-ui/react";

import Link from "next/link";

import { FaThList } from "react-icons/fa";
import React, { useState } from "react";
import { LogoSvg } from "../icons";
import { Menu, MenuTop } from "./Menu";
import { MenuLinks, MenuServices } from "./HeaderSubMenu";
import { useMyContext } from "../contexts/Context";
import { ModalLinks } from "./ModalLinks";

export function Header() {
  const { isServicesOpen, isLinksOpen } = useMyContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modal, setModal] = useState(false);
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
            <Link href="/" passHref>
              <Box  _hover={{cursor:'pointer'}} >
                <LogoSvg />
              </Box>
            </Link>
            <HStack display={{ base: "none", lg: "flex" }} spacing={6}>
              <Menu setModal={setModal} />
            </HStack>
            <IconButton
              aria-label="Menu de navegação"
              onClick={onOpen}
              display={{ base: "flex", lg: "none" }}
            >
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
                  <Menu setModal={setModal} />
                  <Stack pt={8} spacing={8} maxW={200} flexDir="column">
                    <MenuTop />
                  </Stack>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
        <ModalLinks modal={modal} setModal={setModal} />
      </DarkMode>
    </header>
  );
}
