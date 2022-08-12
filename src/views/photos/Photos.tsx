import { Wrap } from "@chakra-ui/react";
import { LazyComponentProps, trackWindowScroll } from "react-lazy-load-image-component";
import PhotoThumbnail from "views/photos/PhotoThumbnail";

interface Props extends LazyComponentProps {
  photos: Api.Photo[];
}

const Photos: React.FC<Props> = ({ photos, scrollPosition }: Props) => {
  return (
    <Wrap justify="center">
      {photos.map((photo) => (
        <PhotoThumbnail key={photo.id} photo={photo} scrollPosition={scrollPosition} />
      ))}
    </Wrap>
  );
};

export default trackWindowScroll(Photos);
