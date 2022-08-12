import axiosInstance from "axiosConfig";

const BASE_URL = "/photos";

export const getPhotos = async (): Promise<Api.Photo[]> =>
  await axiosInstance.get(`${BASE_URL}?_limit=2000`); // TODO: limits for testing purposes

export const getPhotoById = async (id: string): Promise<Api.Photo> =>
  await axiosInstance.get(`${BASE_URL}/${id}`);
