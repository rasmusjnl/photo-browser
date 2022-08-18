import { Heading, Text, VStack } from "@chakra-ui/react";

type ErrorContext = "photos" | "photo-details" | "albums";

interface Props {
  error: Error;
  errorContext?: ErrorContext;
}

const getErrorDetails = (context?: ErrorContext) => {
  switch (context) {
    case "photos":
      return "There was an issue fetching images!";
    case "photo-details":
      return "There was an issue fetching the requested image!";
    case "albums":
      return "There was an issue fetching albums!";
    default:
      return "Something went wrong!";
  }
};

const ErrorMessage: React.FC<Props> = ({ error, errorContext }: Props) => {
  const errorDetails = getErrorDetails(errorContext);
  return (
    <VStack>
      <Heading mb="1rem" size="lg">
        {errorDetails}
      </Heading>
      <Text fontSize="lg">{error.message}</Text>
    </VStack>
  );
};

export default ErrorMessage;
