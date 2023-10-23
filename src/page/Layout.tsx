import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { backgroundColor, textColor } from "../component/styles";

const Layout = () => {
  return (
    <Container maxWidth={"8xl"} bg={backgroundColor()} color={textColor()}>
      <Box minHeight={"100vh"} mx={{ base: 8, lg: 12 }}>
        <Navbar />
        <Outlet />
      </Box>
    </Container>
  );
};

export default Layout;
