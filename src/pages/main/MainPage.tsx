import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import { FilterContext } from "contexts/filterContext";
import Filter from "components/Filter";

const MainPage: React.FC = () => {
  const [filter, setFilter] = useState("");
  const value = useMemo(() => ({ filter, setFilter }), [filter]);

  // TODO: reset filter when navigating to another route

  return (
    <>
      <FilterContext.Provider value={value}>
        <Filter />
        <Outlet />
      </FilterContext.Provider>
    </>
  );
};

export default MainPage;
