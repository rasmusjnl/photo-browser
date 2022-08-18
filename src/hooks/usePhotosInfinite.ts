import { useInfiniteQuery } from "@tanstack/react-query";
import { getPhotosByPage } from "services/photoService";

/** Fetch paginated photo data */
const usePhotosInfinite = (queryParams?: string) => {
  return useInfiniteQuery(
    ["photos-infinite"],
    ({ pageParam }) => getPhotosByPage({ pageParam }, queryParams),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
    },
  );
};

export default usePhotosInfinite;
