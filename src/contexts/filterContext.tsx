import { createContext } from "react";

export const FilterContext = createContext({ filter: "", setFilter: (filter: string) => {} });
