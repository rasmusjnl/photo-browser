import { IconButton, Menu, MenuButton, MenuList, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItem from "./NavItem";

const NavMenu: React.FC = () => {
  const bg = useColorModeValue("baseLight.900", "baseDark.600");
  return (
    <Menu colorScheme="white">
      <MenuButton
        sx={{ position: "absolute", left: "1rem", gap: "0.5rem" }}
        as={IconButton}
        aria-label="Navigation"
        icon={<HamburgerIcon />}
        variant="ghost"
      />
      <MenuList sx={{ backgroundColor: bg }}>
        <NavItem to="" title="Home" />
        <NavItem to="photos" title="Photos" />
        <NavItem to="albums" title="Albums" />
      </MenuList>
    </Menu>
  );
};

export default NavMenu;
