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

export default useFilterStore;
