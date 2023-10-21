import { HStack, Input, Stack, Text } from "@chakra-ui/react";

interface PropType {
  text: string;
  placeholder: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  borderRight?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mt?: any;
}

const InputField = ({
  text,
  placeholder,
  name,
  borderRight = "0px",
  mt = 0,
}: PropType) => {
  return (
    <HStack
      justifyContent={"center"}
      alignItems={"center"}
      width={{ base: "48%", md: "30%", lg: "100%" }}
      borderRight={borderRight}
      borderColor={"black"}
      mt={mt}
    >
      <Stack width={"100%"} px={4}>
        <Text>{text}</Text>
        <Input placeholder={placeholder} border={"none"} name={name} />
      </Stack>
    </HStack>
  );
};

export default InputField;
