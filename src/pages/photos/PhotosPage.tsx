import React from "react";
import usePhotosInfinite from "hooks/usePhotosInfinite";
import useFilterStore from "stores/useFilterStore";

import { Spinner, Text } from "@chakra-ui/react";
import Error from "components/ErrorMessage";
import Photos from "pages/photos/Photos";
import LoadMoreButton from "components/LoadMoreButton";

const PhotosPage: React.FC = () => {
  const filter = useFilterStore((state) => state.photos);
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    usePhotosInfinite(filter);

  if (isLoading) return <Spinner />;
  if (isError) return <Error error={error as Error} errorContext="photos" />;

  const hasData = data.pages[0].data.length > 0;

  return hasData ? (
    <>
      {data.pages.map((page, i) => (
        <React.Fragment key={`${i}-${page.nextPage}`}>
          <Photos photos={page.data} />
        </React.Fragment>
      ))}
      <LoadMoreButton
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={() => fetchNextPage()}
      />
    </>
  ) : (
    <Text mt="1rem">No photos match the given search criteria.</Text>
  );
};

export default PhotosPage;
