import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Link, Spacer, Stack,
useColorModeValue, useDisclosure } from "@chakra-ui/react";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Sticky from "react-stickynode";

import { colors } from "../theme";

const navBtns = [
  {
    label: "Sobre",
  },
  {
    label: "Projetos",
  },
  {
    label: "Contato",
  }
];

const MenuToggle = ({ isOpen, onOpen }) => (
  <Box display={{ base: "block", md: "none" }} pr={4}>
    <Button onClick={onOpen}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Button>
  </Box>
);

const NavButtons = ({ size, onClose }) => {
  const btns = navBtns.map((btn) => (
    <Button key={btn.label} size={size} variant="link" mb={2} onClick={onClose}>
      {
        btn.href ? 
        ( <Link href={btn.href} isExternal>{btn.label}</Link>) 
        : 
        ( <ScrollLink to={btn.label.toLowerCase()} href={btn.href} spy smooth offset={-70} duration={500} onClick={onClose}>{btn.label}</ScrollLink>)
      }
    </Button>
  ));
  return <>{btns}</>;
};

const MenuLinks = ({ onClose }) => (
  <Stack
    display={{ base: "none", sm: "none", md: "block" }}
    width={{ sm: "full", md: "auto" }}
    spacing="24px"
    direction={["column", "row", "row", "row"]}
    alignItems="center"
  >
    <NavButtons size="sm" onClose={onClose} />
  </Stack>
);

const NavMenu = ({ isOpen, onClose }) => (
  <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay>
      <DrawerContent>
        <DrawerBody>
          <Stack
            alignItems="center"
            justifyContent="center"
            direction={["column"]}
            spacing="24px"
            mt="20vh"
          >
            <NavButtons size="lg" onClose={onClose} />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </Drawer>
);

export default function Navbar() {
  const primary = useColorModeValue(colors.primary.light, colors.primary.dark);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Sticky enabled innerZ={99}>
      <Stack
        as="header"
        w="100%"
        direction={["row", "row", "row", "row"]}
        alignItems="center"
        justifyContent="space-between" 
        bg={primary}
        px={4} 
        py={2} 
      >
        <Box display={{ base: "block", md: "none" }}>
          <MenuToggle isOpen={isOpen} onOpen={onOpen} />
        </Box>
        <Spacer /> 
        <MenuLinks onClose={onClose} /> 
        <NavMenu isOpen={isOpen} onClose={onClose} />
      </Stack>
    </Sticky>
  );
}
