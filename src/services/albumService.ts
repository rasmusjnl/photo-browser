import axiosInstance from "axiosConfig";

const BASE_URL = "/albums";

export const getAlbumsByPage = async ({
  pageParam = 1,
  limit = 100,
  filter = "",
}): Promise<Api.AlbumPage> =>
  await axiosInstance.get(`${BASE_URL}?title_like=${filter}&_limit=${limit}&_page=${pageParam}`);

export const getAlbums = async ({ filter = "" }): Promise<Api.Album[]> =>
  await axiosInstance.get(`${BASE_URL}?title_like=${filter}`);
