import { PlusSquareIcon } from "@chakra-ui/icons";
import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  buttonPrimaryBackgroundColor,
  buttonPrimaryHoverBackgroundColor,
  buttonTextColor,
} from "../../../../component/styles";

const ActionButton = () => {
  return (
    <HStack py={8} alignItems={"center"} justify={"flex-start"} gap={4}>
      <Link to={"/product/create"}>
        <Button
          leftIcon={<PlusSquareIcon />}
          bg={buttonPrimaryBackgroundColor()}
          color={buttonTextColor()}
          _hover={{ background: buttonPrimaryHoverBackgroundColor() }}
          fontWeight={400}
        >
          Add Data
        </Button>
      </Link>
    </HStack>
  );
};

export default ActionButton;
