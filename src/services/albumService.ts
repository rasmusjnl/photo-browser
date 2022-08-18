import axiosInstance from "axiosConfig";

const BASE_URL = "/albums";

export const getAlbums = async (): Promise<Api.Album[]> => await axiosInstance.get(`${BASE_URL}`);
