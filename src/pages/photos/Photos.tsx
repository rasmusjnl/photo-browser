import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Image, Wrap } from "@chakra-ui/react";
import HoverableBox from "components/HoverableBox";

interface Props {
  photos: Api.Photo[];
}

const Photos: React.FC<Props> = ({ photos }: Props) => {
  const navigate = useNavigate();

  const handleDetails = useCallback(
    (photoId: number) => {
      navigate(`/photos/${photoId}`);
    },
    [navigate],
  );

  return (
    <Wrap justify="center" mt="0.5rem">
      {photos.map((photo) => (
        <HoverableBox key={photo.id} handleClick={() => handleDetails(photo.id)}>
          <Image
            src={photo.thumbnailUrl}
            alt={photo.title}
            width={150}
            height={150}
            borderRadius={5}
            fallbackSrc="https://via.placeholder.com/150?text=Loading..."
          />
        </HoverableBox>
      ))}
    </Wrap>
  );
};

export default Photos;
