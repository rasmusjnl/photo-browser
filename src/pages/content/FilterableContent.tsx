import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Filter from "components/Filter";

const FilterableContent: React.FC = () => {
  const { pathname } = useLocation();
  const [filterType, setFilterType] = useState<State.FilterType | null>(null);

  useEffect(() => {
    const splitPathname = pathname.split("/");
    if (splitPathname.length === 2) {
      if (splitPathname[1] === "photos") {
        setFilterType("photos");
      } else {
        setFilterType("albums");
      }
    } else {
      setFilterType("albumPhotos");
    }
  }, [pathname]);

  return (
    <>
      {filterType && <Filter key={filterType} type={filterType} />}
      <Outlet />
    </>
  );
};

export default FilterableContent;
