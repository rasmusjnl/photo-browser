import { Wrap } from "@chakra-ui/react";
import PhotoThumbnail from "pages/photos/PhotoThumbnail";

interface Props {
  photos: Api.Photo[];
}

const Photos: React.FC<Props> = ({ photos }: Props) => {
  return (
    <Wrap justify="center">
      {photos.map((photo) => (
        <PhotoThumbnail key={photo.id} photo={photo} />
      ))}
    </Wrap>
  );
};

export default Photos;
