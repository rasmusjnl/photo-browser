import React from "react";
import useAlbumsInfinite from "hooks/useAlbumsInfinite";
import useFilterStore from "stores/useFilterStore";

import { Spinner, Wrap, Text, Button } from "@chakra-ui/react";
import { CheckIcon, RepeatIcon } from "@chakra-ui/icons";
import ErrorMessage from "components/ErrorMessage";
import Albums from "./Albums";

const AlbumsPage: React.FC = () => {
  const filter = useFilterStore((state) => state.albums);
  const { data, isLoading, isError, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useAlbumsInfinite(filter);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage error={error as Error} errorContext="albums" />;

  const hasData = data.pages[0].data.length > 0;

  return (
    <>
      <Wrap justify="center" py="0.5rem">
        {hasData ? (
          data.pages.map((page, i) => (
            <React.Fragment key={`${i}-${page.nextPage}`}>
              <Albums albums={page.data} />
            </React.Fragment>
          ))
        ) : (
          <Text mt="1rem">No albums match the given search criteria.</Text>
        )}
      </Wrap>
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
            ? "Loading more albums..."
            : hasNextPage
            ? "Load more albums"
            : "All albums fetched!"}
        </Button>
      )}
    </>
  );
};

export default AlbumsPage;
