import {
  Button,
  Card,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import HeroImage from "../../../assets/Hero.jpg";
import HeroMobileImage from "../../../assets/HeroMobile.jpg";
import InputField from "./fragment/InputField";

const Hero = () => {
  return (
    <Stack width={"100%"} position={"relative"}>
      <Stack
        height={"80vh"}
        mt={4}
        position={"relative"}
        p={16}
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
        <Stack textAlign={"center"} position={"relative"} alignItems={"center"}>
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
          >
            Get Started
          </Button>
        </Stack>
      </Stack>
      <HStack justifyContent={"center"} width={"100%"} height={"20vh"}>
        <Card
          position={{ base: "relative", lg: "absolute" }}
          top={{ lg: "73%" }}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bg={"white"}
          shadow={"md"}
          width={{ base: "100%", lg: "90%" }}
          mx={"auto"}
          rounded={"3xl"}
          p={8}
          flexWrap={{ base: "wrap", lg: "nowrap" }}
        >
          <InputField
            text="Location"
            placeholder="Jakarta"
            name="location"
            borderRight={"1px"}
          />
          <InputField
            text="PropertyType"
            placeholder="Duplex"
            name="property-type"
            borderRight={{ md: "1px" }}
          />
          <InputField
            text="Budget"
            placeholder="$12,000"
            name="budget"
            mt={{ base: 4, md: 0 }}
          />
          <HStack
            justifyContent={{ base: "center", lg: "end" }}
            width={"100%"}
            alignItems={"center"}
            mt={{ base: 4, lg: 0 }}
          >
            <Button
              colorScheme="blue"
              fontWeight={400}
              rounded={"xl"}
              px={8}
              py={6}
            >
              Search Property
            </Button>
          </HStack>
        </Card>
      </HStack>
    </Stack>
  );
};

export default Hero;
