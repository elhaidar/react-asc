/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import {
  borderColor,
  buttonBackgroundColor,
  buttonHoverBackgroundColor,
  buttonTextColor,
} from "../../../../../component/styles";
import { useForm } from "react-hook-form";
import encrypt from "../../../../../util/encrypt";
import { postData, propertiesApiUrl } from "../../../../../services/api";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    const newData = {
      ...data,
      image_url: "http://dummyimage.com/171x148.png/ff4444/ffffff",
    };
    console.log(newData);
    const encryptedData = encrypt(newData);

    const payload = {
      payload: encryptedData,
    };
    postData(propertiesApiUrl, JSON.stringify(payload));
    navigate("/product");
  };

  return (
    <Container
      justifyContent={"center"}
      h={"80vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Heading mb={8}>Add Data</Heading>
      <Stack
        p={8}
        borderColor={borderColor()}
        border={"1px"}
        rounded={"2xl"}
        minW={"400px"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mb={4} isRequired>
            <FormLabel>Property Name</FormLabel>
            <Input
              _focus={{ borderColor: borderColor() }}
              borderColor={borderColor()}
              {...register("property_name")}
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Alamat</FormLabel>
            <Input
              _focus={{ borderColor: borderColor() }}
              borderColor={borderColor()}
              {...register("alamat")}
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              _focus={{ borderColor: borderColor() }}
              borderColor={borderColor()}
              {...register("description")}
            />
          </FormControl>
          <FormControl mb={4}>
            <Checkbox {...register("is_premium")}>Premium</Checkbox>
          </FormControl>
          <Button
            type="submit"
            bg={buttonBackgroundColor()}
            color={buttonTextColor()}
            _hover={{ background: buttonHoverBackgroundColor() }}
          >
            Submit
          </Button>
        </form>
      </Stack>
    </Container>
  );
};

export default CreatePage;
