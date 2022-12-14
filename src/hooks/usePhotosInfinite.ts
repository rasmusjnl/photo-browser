import { useInfiniteQuery } from "@tanstack/react-query";
import { getPhotosByPage } from "services/photoService";

/** Fetch paginated photo data.
 *  Default to 1 page at a time limited to 100 photos. */
const usePhotosInfinite = (filter: string) => {
  return useInfiniteQuery(
    [`photos-infinite-${filter}`],
    ({ pageParam }) => getPhotosByPage({ pageParam, limit: 100, filter: filter }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    },
  );
};

export default usePhotosInfinite;
