import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FilterContext } from "contexts/filterContext";
import { useContext, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

const Filter: React.FC = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const handleFilter = (newFilter: string) => {
    setFilter(newFilter);
  };

  // Debounce the filter calls to prevent unnecessary re-renders
  const debouncedHandleFilter = useMemo(() => debounce(handleFilter, 500), []);

  // Cancel debounce to prevent the function from being called after it's unmounted
  useEffect(() => {
    return () => debouncedHandleFilter.cancel();
  }, []);

  return (
    <InputGroup width="15rem">
      <InputLeftElement children={<SearchIcon />} />
      <Input
        sx={{ mb: "1rem" }}
        placeholder="Search by title..."
        type="text"
        defaultValue={filter}
        onChange={(e) => debouncedHandleFilter(e.target.value)}
      />
    </InputGroup>
  );
};

export default Filter;
