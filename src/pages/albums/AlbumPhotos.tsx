import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FilterContext } from "contexts/filterContext";
import usePhotosByAlbumId from "hooks/usePhotoByAlbumId";
import Photos from "pages/photos/Photos";
import { Spinner, Text } from "@chakra-ui/react";
import ErrorMessage from "components/ErrorMessage";

const AlbumPhotos: React.FC = () => {
  const params = useParams();
  const { filter } = useContext(FilterContext);

  /** TODO: infinite query in the future */
  const { isLoading, isError, error, data } = usePhotosByAlbumId(params.id!, filter);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error as Error} errorContext="photos" />;

  return data.length > 0 ? (
    <Photos photos={data} />
  ) : (
    <Text mt="1rem">
      {filter.length === 0 ? "Album is empty." : "No photos match the given search criteria."}{" "}
    </Text>
  );
};

export default AlbumPhotos;
