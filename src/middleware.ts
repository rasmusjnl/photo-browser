import { mountStoreDevtool } from "simple-zustand-devtools";
import useFilterStore from "stores/useFilterStore";

/** Initialize Zustand devtools for all desired stores here. */
export const initZustandDevtools = () => {
  mountStoreDevtool("FilterStore", useFilterStore);
};
