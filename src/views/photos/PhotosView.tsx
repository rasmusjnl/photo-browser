import React from "react";
import { Button, Spinner, VStack } from "@chakra-ui/react";
import Error from "components/Error";
import Photos from "views/photos/Photos";
import usePhotosInfinite from "hooks/usePhotosInfinite";
import { CheckIcon, RepeatIcon } from "@chakra-ui/icons";

const PhotosView: React.FC = () => {
  const { data, status, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePhotosInfinite();

  return (
    <>
      {status === "loading" ? (
        <Spinner />
      ) : status === "error" ? (
        <Error error={error as Error} />
      ) : (
        // TODO: check horizontal scrollbar
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
      )}
    </>
  );
};

export default PhotosView;
