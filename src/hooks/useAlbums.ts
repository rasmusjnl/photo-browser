import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "services/albumService";

/** Fetch all album data */
const useAlbums = (filter: string) => {
  return useQuery<Api.Album[], Error>([`albums-${filter}`], () => getAlbums({ filter }));
};

export default useAlbums;
