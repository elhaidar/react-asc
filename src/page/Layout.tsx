import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Layout = () => {
  return (
    <Box minHeight={"100vh"} mx={{ base: 8, lg: 12 }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;
