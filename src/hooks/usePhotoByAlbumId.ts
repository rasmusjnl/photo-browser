import { useQuery } from "@tanstack/react-query";
import { getPhotosByAlbumId } from "services/photoService";

/** Fetch all photos in a specific album */
const usePhotosByAlbumId = (albumId: string, filter = "") => {
  return useQuery<Api.Photo[], Error>(
    [`photos-by-album-id-${albumId}-${filter}`],
    () => getPhotosByAlbumId(albumId, filter),
    {
      enabled: true,
    },
  );
};

export default usePhotosByAlbumId;
