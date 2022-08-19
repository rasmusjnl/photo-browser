import { useInfiniteQuery } from "@tanstack/react-query";
import { getPhotosByPage } from "services/photoService";

/** Fetch paginated photo data.
 *  Default to 1 page at a time limited to 100 photos. */
const usePhotosInfinite = () => {
  return useInfiniteQuery(
    ["photos-infinite"],
    ({ pageParam }) => getPhotosByPage({ pageParam, limit: 100 }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    },
  );
};

export default usePhotosInfinite;
