import { WrapItem, Image } from "@chakra-ui/react";

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

  const handleDetails = (photoId: number) => {
    console.log(`Open details modal for photoId: ${photoId}`);
  };

  return (
    <WrapItem key={photo.id} sx={container} onClick={() => handleDetails(photo.id)}>
      <Image src={photo.thumbnailUrl} alt={photo.title} />
    </WrapItem>
  );
};

export default PhotoThumbnail;
