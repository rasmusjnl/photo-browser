import { Container, VStack } from "@chakra-ui/react";
import Appbar from "components/Appbar";
import PhotosView from "views/photos/PhotosView";

// TODO: routing
const App: React.FC = () => {
  return (
    <VStack>
      <Appbar />
      <Container maxW="container.lg" centerContent={true} py="2rem">
        <PhotosView />
      </Container>
    </VStack>
  );
};

export default App;
