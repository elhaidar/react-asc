import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { cardTextColor } from "../../../../../component/styles";

interface PropType {
  text: string;
  placeholder: string;
  name: string;
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  borderRightWidth?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mt?: any;
}

const InputField = ({
  text,
  placeholder,
  name,
  type = "text",
  borderRightWidth = { base: "0px" },
  mt = 0,
}: PropType) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <FormControl
      width={{ base: "48%", md: "30%", lg: "100%" }}
      borderRightWidth={borderRightWidth}
      borderColor={"gray.400"}
      mt={mt}
      px={4}
    >
      <FormLabel fontWeight={"normal"}>{text}</FormLabel>
      <InputGroup opacity={isFocus ? 1 : 0.5}>
        {type == "number" && <InputLeftElement>$</InputLeftElement>}
        <Input
          placeholder={placeholder}
          _placeholder={{ color: cardTextColor() }}
          border={"none"}
          name={name}
          type={type}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </InputGroup>
    </FormControl>
  );
};

export default InputField;
