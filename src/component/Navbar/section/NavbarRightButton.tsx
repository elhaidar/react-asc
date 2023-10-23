import { Button, HStack } from "@chakra-ui/react";
import {
  buttonBackgroundColor,
  buttonHoverBackgroundColor,
  buttonTextColor,
  textColor,
} from "../../styles";

const NavbarRightButton = () => {
  return (
    <HStack
      alignItems={"center"}
      gap={6}
      display={{ base: "none", lg: "flex" }}
    >
      <Button
        bg={"transparent"}
        _hover={{
          background: "transparent",
          textDecoration: "underline",
          textUnderlineOffset: "6px",
        }}
        fontWeight={400}
        color={textColor()}
      >
        Log in
      </Button>
      <Button
        bg={buttonBackgroundColor()}
        _hover={{ background: buttonHoverBackgroundColor() }}
        fontWeight={400}
        rounded={"2xl"}
        px={6}
        color={buttonTextColor()}
      >
        Create account
      </Button>
    </HStack>
  );
};

export default NavbarRightButton;
