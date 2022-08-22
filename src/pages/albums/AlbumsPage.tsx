import React from "react";
import useAlbumsInfinite from "hooks/useAlbumsInfinite";
import useFilterStore from "stores/useFilterStore";

import { Spinner, Text } from "@chakra-ui/react";
import ErrorMessage from "components/ErrorMessage";
import Albums from "./Albums";
import LoadMoreButton from "components/LoadMoreButton";

const AlbumsPage: React.FC = () => {
  const filter = useFilterStore((state) => state.albums);
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useAlbumsInfinite(filter);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error as Error} errorContext="albums" />;

  const hasData = data.pages[0].data.length > 0;

  return hasData ? (
    <>
      {data.pages.map((page, i) => (
        <React.Fragment key={`${i}-${page.nextPage}`}>
          <Albums albums={page.data} />
        </React.Fragment>
      ))}
      <LoadMoreButton
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        fetchNextPage={() => fetchNextPage()}
      />
    </>
  ) : (
    <Text mt="1rem">No albums match the given search criteria.</Text>
  );
};

export default AlbumsPage;
