import { CheckIcon, RepeatIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

interface Props {
  isFetchingNextPage: boolean;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
}

const LoadMoreButton: React.FC<Props> = ({
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: Props) => {
  return (
    <Button
      mt="2rem"
      title="Load more"
      isLoading={isFetchingNextPage}
      disabled={!hasNextPage || isFetchingNextPage}
      leftIcon={hasNextPage ? <RepeatIcon /> : <CheckIcon />}
      onClick={() => fetchNextPage()}
    >
      {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load more" : "Everything fetched!"}
    </Button>
  );
};

export default LoadMoreButton;
