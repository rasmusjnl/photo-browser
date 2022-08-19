import { useNavigate } from "react-router-dom";
import { Box, Heading } from "@chakra-ui/react";
import HoverableBox from "components/HoverableBox";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },
  buttonContainer: {
    height: "15rem",
    width: "15rem",
  },
};

const HomePage: React.FC = () => {
  const { container, buttonContainer } = styles;

  const navigate = useNavigate();

  const handleClick = (to: string) => navigate(to);

  return (
    <Box sx={container}>
      <HoverableBox sx={buttonContainer} handleClick={() => handleClick("photos")}>
        <Heading size="md">Photos</Heading>
      </HoverableBox>
      <HoverableBox sx={buttonContainer} handleClick={() => handleClick("albums")}>
        <Heading size="md">Albums</Heading>
      </HoverableBox>
    </Box>
  );
};

export default HomePage;
