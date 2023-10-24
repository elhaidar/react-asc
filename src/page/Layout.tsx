import { Container } from "@chakra-ui/react";
import { backgroundColor, textColor } from "../component/styles";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Container
      maxWidth={"8xl"}
      minH={"100vh"}
      bg={backgroundColor()}
      color={textColor()}
      h={"100%"}
    >
      <Outlet />
    </Container>
  );
};

export default RootLayout;
