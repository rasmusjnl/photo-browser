import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Text, Wrap } from "@chakra-ui/react";
import HoverableBox from "components/HoverableBox";

interface Props {
  albums: Api.Album[];
}

const Albums: React.FC<Props> = ({ albums }: Props) => {
  const navigate = useNavigate();

  const handleDetails = useCallback(
    (albumId: string) => {
      navigate(`/albums/${albumId}`);
    },
    [navigate],
  );

  return (
    <Wrap justify="center" py="0.5rem">
      {albums.map((album) => (
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

export default Albums;
