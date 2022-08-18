import { useQuery } from "@tanstack/react-query";
import { getPhotosByAlbumId } from "services/photoService";

/** Fetch all photo data */
const usePhotosByAlbumId = (albumId: string) => {
  return useQuery<Api.Photo[], Error>(["photos-by-album-id"], () => getPhotosByAlbumId(albumId), {
    enabled: true,
  });
};

export default usePhotosByAlbumId;
