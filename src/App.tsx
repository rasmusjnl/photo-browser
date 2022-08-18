import { Outlet } from "react-router-dom";
import { Container, VStack } from "@chakra-ui/react";
import Appbar from "components/Appbar";

const App: React.FC = () => {
  return (
    <VStack>
      <Appbar />
      <Container maxW="container.lg" centerContent={true} py="2rem">
        <Outlet />
      </Container>
    </VStack>
  );
};

export default App;
