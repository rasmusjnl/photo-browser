import { useEffect, useMemo, useRef } from "react";
import debounce from "lodash.debounce";
import useFilterStore from "stores/useFilterStore";

import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

interface Props {
  type: State.FilterType;
}

const Filter: React.FC<Props> = ({ type }: Props) => {
  const filter = useFilterStore((state) => state[type]);
  const setFilter = useFilterStore((state) => state.setFilter);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFilter = (newFilter: string) => setFilter(type, newFilter);

  /** Debounce the filter calls to prevent unnecessary re-renders */
  const debouncedHandleFilter = useMemo(() => debounce(handleFilter, 500), []);

  const handleClear = () => {
    setFilter(type, "");
    /** Since the input is uncontrolled, we also need to clear the filter text manually */
    if (inputRef.current !== null) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  /** Cancel debounce to prevent the function from being called after it's unmounted */
  useEffect(() => {
    return () => debouncedHandleFilter.cancel();
  }, []);

  return (
    <InputGroup width="15rem">
      <InputLeftElement children={<SearchIcon />} />
      <Input
        ref={inputRef}
        sx={{ mb: "1rem" }}
        placeholder="Search by title..."
        type="text"
        defaultValue={filter}
        onChange={(e) => debouncedHandleFilter(e.target.value)}
      />
      <InputRightElement
        children={
          <IconButton
            size="xs"
            variant="ghost"
            aria-label="clear-filter-input"
            title="Clear filter"
            icon={<CloseIcon />}
            onClick={handleClear}
          />
        }
      />
    </InputGroup>
  );
};

export default Filter;
