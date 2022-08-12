import { Image, WrapItem } from "@chakra-ui/react";
import { useCallback } from "react";
import { LazyLoadImage, ScrollPosition } from "react-lazy-load-image-component";

interface Props {
  photo: Api.Photo;
  scrollPosition: ScrollPosition;
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

const PhotoThumbnail: React.FC<Props> = ({ photo, scrollPosition }: Props) => {
  const { container } = styles;

  const handleDetails = useCallback((photoId: number) => {
    console.log(`Open details modal for photoId: ${photoId}`);
  }, []);

  return (
    <WrapItem key={photo.id} sx={container} onClick={() => handleDetails(photo.id)}>
      {/* <LazyLoadImage
        src={photo.thumbnailUrl}
        alt={photo.title}
        width={150}
        height={150}
        scrollPosition={scrollPosition}
        placeholderSrc="https://via.placeholder.com/150?text=Loading..."
      /> */}

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
