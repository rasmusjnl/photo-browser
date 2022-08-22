import {
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItem from "./NavItem";

const NavDrawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("baseLight.900", "baseDark.600");
  return (
    <>
      <IconButton
        sx={{ position: "absolute", left: "1rem", gap: "0.5rem" }}
        aria-label="open-drawer-button"
        icon={<HamburgerIcon />}
        variant="ghost"
        onClick={onOpen}
      />
      <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bg}>
          <DrawerCloseButton />
          <DrawerHeader>Photo Browser</DrawerHeader>
          <Divider />
          <Flex direction="column">
            <NavItem to="" title="Home" onClose={onClose} />
            <NavItem to="photos" title="Photos" onClose={onClose} />
            <NavItem to="albums" title="Albums" onClose={onClose} />
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
