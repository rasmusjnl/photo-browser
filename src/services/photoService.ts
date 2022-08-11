import axiosInstance from "axiosConfig";

const BASE_URL = "/photos";

export const getAllPhotoData = async (): Promise<Api.Photo[]> =>
  await axiosInstance.get(`${BASE_URL}`);

export const getPhotoById = async (id: string): Promise<Api.Photo> =>
  await axiosInstance.get(`${BASE_URL}/${id}`);
