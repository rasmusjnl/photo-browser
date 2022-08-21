import React, { useContext } from "react";
import { Button, Spinner, Text, VStack } from "@chakra-ui/react";
import { CheckIcon, RepeatIcon } from "@chakra-ui/icons";
import { FilterContext } from "contexts/filterContext";
import Error from "components/ErrorMessage";
import Photos from "pages/photos/Photos";
import usePhotosInfinite from "hooks/usePhotosInfinite";

const PhotosPage: React.FC = () => {
  const { filter } = useContext(FilterContext);
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePhotosInfinite(filter);

  if (isLoading) return <Spinner />;
  if (isError) return <Error error={error as Error} errorContext="photos" />;

  const hasData = data.pages[0].data.length > 0;

  return (
    <>
      <VStack>
        {hasData ? (
          data.pages.map((page, i) => (
            <React.Fragment key={`${i}-${page.nextPage}`}>
              <Photos photos={page.data} />
            </React.Fragment>
          ))
        ) : (
          <Text mt="1rem">No photos match the given search criteria.</Text>
        )}
      </VStack>
      {hasData && (
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
      )}
    </>
  );
};

export default PhotosPage;
