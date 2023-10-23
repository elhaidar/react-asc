import { Button, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import HeroImage from "../../../../assets/Hero.jpg";
import HeroMobileImage from "../../../../assets/HeroMobile.jpg";
import Form from "./fragment/Form";

const Hero = () => {
  return (
    <Stack width={"100%"} position={"relative"} as={"main"}>
      <Stack
        height={"80vh"}
        maxHeight={"700px"}
        mt={4}
        position={"relative"}
        px={{ base: 4, md: 16 }}
        py={{ base: 8, md: 16 }}
        borderRadius={"30px"}
      >
        <Stack
          position={"absolute"}
          top={0}
          left={0}
          width={"100%"}
          height={"100%"}
        >
          <Image
            src={HeroMobileImage}
            display={{ base: "block", md: "none" }}
            alt="hero"
            objectFit={"cover"}
            width={"100%"}
            height={"100%"}
            borderRadius={"30px"}
            opacity={"80%"}
          />
          <Image
            src={HeroImage}
            display={{ base: "none", md: "block" }}
            alt="hero"
            objectFit={"cover"}
            width={"100%"}
            height={"100%"}
            borderRadius={"30px"}
            opacity={"80%"}
          />
        </Stack>
        <Stack
          textAlign={"center"}
          position={"relative"}
          alignItems={"center"}
          color={"black"}
        >
          <Heading
            fontSize={{ base: 32, lg: 46 }}
            fontWeight={500}
            width={{ base: "90%", lg: "50%" }}
          >
            Investing In Your Future One Home At A Time
          </Heading>
          <Text p={6} width={{ base: "100%", lg: "50%" }}>
            {" "}
            We{"'"}ll help you find the key to your dream home. Experience the
            joy of homeownership. Let us make your home buying journey simple.
          </Text>
          <Button
            bg={"transparent"}
            border={"1px solid black"}
            rounded={"2xl"}
            p={6}
            boxShadow={"md"}
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
      <HStack justify={"center"} height={"20vh"}>
        <Form />
      </HStack>
    </Stack>
  );
};

export default Hero;
