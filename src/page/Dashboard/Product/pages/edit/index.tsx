/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Checkbox,
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
import {
  fetchData,
  patchData,
  propertiesApiUrl,
} from "../../../../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../../../../component/Loading";
import { PropertyType } from "../../../../../util/data";

const EditPage = () => {
  const { register, handleSubmit } = useForm();
  const [property, setProperty] = useState<PropertyType>({
    id: 0,
    image_url: "",
    property_name: "",
    alamat: "",
    is_premium: false,
    description: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchData(propertiesApiUrl + `/${id}`, (status: string, { data }: any) => {
      status ? setProperty(data) : console.log(data);
    });
  }, [id]);

  const onSubmit = () => {
    if (id) {
      const newData = {
        ...property,
        image_url: "http://dummyimage.com/171x148.png/ff4444/ffffff",
      };
      console.log(newData);
      const encryptedData = encrypt(newData);

      const payload = {
        payload: encryptedData,
      };
      patchData(propertiesApiUrl + `/${id}`, JSON.stringify(payload));
      navigate("/product");
    }
  };

  return (
    <>
      {property && (
        <Stack
          justifyContent={"center"}
          h={"80vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Heading mb={8}>Edit Data</Heading>
          <Stack
            p={8}
            borderColor={borderColor()}
            border={"1px"}
            rounded={"2xl"}
            minW={"400px"}
          >
            {property && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl mb={4} isRequired>
                  <FormLabel>Property Name</FormLabel>
                  <Input
                    _focus={{ borderColor: borderColor() }}
                    borderColor={borderColor()}
                    {...register("property_name")}
                    value={property.property_name}
                    onChange={(e) =>
                      setProperty({
                        ...property,
                        property_name: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl mb={4} isRequired>
                  <FormLabel>Alamat</FormLabel>
                  <Input
                    _focus={{ borderColor: borderColor() }}
                    borderColor={borderColor()}
                    {...register("alamat")}
                    value={property.alamat}
                    onChange={(e) =>
                      setProperty({
                        ...property,
                        alamat: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl mb={4} isRequired>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    _focus={{ borderColor: borderColor() }}
                    borderColor={borderColor()}
                    {...register("description")}
                    value={property.description}
                    onChange={(e) =>
                      setProperty({
                        ...property,
                        description: e.target.value,
                      })
                    }
                  />
                </FormControl>
                <FormControl mb={4}>
                  <Checkbox
                    {...register("is_premium")}
                    isChecked={property.is_premium}
                    onChange={(e) =>
                      setProperty({
                        ...property,
                        is_premium: e.target.checked,
                      })
                    }
                  >
                    Premium
                  </Checkbox>
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
            )}
          </Stack>
        </Stack>
      )}
      {!property && <Loading />}
    </>
  );
};

export default EditPage;
