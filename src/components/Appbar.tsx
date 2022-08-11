import { Flex, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const styles = {
  container: {
    top: 0,
    position: "sticky",
    height: "70px",
    width: "100vw",
    px: "2rem",
    py: "1rem",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },
  toggleButton: { position: "absolute", right: "2rem" },
};

const Appbar: React.FC = () => {
  const { container, toggleButton } = styles;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex sx={container}>
      <Heading variant="h1">Photo Browser</Heading>
      <IconButton
        aria-label="toggle-color-mode"
        sx={toggleButton}
        isRound={true}
        variant="solid"
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        onClick={toggleColorMode}></IconButton>
    </Flex>
  );
};

export default Appbar;
