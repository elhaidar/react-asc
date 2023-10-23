/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  HStack,
  IconButton,
  Image,
  List,
  ListItem,
  Switch,
} from "@chakra-ui/react";
import logo from "../../assets/react.svg";
import { useContext, useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link } from "react-router-dom";
import { dataNavLink } from "../../util/data";
import NavbarRightButton from "./section/NavbarRightButton";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ThemeContext } from "../../App";
import { iconHoverBackgroundColor, textColor } from "../styles";

const Navbar = () => {
  const theme: any = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    <Box as="nav" width={"100%"} mx={"auto"} py={4}>
      <List
        mx={{ base: 0, md: "10%" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <ListItem gap={16} display={"flex"} alignItems={"center"}>
          <Image src={logo} alt="logo" width={"32px"} height={"32px"} />
          <List
            display={{ base: "none", lg: "flex" }}
            gap={{ base: 8, lg: 12 }}
          >
            {dataNavLink.map((item, index) => (
              <ListItem key={index}>
                <Link to={item.path}>{item.title}</Link>
              </ListItem>
            ))}
          </List>
        </ListItem>
        <ListItem display={"flex"} alignItems={"center"} gap={4}>
          <NavbarRightButton />
          <HStack pl={4}>
            <SunIcon />
            <Switch
              size="lg"
              isChecked={theme.currentTheme}
              onChange={theme.switchTheme}
            />
            <MoonIcon />
          </HStack>
          <IconButton
            aria-label="hamburger-button"
            icon={<CgMenuRightAlt size={28} />}
            bg={"transparent"}
            _hover={{ background: iconHoverBackgroundColor() }}
            display={{ base: "flex", lg: "none" }}
            size={"lg"}
            color={textColor()}
            onClick={() => setIsOpen(!isOpen)}
          />
        </ListItem>
      </List>
      <Sidebar isOpen={isOpen} ref={sidebarRef} />
    </Box>
  );
};

export default Navbar;
