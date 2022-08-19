import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FilterContext } from "contexts/filterContext";
import { useContext } from "react";

const Filter: React.FC = () => {
  const { filter, setFilter } = useContext(FilterContext);

  const handleFilter = (newFilter: string) => {
    // TODO: debounce this function
    setFilter(newFilter);
  };

  return (
    <InputGroup width="15rem">
      <InputLeftElement children={<SearchIcon />} />
      <Input
        sx={{ mb: "1rem" }}
        placeholder="Search by title..."
        type="text"
        value={filter}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </InputGroup>
  );
};

export default Filter;
