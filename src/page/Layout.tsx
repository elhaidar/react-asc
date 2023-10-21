import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Layout = () => {
  return (
    <Box minHeight={"100vh"} maxWidth={"1280px"} mx={{ base: 8, lg: 16 }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
