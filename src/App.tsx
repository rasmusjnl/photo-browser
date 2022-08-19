import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import NavBar from "components/navigation/NavBar";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container maxW="container.lg" centerContent={true} py="2rem">
        <Outlet />
      </Container>
    </>
  );
};

export default App;
