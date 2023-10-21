import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import logo from "../../assets/react.svg";
import { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar";
import { CgMenuRightAlt } from "react-icons/cg";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sidebarRef = useRef<any>(null);

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);
    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event: MouseEvent) {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      // Clicked outside the side navigation bar, close it
      setIsOpen(false);
    }
  }

  return (
    <Box width={"100%"} mx={"auto"} py={4}>
      <List
        mx={{ base: 8, lg: 32 }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"relative"}
      >
        <ListItem display={"flex"} alignItems={"center"} gap={16}>
          <Box display={"flex"} alignItems={"center"}>
            <Image src={logo} alt="logo" width={"48px"} height={"48px"} />
          </Box>
        </ListItem>
        <List display={{ base: "none", lg: "flex" }} gap={16}>
          <Link to={"/"}>
            <ListItem>Home</ListItem>
          </Link>
          <Link to={"/product"}>
            <ListItem>Sell</ListItem>
          </Link>
          <Link to={"#"}>
            <ListItem>Rent</ListItem>
          </Link>
          <Link to={"#"}>
            <ListItem>About</ListItem>
          </Link>
        </List>
        <ListItem display={"flex"} alignItems={"center"} gap={4}>
          <IconButton
            aria-label="hamburger-button"
            icon={<TiWeatherPartlySunny size={28} />}
            bg={"transparent"}
            size={"lg"}
          />
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
              fontWeight={500}
            >
              Log in
            </Button>
            <Button
              bg={"black"}
              colorScheme="secondary"
              fontWeight={400}
              rounded={"2xl"}
              px={6}
            >
              Create account
            </Button>
          </HStack>
          <HStack display={{ lg: "none" }} alignItems={"center"}>
            <IconButton
              aria-label="hamburger-button"
              icon={<CgMenuRightAlt size={28} />}
              bg={"transparent"}
              size={"lg"}
              onClick={() => setIsOpen(!isOpen)}
            />
          </HStack>
        </ListItem>
      </List>
      <Sidebar isOpen={isOpen} ref={sidebarRef} />
    </Box>
  );
};

export default Navbar;
