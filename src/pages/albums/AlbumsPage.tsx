import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Wrap, Text } from "@chakra-ui/react";
import ErrorMessage from "components/ErrorMessage";
import HoverableBox from "components/HoverableBox";
import useAlbums from "hooks/useAlbums";

const AlbumPage: React.FC = () => {
  const { isLoading, isError, error, data } = useAlbums();

  const navigate = useNavigate();

  const handleDetails = useCallback(
    (albumId: string) => {
      navigate(`/albums/${albumId}`);
    },
    [navigate],
  );

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error} errorContext="albums" />;

  return (
    <Wrap justify="center" py="0.5rem">
      {data.map((album) => (
        <HoverableBox
          key={album.id}
          sx={{ width: 150, height: 150 }}
          handleClick={() => handleDetails(album.id)}
        >
          <Text>{album.title}</Text>
        </HoverableBox>
      ))}
    </Wrap>
  );
};

export default AlbumPage;
