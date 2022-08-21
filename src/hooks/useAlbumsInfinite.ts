import { useInfiniteQuery } from "@tanstack/react-query";
import { getAlbumsByPage } from "services/albumService";

/** Fetch paginated album data.
 *  Default to 1 page at a time limited to 100 albums. */
const useAlbumsInfinite = (filter: string) => {
  return useInfiniteQuery(
    [`albums-infinite-${filter}`],
    ({ pageParam }) => getAlbumsByPage({ pageParam, limit: 100, filter: filter }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    },
  );
};

export default useAlbumsInfinite;
