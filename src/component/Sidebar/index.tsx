import { List, Slide, Stack } from "@chakra-ui/react";
import { forwardRef } from "react";
import NavItem from "./sections/NavItem";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sidebar = forwardRef<HTMLInputElement, any>(function Sidebar(
  { isOpen }: { isOpen: boolean },
  ref
) {
  const item = ["Home", "Rent", "Sell", "About", "Create Account", "Login"];
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
          {item.map((data, index) => (
            <NavItem key={index} text={data} />
          ))}
        </List>
      </Stack>
    </Slide>
  );
});

export default Sidebar;
