import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand";

const useFilterStore = create<State.Filter>((set) => ({
  photos: "",
  albums: "",
  albumPhotos: "",
  setFilter: (type: State.FilterType, filter: string) =>
    set(() => ({
      [type]: filter,
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("FilterStore", useFilterStore);
}

export default useFilterStore;
