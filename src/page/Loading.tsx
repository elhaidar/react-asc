import { Flex, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex align={"center"} justify={"center"} h={"80vh"}>
      <Spinner size="xl" color="blue.500" />
    </Flex>
  );
};

export default Loading;
