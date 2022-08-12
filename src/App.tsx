import { Container, Spinner, VStack, Wrap } from "@chakra-ui/react";
import Appbar from "components/Appbar";
import Error from "components/Error";
import PhotoThumbnail from "components/PhotoThumbnail";
import usePhotos from "hooks/usePhotos";

const App: React.FC = () => {
  const { isLoading, isError, isSuccess, data: photos, error } = usePhotos();

  return (
    <VStack>
      <Appbar />
      <Container maxW="container.lg" centerContent={true} py="1rem">
        {isLoading && <Spinner />}
        {isError && <Error error={error} />}
        {isSuccess && (
          <Wrap justify="center">
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
