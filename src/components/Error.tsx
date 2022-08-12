import { Heading, Text, VStack } from "@chakra-ui/react";

interface Props {
  error: Error;
}

const Error: React.FC<Props> = ({ error }: Props) => {
  return (
    <VStack>
      <Heading>Something went wrong!</Heading>
      <Text>{error.message}</Text>
      <Text>Reload the page to try again.</Text>
    </VStack>
  );
};

export default Error;
