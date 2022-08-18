import axiosInstance from "axiosConfig";

const BASE_URL = "/photos";

export const getPhotosByPage = async (
  { pageParam = 1 },
  queryParams?: string,
): Promise<Api.PhotoPage> => {
  const queryString = queryParams
    ? `${BASE_URL}?_limit=100&_page=${pageParam}&${queryParams}`
    : `${BASE_URL}?_limit=100&_page=${pageParam}`;
  return await axiosInstance.get(queryString);
};

export const getPhotos = async (): Promise<Api.Photo[]> => await axiosInstance.get(`${BASE_URL}`);

export const getPhotoById = async (id: string): Promise<Api.Photo> =>
  await axiosInstance.get(`${BASE_URL}/${id}`);

export const getPhotosByAlbumId = async (id: string): Promise<Api.Photo[]> =>
  await axiosInstance.get(`${BASE_URL}?albumId=${id}`);
