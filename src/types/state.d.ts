/** Namespace for Zustand's global state.
 *  As the global state expands, this file can be split into logical entities. */
declare namespace State {
  type FilterType = "photos" | "albums" | "albumPhotos";

  interface Filter {
    photos: string;
    albums: string;
    albumPhotos: string;
    setFilter: (type: FilterType, filter: string) => void;
  }
}
