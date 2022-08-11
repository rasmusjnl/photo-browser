import axiosInstance from "axiosConfig";

const BASE_URL = "/photos";

export const getPhotos = async (): Promise<Api.Photo[]> =>
  await axiosInstance.get(`${BASE_URL}?_page=1&_limit=20`); // TODO: limits for testing purposes

export const getPhotoById = async (id: string): Promise<Api.Photo> =>
  await axiosInstance.get(`${BASE_URL}/${id}`);
