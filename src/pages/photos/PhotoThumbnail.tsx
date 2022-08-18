import { Image, WrapItem } from "@chakra-ui/react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  photo: Api.Photo;
}

const styles = {
  container: {
    "&:hover": {
      cursor: "pointer",
      opacity: 0.85,
    },
    "&:active": {
      opacity: 0.7,
    },
  },
};

const PhotoThumbnail: React.FC<Props> = ({ photo }: Props) => {
  const { container } = styles;
  const navigate = useNavigate();

  const handleDetails = useCallback((photoId: number) => {
    navigate(`/photos/${photoId}`);
  }, []);

  return (
    <WrapItem key={photo.id} sx={container} onClick={() => handleDetails(photo.id)}>
      <Image
        src={photo.thumbnailUrl}
        alt={photo.title}
        width={150}
        height={150}
        fallbackSrc="https://via.placeholder.com/150?text=Loading..."
      />
    </WrapItem>
  );
};

export default PhotoThumbnail;
