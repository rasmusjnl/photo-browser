import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "services/photoService";

/** Fetch all photo data */
const usePhotos = () => {
  return useQuery<Api.Photo[], Error>(["photos"], getPhotos, {
    enabled: true,
  });
};

export default usePhotos;
