import { useParams } from "react-router-dom";
import useFilterStore from "stores/useFilterStore";
import usePhotosByAlbumId from "hooks/usePhotoByAlbumId";

import { Spinner, Text } from "@chakra-ui/react";
import Photos from "pages/photos/Photos";
import ErrorMessage from "components/ErrorMessage";

const AlbumPhotos: React.FC = () => {
  const params = useParams();
  const filter = useFilterStore((state) => state.albumPhotos);

  /** TODO: infinite query in the future */
  const { isLoading, isError, error, data } = usePhotosByAlbumId(params.id!, filter);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error as Error} errorContext="photos" />;

  return data.length > 0 ? (
    <Photos photos={data} />
  ) : (
    <Text mt="1rem">
      {filter.length === 0 ? "Album is empty." : "No photos match the given search criteria."}
    </Text>
  );
};

export default AlbumPhotos;
