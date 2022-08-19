import { Image } from "@chakra-ui/react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HoverableBox from "components/HoverableBox";

interface Props {
  photo: Api.Photo;
}

const PhotoThumbnail: React.FC<Props> = ({ photo }: Props) => {
  const navigate = useNavigate();

  const handleDetails = useCallback(
    (photoId: number) => {
      navigate(`/photos/${photoId}`);
    },
    [navigate],
  );

  return (
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
  );
};

export default PhotoThumbnail;
