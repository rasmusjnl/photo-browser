import { Container, Flex, Heading, Spinner, Text, VStack, Wrap } from "@chakra-ui/react";
import PhotoThumbnail from "components/PhotoThumbnail";
import usePhotos from "hooks/usePhotos";

const App: React.FC = () => {
  const { isLoading, isError, isSuccess, data: photos, error } = usePhotos();

  return (
    <VStack>
      <Flex w="100vw" alignItems="center" justifyContent="center" height="80px">
        <Heading variant="h1">Photo Browser</Heading>
      </Flex>
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
