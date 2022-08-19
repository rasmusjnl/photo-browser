import { Outlet } from "react-router-dom";
import { Container, VStack } from "@chakra-ui/react";
import NavBar from "components/navigation/NavBar";

const App: React.FC = () => {
  return (
    <VStack>
      <NavBar />
      <Container maxW="container.lg" centerContent={true} py="2rem">
        <Outlet />
      </Container>
    </VStack>
  );
};

export default App;
