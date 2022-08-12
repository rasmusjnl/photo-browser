import { Spinner } from "@chakra-ui/react";
import Error from "components/Error";
import Photos from "views/photos/Photos";
import usePhotos from "hooks/usePhotos";

const PhotosView: React.FC = () => {
  const { isLoading, isError, isSuccess, data: photos, error } = usePhotos();

  return (
    <>
      {isLoading && <Spinner />}
      {isError && <Error error={error} />}
      {isSuccess && <Photos photos={photos} />}
    </>
  );
};

export default PhotosView;
