import { Spinner, Wrap, WrapItem, Text, useColorModeValue } from "@chakra-ui/react";
import ErrorMessage from "components/ErrorMessage";
import useAlbums from "hooks/useAlbums";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  albumContainer: {
    width: 150,
    height: 150,
    alignItems: "center",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
      opacity: 0.8,
    },
  },
};

const AlbumPage: React.FC = () => {
  const { albumContainer } = styles;
  const { isLoading, isError, error, data } = useAlbums();

  const bg = useColorModeValue("baseLight.100", "baseDark.300");

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
    <Wrap justify="center">
      {data.map((album) => (
        <WrapItem
          key={album.id}
          sx={{ ...albumContainer, bg }}
          onClick={() => handleDetails(album.id)}
        >
          <Text>{album.title}</Text>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default AlbumPage;
