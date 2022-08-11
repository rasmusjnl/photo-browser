import { Container, Spinner, Text, VStack, Wrap } from "@chakra-ui/react";
import Appbar from "components/Appbar";
import PhotoThumbnail from "components/PhotoThumbnail";
import usePhotos from "hooks/usePhotos";

const App: React.FC = () => {
  const { isLoading, isError, isSuccess, data: photos, error } = usePhotos();

  return (
    <VStack>
      <Appbar />
      <Container maxW="container.lg">
        {isLoading && <Spinner />}
        {isError && <Text>{error.message}</Text>}
        {isSuccess && (
          <Wrap>
            {photos.map((photo) => (
              <PhotoThumbnail key={photo.id} photo={photo} />
            ))}
          </Wrap>
        )}
      </Container>
    </VStack>
  );
};

export default App;
