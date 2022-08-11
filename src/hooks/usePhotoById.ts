import { useQuery } from "@tanstack/react-query";
import { getPhotoById } from "services/photoService";

/** Fetch single photo data by its id */
const usePhotoById = (id: string) => {
  return useQuery<Api.Photo, Error>(["photo"], () => getPhotoById(id), {
    enabled: false,
  });
};

export default usePhotoById;
