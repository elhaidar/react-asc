import { ListItem } from "@chakra-ui/react";

const NavItem = ({ text }: { text: string }) => {
  return (
    <ListItem color={"white"} mb={8}>
      {text}
    </ListItem>
  );
};

export default NavItem;
