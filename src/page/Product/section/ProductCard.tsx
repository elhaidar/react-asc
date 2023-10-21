import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({ property }: { property: any }) => {
  return (
    <Card
      width={"100%"}
      height={"100%"}
      flexBasis={{ base: "50%", md: "30%" }}
      m={2}
      rounded={"3xl"}
      bg={"white"}
    >
      <CardHeader>
        <Stack
          position={"relative"}
          width={"100%"}
          height={"200px"}
          objectFit={"contain"}
        >
          <Image
            src={property.img}
            alt="img"
            objectFit={"cover"}
            rounded={"3xl"}
            width={"100%"}
            height={"100%"}
          />
        </Stack>
      </CardHeader>
      <CardBody>
        <Text>${property.price}</Text>
        <Text>{property.name}</Text>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
