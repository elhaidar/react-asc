/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, SimpleGrid, Stack } from "@chakra-ui/react";
import ProductCard from "./section/ProductCard";
import { useEffect, useState } from "react";
import { fetchData, propertiesApiUrl } from "../../services/api";
import { PropertyType } from "../../util/data";
import Loading from "../../component/Loading";
import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  buttonBackgroundColor,
  buttonHoverBackgroundColor,
  buttonTextColor,
} from "../../component/styles";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  useEffect(() => {
    fetchData(propertiesApiUrl, (status: string, { data }: any) => {
      status ? setProperties(data) : console.log(data);
    });
  }, []);

  useEffect(() => {
    console.log(properties);
  }, [properties]);

  return (
    <Stack as={"main"} p={"10px"}>
      {properties.length > 0 ? (
        <>
          <Flex py={8} alignItems={"center"} justify={"space-between"}>
            <Link to={"/product/create"}>
              <Button
                leftIcon={<PlusSquareIcon />}
                bg={buttonBackgroundColor()}
                color={buttonTextColor()}
                _hover={{ background: buttonHoverBackgroundColor() }}
                fontWeight={400}
              >
                Add Data
              </Button>
            </Link>
          </Flex>
          <SimpleGrid
            minChildWidth={{ base: "100%", md: "40%", lg: "30%" }}
            spacing={8}
            placeItems={"center"}
          >
            {properties.length > 0 &&
              properties
                .slice(properties.length - 1 - 50, properties.length)
                .map((item) => <ProductCard key={item.id} data={item} />)}
          </SimpleGrid>
        </>
      ) : (
        <Loading />
      )}
    </Stack>
  );
};

export default ProductPage;
