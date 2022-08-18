import { useInfiniteQuery } from "@tanstack/react-query";
import { getPhotosByPage } from "services/photoService";

/** Fetch paginated photo data */
const usePhotosInfinite = () => {
  return useInfiniteQuery(["photos-infinite"], getPhotosByPage, {
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  });
};

export default usePhotosInfinite;
