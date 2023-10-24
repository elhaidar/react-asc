/* eslint-disable @typescript-eslint/no-explicit-any */
import { SimpleGrid, Stack } from "@chakra-ui/react";
import ProductCard from "./section/ProductCard";
import { useEffect, useState } from "react";
import ActionButton from "./section/ActionButton";
import { fetchData, propertiesApiUrl } from "../../../services/api";
import { PropertyType } from "../../../util/data";
import Loading from "../../../component/Loading";

const ProductPage = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  useEffect(() => {
    fetchData(propertiesApiUrl, (status: string, { data }: any) => {
      status ? setProperties(data) : console.log(data);
    });
  }, []);

  return (
    <Stack as={"main"} p={"10px"}>
      {properties.length > 0 ? (
        <>
          <ActionButton />
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
