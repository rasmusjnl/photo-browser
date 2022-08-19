import axiosInstance from "axiosConfig";

const BASE_URL = "/photos";

export const getPhotosByPage = async ({ pageParam = 1, limit = 100 }): Promise<Api.PhotoPage> =>
  await axiosInstance.get(`${BASE_URL}?_limit=${limit}&_page=${pageParam}`);

export const getPhotos = async (): Promise<Api.Photo[]> => await axiosInstance.get(`${BASE_URL}`);

export const getPhotoById = async (id: string): Promise<Api.Photo> =>
  await axiosInstance.get(`${BASE_URL}/${id}`);

export const getPhotosByAlbumId = async (id: string): Promise<Api.Photo[]> =>
  await axiosInstance.get(`${BASE_URL}?albumId=${id}`);
