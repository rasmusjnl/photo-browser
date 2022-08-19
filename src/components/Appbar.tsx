import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { NavLink as RouterLink } from "react-router-dom";

const styles = {
  container: {
    top: 0,
    position: "sticky",
    height: "70px",
    width: "100%",
    px: "2rem",
    py: "1rem",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },
  linksContainer: {
    position: "absolute",
    left: "1rem",
    gap: "0.5rem",
  },
  toggleButton: { position: "absolute", right: "1rem" },
};

const Appbar: React.FC = () => {
  const { container, linksContainer, toggleButton } = styles;
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("baseLight.900", "baseDark.600");
  const boxShadow = useColorModeValue("0 0px 8px 1px #e9e9e9d1, 0px 1px 1px 0px #70767e78", "");
  const activeBg = useColorModeValue("baseLight.100", "baseDark.200");

  return (
    <Flex sx={{ ...container, bg, boxShadow }}>
      <Menu colorScheme="white">
        <MenuButton
          sx={linksContainer}
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="ghost"
        />
        <MenuList sx={{ backgroundColor: bg }}>
          <MenuItem as={RouterLink} to="photos" _activeLink={{ bgColor: activeBg }}>
            <Text>Photos</Text>
          </MenuItem>
          <MenuItem as={RouterLink} to="albums" _activeLink={{ bgColor: activeBg }}>
            Albums
          </MenuItem>
        </MenuList>
      </Menu>
      <Heading size="md">PB</Heading>
      <IconButton
        aria-label="toggle-color-mode"
        sx={toggleButton}
        colorScheme="gray"
        isRound={true}
        variant="solid"
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Appbar;
