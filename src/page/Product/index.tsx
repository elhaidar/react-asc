import { HStack, Stack } from "@chakra-ui/react";
import ProductCard from "./section/ProductCard";
import Building1 from "../../assets/building1.jpg";
import Building2 from "../../assets/building2.jpg";
import Building3 from "../../assets/building3.jpg";

const ProductPage = () => {
  const property = [
    {
      id: 1,
      img: Building1,
      price: 550000,
      name: "The Bismillah Apartment",
      location: "Jakarta, Indonesia",
      bedQty: 4,
      bathQty: 2,
      parkingQty: 1,
    },
    {
      id: 2,
      img: Building2,
      price: 550000,
      name: "The Bismillah Apartment",
      location: "Jakarta, Indonesia",
      bedQty: 4,
      bathQty: 2,
      parkingQty: 1,
    },
    {
      id: 3,
      img: Building3,
      price: 550000,
      name: "The Bismillah Apartment",
      location: "Jakarta, Indonesia",
      bedQty: 4,
      bathQty: 2,
      parkingQty: 1,
    },
    {
      id: 4,
      img: Building1,
      price: 550000,
      name: "The Bismillah Apartment",
      location: "Jakarta, Indonesia",
      bedQty: 4,
      bathQty: 2,
      parkingQty: 1,
    },
    {
      id: 5,
      img: Building2,
      price: 550000,
      name: "The Bismillah Apartment",
      location: "Jakarta, Indonesia",
      bedQty: 4,
      bathQty: 2,
      parkingQty: 1,
    },
    {
      id: 6,
      img: Building3,
      price: 550000,
      name: "The Bismillah Apartment",
      location: "Jakarta, Indonesia",
      bedQty: 4,
      bathQty: 2,
      parkingQty: 1,
    },
  ];

  return (
    <Stack
      height={"100vh"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <HStack py={8} flexWrap={"wrap"} width={"100%"}>
        {property.map((item) => (
          <ProductCard key={item.id} property={item} />
        ))}
      </HStack>
    </Stack>
  );
};

export default ProductPage;
