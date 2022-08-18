import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { Heading, Image, Skeleton, VStack } from "@chakra-ui/react";
import Error from "components/ErrorMessage";
import usePhotoById from "hooks/usePhotoById";

const PhotoDetailsPage: React.FC = () => {
  const params = useParams();
  const queryClient = useQueryClient();

  const { data, isLoading, isError, error } = usePhotoById(params.id!, queryClient);

  if (isLoading) return <Skeleton width={600} height={600} />;
  if (isError) return <Error error={error} errorContext="photo-details" />;

  return (
    <VStack gap="1rem">
      <Heading size="md">{data.title}</Heading>
      <Image
        src={data.url}
        alt={data.title}
        fallbackSrc="https://via.placeholder.com/600?text=Loading..."
      />
    </VStack>
  );
};

export default PhotoDetailsPage;
