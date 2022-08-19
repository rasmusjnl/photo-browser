import { Box, Heading, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const styles = (bg: string, bgHover: string, boxShadow: string) => ({
  container: {
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    height: "20rem",
    width: "50%",
    borderRadius: 5,
    boxShadow,
    bg,
    transition: "transform 0.3s, background 0.3s",
    "&:hover": {
      cursor: "pointer",
      bg: bgHover,
      transform: "scale(1.02)",
    },
  },
});

const HomePage: React.FC = () => {
  const bg = useColorModeValue("baseLight.100", "baseDark.300");
  const bgHover = useColorModeValue("baseLight.300", "baseDark.200");
  const boxShadow = useColorModeValue("0 0px 8px 1px #e9e9e9d1, 0px 1px 1px 0px #70767e78", "");

  const { container, buttonContainer } = styles(bg, bgHover, boxShadow);

  const navigate = useNavigate();

  const handleClick = (to: string) => navigate(to);

  return (
    <HStack gap="0.5rem" sx={container}>
      <Box sx={{ ...buttonContainer }} onClick={() => handleClick("photos")}>
        <Heading size="md">Photos</Heading>
      </Box>
      <Box sx={{ ...buttonContainer }} onClick={() => handleClick("albums")}>
        <Heading size="md">Albums</Heading>
      </Box>
    </HStack>
  );
};

export default HomePage;
