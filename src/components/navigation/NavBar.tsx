import { NavLink as RouterLink } from "react-router-dom";
import { Flex, Heading, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NavDrawer from "./NavDrawer";

const styles = {
  container: {
    top: 0,
    position: "sticky",
    minHeight: "60px",
    width: "100%",
    px: "2rem",
    py: "1rem",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },
  toggleButton: { position: "absolute", right: "1rem" },
};

const NavBar: React.FC = () => {
  const { container, toggleButton } = styles;
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("baseLight.900", "baseDark.600");
  const boxShadow = useColorModeValue("0 0px 8px 1px #e9e9e9d1, 0px 1px 1px 0px #70767e78", "");

  return (
    <Flex sx={{ ...container, bg, boxShadow }}>
      <NavDrawer />
      <Heading as={RouterLink} to="/" size="md">
        Photo Browser
      </Heading>
      <IconButton
        aria-label="toggle-color-mode"
        sx={toggleButton}
        colorScheme="gray"
        isRound={true}
        variant="ghost"
        icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default NavBar;
