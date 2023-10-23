import { List, ListItem, Slide, Stack } from "@chakra-ui/react";
import { forwardRef } from "react";
import { dataAuthLink, dataNavLink } from "../../util/data";
import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sidebar = forwardRef<HTMLInputElement, any>(function Sidebar(
  { isOpen }: { isOpen: boolean },
  ref
) {
  return (
    <Slide direction="right" in={isOpen} style={{ zIndex: 10 }}>
      <Stack
        ref={ref}
        position={"fixed"}
        top={0}
        right={0}
        backgroundColor={"black"}
        height={"100%"}
        width={{ base: "40%", lg: "33%", xl: "25%" }}
      >
        <List
          mt={16}
          mx={8}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
        >
          {dataNavLink.map((item, index) => (
            <ListItem key={index} color={"secondary"} mb={6}>
              <Link to={item.path}>{item.title}</Link>
            </ListItem>
          ))}
          {dataAuthLink.map((item, index) => (
            <ListItem key={index} color={"secondary"} mb={6}>
              <Link to={item.path}>{item.title}</Link>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Slide>
  );
});

export default Sidebar;
