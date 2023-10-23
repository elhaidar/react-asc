import { Button, Flex, HStack } from "@chakra-ui/react";
import InputField from "./InputField";
import { cardBackgroundColor } from "../../../../../component/styles";

const Form = () => {
  return (
    <Flex
      position={{ base: "relative", lg: "absolute" }}
      top={{ lg: "70%" }}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"white"}
      shadow={"md"}
      width={{ base: "100%", lg: "90%" }}
      mx={"auto"}
      rounded={"3xl"}
      p={8}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
      bgColor={cardBackgroundColor()}
    >
      <InputField
        text="Location"
        placeholder="Jakarta"
        name="location"
        borderRightWidth={{ base: "1px" }}
      />
      <InputField
        text="Property Type"
        placeholder="Duplex"
        name="property-type"
        borderRightWidth={{ base: "0px", md: "1px" }}
      />

      <InputField
        text="Budget"
        placeholder="12,000"
        name="budget"
        type="number"
        mt={{ base: 4, md: 0 }}
      />
      <HStack
        justifyContent={{ base: "center", lg: "end" }}
        width={"100%"}
        alignItems={"center"}
        mt={{ base: 4, lg: 0 }}
      >
        <Button
          bg={"primary.main"}
          fontWeight={400}
          rounded={"xl"}
          px={8}
          color={"secondary"}
          py={6}
          _hover={{ backgroundColor: "primary.darker" }}
        >
          Search Property
        </Button>
      </HStack>
    </Flex>
  );
};

export default Form;
