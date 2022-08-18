import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "services/albumService";

/** Fetch all album data */
const useAlbums = () => {
  return useQuery<Api.Album[], Error>(["albums"], getAlbums);
};

export default useAlbums;
