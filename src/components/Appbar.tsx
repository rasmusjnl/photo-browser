import { Flex, Heading, IconButton, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

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
  homeLink: {
    position: "absolute",
    left: "2rem",
  },
  toggleButton: { position: "absolute", right: "2rem" },
};

const Appbar: React.FC = () => {
  const { container, homeLink, toggleButton } = styles;
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("baseLight.900", "baseDark.600");
  const boxShadow = useColorModeValue("0 0px 8px 1px #e9e9e9d1, 0px 1px 1px 0px #70767e78", "");

  return (
    <Flex sx={{ ...container, bg, boxShadow }}>
      <Link sx={homeLink} as={RouterLink} to="photos">
        Home
      </Link>
      <Heading variant="h1">Photo Browser</Heading>
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
