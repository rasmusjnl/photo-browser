import { useNavigate } from "react-router-dom";
import { Heading, HStack } from "@chakra-ui/react";
import HoverableBox from "components/HoverableBox";

const styles = {
  container: {
    width: "100%",
  },
  buttonContainer: {
    height: "20rem",
    width: "50%",
  },
};

const HomePage: React.FC = () => {
  const { container, buttonContainer } = styles;

  const navigate = useNavigate();

  const handleClick = (to: string) => navigate(to);

  return (
    <HStack gap="0.5rem" sx={container}>
      <HoverableBox sx={buttonContainer} handleClick={() => handleClick("photos")}>
        <Heading size="md">Photos</Heading>
      </HoverableBox>
      <HoverableBox sx={buttonContainer} handleClick={() => handleClick("albums")}>
        <Heading size="md">Albums</Heading>
      </HoverableBox>
    </HStack>
  );
};

export default HomePage;
