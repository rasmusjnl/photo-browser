import { Spinner } from "@chakra-ui/react";
import ErrorMessage from "components/ErrorMessage";
import usePhotosByAlbumId from "hooks/usePhotoByAlbumId";
import Photos from "pages/photos/Photos";
import { useParams } from "react-router-dom";

const AlbumPhotos: React.FC = () => {
  const params = useParams();
  const { isLoading, isError, error, data } = usePhotosByAlbumId(params.id!);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error as Error} errorContext="photos" />;

  return <Photos photos={data} />;
};

export default AlbumPhotos;
