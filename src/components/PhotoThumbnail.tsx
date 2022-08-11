import { WrapItem, Image } from "@chakra-ui/react";

interface Props {
  photo: Api.Photo;
}

const PhotoThumbnail: React.FC<Props> = ({ photo }: Props) => {
  const handleDetails = (photoId: number) => {
    console.log(`Open details modal for photoId: ${photoId}`);
  };

  return (
    <WrapItem key={photo.id} onClick={() => handleDetails(photo.id)}>
      <Image src={photo.thumbnailUrl} alt={photo.title} />
    </WrapItem>
  );
};

export default PhotoThumbnail;
