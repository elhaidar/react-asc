/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import {
  borderColor,
  buttonPrimaryHoverBackgroundColor,
  primaryColor,
  textColor,
} from "../../component/styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    if (data.email === "tes@gmail.com" && data.password === "1234") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      alert("Login gagal");
    }
  };

  const handleShowClick = () => setShowPassword(!showPassword);
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg={primaryColor()} />
        <Heading color={primaryColor()}>Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={4}
              p={8}
              boxShadow="md"
              rounded={"3xl"}
              border={"1px"}
              borderColor={borderColor()}
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    {...register("email")}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password")}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                backgroundColor={primaryColor()}
                _hover={{ background: buttonPrimaryHoverBackgroundColor() }}
                color={textColor()}
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color={primaryColor()} href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default LoginPage;
