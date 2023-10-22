import { SimpleGrid } from "@chakra-ui/react";
import ProductCard from "./section/ProductCard";
import Building1 from "../../assets/building1.jpg";
import Building2 from "../../assets/building2.jpg";
import Building3 from "../../assets/building3.jpg";

const ProductPage = () => {
  const property = [
    Building1,
    Building2,
    Building3,
    Building1,
    Building2,
    Building3,
  ];

  return (
    <SimpleGrid
      p={"10px"}
      minChildWidth={{ base: "100%", md: "40%", lg: "30%" }}
      spacing={8}
      placeItems={"center"}
    >
      {property.map((item, index) => (
        <ProductCard key={index} data={item} />
      ))}
    </SimpleGrid>
  );
};

export default ProductPage;
