import React from "react";
import { Button, Spinner, VStack } from "@chakra-ui/react";
import Error from "components/ErrorMessage";
import Photos from "pages/photos/Photos";
import usePhotosInfinite from "hooks/usePhotosInfinite";
import { CheckIcon, RepeatIcon } from "@chakra-ui/icons";

const PhotosView: React.FC = () => {
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePhotosInfinite();

  if (isLoading) return <Spinner />;
  if (isError) return <Error error={error as Error} errorContext="photos" />;

  return (
    <>
      <VStack>
        {data.pages.map((page, i) => (
          <React.Fragment key={`${i}-${page.nextPage}`}>
            <Photos photos={page.data} />
          </React.Fragment>
        ))}
      </VStack>
      <Button
        mt="2rem"
        title="Load more photos"
        isLoading={isFetchingNextPage}
        disabled={!hasNextPage || isFetchingNextPage}
        leftIcon={hasNextPage ? <RepeatIcon /> : <CheckIcon />}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage
          ? "Loading more photos..."
          : hasNextPage
          ? "Load more photos"
          : "All photos fetched!"}
      </Button>
    </>
  );
};

export default PhotosView;
