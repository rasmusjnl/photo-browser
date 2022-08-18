import { QueryClient, useQuery } from "@tanstack/react-query";
import { getPhotoById } from "services/photoService";

/** Fetch single photo data by its id.
 *  If the photo is already found in cache, set it as initial data to prevent unnecessary network calls. */
const usePhotoById = (id: string, queryClient?: QueryClient) => {
  return useQuery<Api.Photo, Error>([id], () => getPhotoById(id), {
    initialData: !!queryClient
      ? () => {
          const cachedData: any = queryClient.getQueryData(["photos-infinite"]);
          if (!!cachedData) {
            const photosData: Api.Photo[] = cachedData.pages.flatMap((page: any) => page.data);
            const cachedPhotoData = photosData.find((photo) => photo.id === Number(id));
            return cachedPhotoData;
          }
        }
      : undefined,
  });
};

export default usePhotoById;
